// If you want compressed output (eg: in production), set the environment
// variable SASS_STYLE=compressed. For rails apps, we'll fall back to a sane
// default of using "compressed" if RAILS_ENV == production
const SASS_STYLE = process.env.SASS_STYLE || 'nested'

module.exports = SASS_STYLE
