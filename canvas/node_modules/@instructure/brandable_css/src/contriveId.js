const revHash = require('rev-hash')

module.exports = (string, size) => revHash(string).slice(0, size)
