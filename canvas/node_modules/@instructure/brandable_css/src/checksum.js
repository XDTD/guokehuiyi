const revHash = require('rev-hash')
const fs = require('fs')
const path = require('path')
const CONFIG = require('./config')

function checksum (data) {
  if (typeof data === 'string') {
    data = Buffer.from(data)
  }
  // we use revHash here because that is the same thing 'gulp-rev' uses
  return revHash(data)
}

function relativeFileChecksum (relativePath) {
  return fileChecksumSync(path.join(CONFIG.paths.sass_dir, relativePath))
}

function fileChecksumSync (filename) {
  try {
    return checksum(fs.readFileSync(filename))
  } catch (e) {
    return ''
  }
}
exports.fileChecksumSync = fileChecksumSync
exports.relativeFileChecksum = relativeFileChecksum
exports.checksum = checksum
