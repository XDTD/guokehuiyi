const sass = require('sass')
const path = require('path')
const chalk = require('chalk')
const url = require('url')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const postcssUrl = require('postcss-url')
const CONFIG = require('./config')
const PATHS = CONFIG.paths
const SASS_STYLE = require('./sass_style')
const {fileChecksumSync} = require('./checksum')
const supportedBrowsers = require('./supportedBrowsers')
const cache = require('./cache')
const {relativeSassPath} = require('./utils')

function revedUrl (originalUrl, md5) {
  let parsedUrl = url.parse(originalUrl)
  const {dir, name, ext} = path.posix.parse(parsedUrl.pathname)
  parsedUrl.pathname = `/dist${dir}/${name}-${md5}${ext}`
  return url.format(parsedUrl)
}

function warn () {
  console.error(chalk.yellow('brandable_css warning', ...arguments))
}

module.exports = async function compileBundle ({bundleName, variant}) {
  const sassFile = path.join(PATHS.sass_dir, bundleName)
  let includePaths = [PATHS.sass_dir, path.join(PATHS.sass_dir, 'variants', variant)]

  let urlsFoundInCss = new Set()
  function putMD5sInUrls (originalParsedUrl) {
    const originalUrl = originalParsedUrl.url
    const parsedUrl = url.parse(originalUrl)
    if (!parsedUrl.pathname || parsedUrl.protocol === 'data:') {
      return originalUrl
    }
    if (parsedUrl.host || parsedUrl.href.indexOf('//') === 0 || !parsedUrl.path) {
      warn(bundleName, variant, 'has an external url() to:', originalUrl, 'that\'s not a problem but normally our css only links to files in our repo')
      return originalUrl
    }
    const pathToFile = path.join(PATHS.public_dir, parsedUrl.pathname)
    const relativePath = relativeSassPath(pathToFile)
    let md5 = cache.file_checksums.data[relativePath]
    if (!md5) {
      md5 = fileChecksumSync(pathToFile)
      if (!md5) {
        warn(bundleName, variant, 'contains a url() to:', originalUrl, 'which doesn\'t exist on disk')
        return originalUrl
      }
      cache.file_checksums.update(relativePath, md5)
    }
    urlsFoundInCss.add(pathToFile)
    return revedUrl(originalUrl, md5)
  }

  const startTime = new Date()
  const nodeSassResult = sass.renderSync({
    file: sassFile,
    includePaths: includePaths,
    outputStyle: SASS_STYLE === 'nested' ? 'expanded' : SASS_STYLE,
    sourceComments: SASS_STYLE !== 'compressed',
    sourceMap: false
  })

  const postcssResult = await postcss([
    autoprefixer({browsers: supportedBrowsers}),
    postcssUrl({url: putMD5sInUrls})
  ]).process(nodeSassResult.css, {from: sassFile})

  postcssResult.warnings().forEach(warn)
  console.warn(chalk.green('compiled', bundleName, variant, 'in'), new Date() - startTime, 'ms')

  return {
    css: postcssResult.css,
    includedFiles: nodeSassResult.stats.includedFiles.concat([...urlsFoundInCss])
  }
}
