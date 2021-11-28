'use strict'

/* -----------------------------------------------------------------------------
 * nodeflags
 * -------------------------------------------------------------------------- */

// 3rd party
var _ = require('lodash')
var v8flags = require('v8flags')
var semver = require('semver')

/* -----------------------------------------------------------------------------
 * nodeflags
 * -------------------------------------------------------------------------- */

module.exports = function (includeCommands, callback) {
  if (!callback) {
    callback = includeCommands
    includeCommands = false
  }

  var version = process.version.substr(1)
  var nodeflags = _.assign({}, options, includeCommands ? commands : {})

  v8flags(function (err, flags) {
    if (err) {
      return callback(err)
    }

    // transform v8flags array to keyed object
    flags = _.reduce(flags, function (flags, flag) {
      flags[flag.substr(2)] = { type: 'boolean' }
      return flags
    }, {})

    flags = _.pickBy(_.assign(flags, nodeflags), function (flag, key) {
      // v8flags don't need to be versioned as they are auto generated base on
      // current version
      return flag._version
        ? semver.gte(version, flag._version)
        : true
    })

    callback(null, flags)
  })
}

// irrelevant in the context of proxying args which is the primary reasoning
// behind the creation of this module
var commands = {
  'version': {
    type: 'boolean',
    alias: 'v',
    _version: '0.1.3'
  },
  'help': {
    type: 'boolean',
    alias: 'h',
    _version: '0.1.3'
  },
  'eval': {
    type: 'string',
    alias: 'e',
    _version: '0.5.2'
  },
  'print': {
    type: 'boolean',
    alias: 'p',
    _version: '0.6.4'
  },
  'check': {
    type: 'boolean',
    alias: 'c',
    _version: '5.0.0'
  },
  'interactive': {
    type: 'boolean',
    alias: 'i',
    _version: '0.7.7'
  },
  'v8-options': {
    type: 'boolean',
    _version: '0.1.3'
  }
}

var options = {
  'require': {
    type: 'string',
    alias: 'r',
    _version: '1.6.0'
  },
  'no-deprecation': {
    type: 'boolean',
    _version: '0.8.0'
  },
  'trace-deprecation': {
    type: 'boolean',
    _version: '0.8.0'
  },
  'throw-deprecation': {
    type: 'boolean',
    _version: '0.11.14'
  },
  'no-warnings': {
    type: 'boolean',
    _version: '6.0.0'
  },
  'trace-warnings': {
    type: 'boolean',
    _version: '6.0.0'
  },
  'trace-sync-io': {
    type: 'boolean',
    _version: '2.1.0'
  },
  'track-heap-objects': {
    type: 'boolean',
    _version: '2.4.0'
  },
  'prof-process': {
    type: 'boolean',
    _version: '6.0.0'
  },
  'zero-fill-buffers': {
    type: 'boolean',
    _version: '6.0.0'
  },
  'tls-cipher-list': {
    type: 'string',
    _version: '4.0.0'
  },
  'openssl-config': {
    type: 'string',
    _version: '6.9.0'
  },
  'icu-data-dir': {
    type: 'string',
    _version: '0.11.15'
  },
  'preserve-symlinks': {
    type: 'boolean',
    _version: '6.3.0'
  },

  // included in docs but not help (const custom node compile)
  'enable-fips': {
    type: 'boolean',
    _version: '6.0.0'
  },
  'force-fips': {
    type: 'boolean',
    _version: '6.0.0'
  },

  // included in --help but not docs
  'v8-pool-size': {
    type: 'number',
    // https://github.com/nodejs/node/pull/5970
    _version: '5.10.0'
  },

  // undocumented
  'debug-brk': {
    type: 'boolean',
    // https://github.com/nodejs/node/commit/8a15147bc53849417f8737dd873877d497867c9f
    _version: '0.7.7'
  }
}
