exports.debug = require('debug')('brandable_css')
const path = require('path')
const CONFIG = require('./config')

exports.relativeSassPath = (absPath) =>
  path.relative(path.join(process.cwd(), CONFIG.paths.sass_dir), absPath)

exports.isSassPartial = (filePath) =>
  path.basename(filePath)[0] === '_'

exports.onError = (err) => {
  console.error('error compiling sass', err, err.stack, err.message)
  process.exit(1)
}
