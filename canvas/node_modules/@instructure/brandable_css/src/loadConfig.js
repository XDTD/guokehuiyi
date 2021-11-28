const fs = require('fs')
const yaml = require('js-yaml')

module.exports = function loadConfig (pathToYamlFile) {
  return Object.freeze(yaml.safeLoad(fs.readFileSync(pathToYamlFile)))
}
