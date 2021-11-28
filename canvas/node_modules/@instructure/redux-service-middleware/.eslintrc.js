const baseConfig = require('@instructure/ui-eslint-config')
module.exports = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    'plugin:jest/recommended'
  ],
  ignorePatterns: [
    'lib/**/*'
  ],
  plugins: [
    'jest',
    'mocha',
    'notice',
    'instructure-ui'
  ]
}
