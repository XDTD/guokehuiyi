const _ = require('lodash')
const yaml = require('js-yaml')
const fs = require('fs')
const CONFIG = require('./config')

module.exports = _.map(yaml.safeLoad(fs.readFileSync(CONFIG.paths.browsers_yml)).minimums, (version, browserName) => {
  return browserName.replace('Internet Explorer', 'Explorer') + ' >= ' + version
})
