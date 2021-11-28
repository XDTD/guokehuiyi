const {promisify} = require('util')
const fs = require('fs-extra-promise')
const glob = promisify(require('glob'))
const path = require('path')
const _ = require('lodash')
const chalk = require('chalk')
const chokidar = require('chokidar')
const {checksum, relativeFileChecksum} = require('./checksum')
const compileSingleBundle = require('./compileBundle')
const {debug, relativeSassPath, isSassPartial, onError} = require('./utils')
const CONFIG = require('./config')
const PATHS = CONFIG.paths
const VARIANTS = require('./variants')
const cache = require('./cache')
const generateIndex = require('./generateIndex')

function cacheKey (bundleName, variant) {
  return [bundleName, variant].join(CONFIG.manifest_key_seperator)
}

function cacheFor (bundleName, variant) {
  return cache.bundles_with_deps.data[cacheKey(bundleName, variant)]
}

exports.allFingerprintsFor = function allFingerprintsFor (bundleName) {
  return VARIANTS.reduce((accumulator, variant) => {
    const cached = cacheFor(bundleName, variant)
    if (cached) accumulator[variant] = cached
    return accumulator
  }, {})
}

function cssFileExists ({bundleName, variant, combinedChecksum, includesNoVariables}) {
  const filename = cssFilename({bundleName, variant, combinedChecksum, includesNoVariables})
  return fs.existsAsync(filename)
}

// This is a fast way to find all the bundles that need to be rebuilt on startup
async function findChangedBundles (bundles) {
  const changedFiles = new Set()
  const unchangedFiles = new Set()
  const toCompile = {}

  function fasterHasFileChanged (filename) {
    if (unchangedFiles.has(filename)) return false
    if (changedFiles.has(filename)) return true
    const iHaveChanged = hasFileChanged(filename)
    iHaveChanged ? changedFiles.add(filename) : unchangedFiles.add(filename)
    if (iHaveChanged) debug(filename, 'changed')
    return iHaveChanged
  }

  await Promise.all(bundles.map(async function (bundleName) {
    let includesNoVariables
    await Promise.all(VARIANTS.map(async function (variant) {
      if (includesNoVariables) return
      let thisVariantHasChanged = false
      const cached = cacheFor(bundleName, variant)
      debug('cached was', bundleName, variant, cached)
      if (!cached) {
        thisVariantHasChanged = true
        changedFiles.add(bundleName)
      } else {
        if (cached.includesNoVariables) includesNoVariables = true

        // check all files on disk included in this bundle to see if the've changed
        for (let filename of cached.includedFiles) {
          if (fasterHasFileChanged(filename)) {
            thisVariantHasChanged = true
            break
          }
        }

        // check to actually make sure the css file exists
        if (!thisVariantHasChanged && !(await cssFileExists({
          bundleName,
          variant,
          combinedChecksum: cached.combinedChecksum,
          includesNoVariables: cached.includesNoVariables
        }))) {
          thisVariantHasChanged = true
        }
      }
      if (thisVariantHasChanged) {
        _.set(toCompile, [bundleName, variant, 'compileSelf'], true)
      }
    }))
  }))
  return toCompile
}

exports.checkAll = async function checkAll () {
  debug('checking all sass bundles to see if they need updating')
  const bundles = await glob(PATHS.all_sass_bundles)
  const changedBundles = await findChangedBundles(bundles.map(relativeSassPath))
  debug('these bundles have changed', changedBundles)
  return processChangedBundles(changedBundles)
}

async function processChangedBundles (changedBundles) {
  debug('processing these bundles', changedBundles)

  await Promise.all(_.map(changedBundles, async function (variants, bundleName) {
    let includesNoVariables

    async function compileUnlessIncludesNoVariables ({variant}) {
      if (includesNoVariables) return
      const result = await compileBundle({variant, bundleName})
      if (typeof includesNoVariables === 'undefined') {
        includesNoVariables = result.includesNoVariables
        if (includesNoVariables) {
          VARIANTS.forEach((variant) => updateCache(_.defaults({variant}, result)))
        }
      }
      return result
    }

    await Promise.all(Object.keys(variants).map(async function (variant) {
      if (includesNoVariables) return
      const compileSelf = variants[variant].compileSelf
      if (compileSelf) await compileUnlessIncludesNoVariables({variant})
    }))
  }))

  for (const name of Object.keys(CONFIG.indices || {})) {
    const { path, bundles, keysz } = CONFIG.indices[name]
    const index = cache.createCache({ filename: path })

    index.data = generateIndex({
      combinedChecksums: cache.bundles_with_deps.data,
      keysz,
      manifestKeySeperator: CONFIG.manifest_key_seperator,
      name,
      pattern: bundles,
    })

    await index.save({ compact: true })
  }

  if (_.isEmpty(changedBundles)) {
    console.info(chalk.green('no sass changes detected'))
  }

  return cache.saveAll()
}

