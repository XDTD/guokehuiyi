/* eslint-env mocha */
'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
var assert = require('chai').assert

// lib
var nodeflags = require('../lib/index')

/* -----------------------------------------------------------------------------
 * test
 * -------------------------------------------------------------------------- */

describe('nodeflags', function () {
  it('Should return available flags.', function (done) {
    nodeflags(function (_err, flags) {
      assert.isUndefined(flags['version'])
      assert.isObject(flags['trace-deprecation'])
      assert.isObject(flags['logfile'])

      done()
    })
  })

  it('Should return command flags.', function (done) {
    nodeflags(true, function (_err, flags) {
      assert.isObject(flags['version'])

      done()
    })
  })
})
