// For examples
// https://github.com/karma-runner/karma/blob/master/lib/reporters/base.js
// https://github.com/karma-runner/karma-junit-reporter/blob/master/index.js
// https://github.com/karma-runner/karma-growl-reporter/blob/master/index.js

var request = require('request');
var RSVP = require('rsvp');
var QUnitParser = require('qunit-parser');
var _ = require('lodash');
var ENV = process.env;

var FireworkReporter = function(baseReporterDecorator, config, logger, helper, formatError) {
  var collector;
  var queue = new RSVP.Promise(function(resolve,reject) {resolve()});

  baseReporterDecorator(this);

  // this.onBrowserStart = function(browser) {
  // };
  var origOnRunStart = this.onRunStart || function() {};
  this.onRunStart = function(browsers) {
    suites = Object.create(null);

    collector = {
      project: ENV.GERRIT_PROJECT,
      results: []
    };

    if (ENV.GERRIT_CHANGE_NUMBER) {
      collector.run = {};
      collector.run.gerrit_change_id = ENV.GERRIT_CHANGE_NUMBER;
      if (ENV.GERRIT_PATCHSET_NUMBER) collector.run.gerrit_change_patchset = ENV.GERRIT_PATCHSET_NUMBER;
      if (ENV.GERRIT_CHANGE_URL) collector.run.url = ENV.GERRIT_CHANGE_URL;
    }

    if (ENV.JOB_NAME) {
      collector.build = {};
      collector.build.ci_project = ENV.JOB_NAME;
      if (ENV.BUILD_NUMBER) collector.build.ci_build_id = ENV.BUILD_NUMBER;
      if (ENV.BUILD_URL) collector.build.url = ENV.BUILD_URL;
    }
    origOnRunStart.apply(this, arguments);
  }

  this.onSpecComplete = function(browser, result) {
    var collectorResult = _.pick(result,'success');
    collectorResult.test = result.description;
    collectorResult.browser = browser.name;
    collectorResult.duration_ms = browser.lastResult.netTime;
    collectorResult.context = result.suite;

    if(!result.success) {
      var parsedLog = QUnitParser.parseLog(result.log[0]);
      _.assign(collectorResult,_.pick(parsedLog,'actual','expected','backtrace'));
      collectorResult.details = parsedLog.description;
    }

    collector.results.push(collectorResult);
  };

  // this.onBrowserError = function(browser, error) {
  // };

  // this.onBrowserLog = function(browser, log, type) {
  // };

  this.postResults = function() {
    var promise = new RSVP.Promise(function(resolve,reject) {
      request({
        method: 'POST',
        url: ENV.FIREWORK_URL.replace(/\/?$/, '') + '/api/result_batch',
        body: JSON.stringify(collector)
      }, function(error, response, body) {
        resolve();
      });      
    });
    collector = null;
    return promise;
  };

  this.onRunComplete = function() {
    queue.then(this.postResults);
  };

  this.onExit = function(done) {
    queue.then(done);
  };
};

FireworkReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError'];

module.exports = {
  'reporter:firework': ['type', FireworkReporter]
};