function getChecksum (relativePath) {
  let md5 = cache.file_checksums.data[relativePath]
  if (!md5) {
    md5 = relativeFileChecksum(relativePath)
    cache.file_checksums.update(relativePath, md5)
  }
}

async function compileBundle ({variant, bundleName}) {
  const result = await compileSingleBundle({bundleName, variant})
  const includedFiles = result.includedFiles.map(relativeSassPath)
  if (watcher) {
    result.includedFiles.forEach((f) => watcher.add(f))
  }
  const md5s = includedFiles.map(getChecksum)
  const metaData = {
    variant,
    bundleName,
    includedFiles,
    combinedChecksum: checksum(result.css + md5s),
    includesNoVariables: !includedFiles.some(filename => filename.includes('/_variant_variables.scss'))
  }
  updateCache(metaData)

  const filename = cssFilename(metaData)
  await fs.outputFileAsync(filename, result.css)
  return metaData
}

function cssFilename ({bundleName, variant, combinedChecksum, includesNoVariables}) {
  const {dir, name} = path.posix.parse(bundleName)
  const baseDir = includesNoVariables ? 'no_variables' : variant
  return path.join(PATHS.output_dir, baseDir, dir, `${name}-${combinedChecksum}.css`)
}

function updateCache ({variant, bundleName, combinedChecksum, includedFiles, includesNoVariables}) {
  cache.bundles_with_deps.update(cacheKey(bundleName, variant), {combinedChecksum, includedFiles, includesNoVariables})
}

function onBundleDeleted (bundleName) {
  cache.bundles_with_deps.clearMatching(bundleName)
  cache.file_checksums.update(bundleName, undefined)
}

async function onFilesystemChange (eventType, filePath, details) {
  try {
    debug('onFilesystemChange', eventType, filePath, details.type)
    if (details.type !== 'file' || details.event === 'unknown') return

    filePath = relativeSassPath(filePath)

    if (eventType === 'deleted') {
      cache.file_checksums.update(filePath, undefined)
      if (!isSassPartial(filePath)) onBundleDeleted(filePath)
      unwatch(filePath)
      return
    }
    if (hasFileChanged(filePath)) {
      debug('changed contents', filePath)
      return await processChangedBundles(whatToCompileIfFileChanges(filePath))
    }
    debug('unchanged', filePath)
  } catch (e) {
    onError(e)
  }
}

function whatToCompileIfFileChanges (filename) {
  let toCompile = {}
  if (!isSassPartial(filename)) {
    const bundleName = filename
    for (const variant of VARIANTS) {
      _.set(toCompile, [bundleName, variant, 'compileSelf'], true)
    }
  } else {
    for (const key in cache.bundles_with_deps.data) {
      if (_.includes(cache.bundles_with_deps.data[key].includedFiles, filename)) {
        const [bundleName, variant] = key.split(CONFIG.manifest_key_seperator)
        _.set(toCompile, [bundleName, variant, 'compileSelf'], true)
      }
    }
  }
  return toCompile
}

function hasFileChanged (relativePath) {
  const cached = cache.file_checksums.data[relativePath]
  const current = relativeFileChecksum(relativePath)
  cache.file_checksums.update(relativePath, current)
  return cached !== current
}

var watcher
const watched = new Set()
function watch (filename) {
  if (!watcher || watched.has(filename)) return
  watched.add(filename)
  watcher.add(filename)
}
function unwatch (filename) {
  if (!watcher || !watched.delete(filename)) return
  debug('unwatching', filename)
  watcher.unwatch(filename)
}
exports.startWatcher = function startWatcher () {
  debug('watching for changes to any scss files')
  watcher = chokidar
    .watch(PATHS.brandable_variables_json, {persistent: true, cwd: PATHS.sass_dir}) // TODO: remove line
    .on('add', (f) => debug('file added to watcher', f))
    .add(PATHS.all_sass_bundles)

  for (const key in cache.bundles_with_deps.data) {
    cache.bundles_with_deps.data[key].includedFiles.forEach(watch)
  }
  watcher.on('raw', onFilesystemChange)
}

exports.contriveId = require('./contriveId')
exports.config = CONFIG