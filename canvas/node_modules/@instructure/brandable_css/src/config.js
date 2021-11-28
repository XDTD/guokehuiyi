const loadConfig = require('./loadConfig')

// TODO: inject the config into the various users so that it can be changed at
// runtime (e.g. in test)
module.exports = loadConfig(process.env.BRANDABLE_CSS_CONFIG_FILE || 'config/brandable_css.yml')
