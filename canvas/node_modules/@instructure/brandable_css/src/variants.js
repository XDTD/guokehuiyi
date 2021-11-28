const config = require('./config')

const variants = Object.keys(config.variants)
module.exports = Object.freeze(variants)
