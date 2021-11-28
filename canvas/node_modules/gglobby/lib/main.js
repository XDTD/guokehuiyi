import Glob from "./glob";
import GlObject from "./globject";
import {except, merge} from "./utils";

function evaluatePattern(pattern, source, result) {
  var glob = new Glob(pattern);
  var method;
  var candidates;
  var dirMatches;
  var fileMatches;

  if (glob.isInverse) {
    method = except;
    candidates = result;
  } else {
    method = merge;
    candidates = source;
  }

  dirMatches = glob.match(candidates.dirs);
  fileMatches = [];
  if (!glob.isDirectory && (!glob.isExactMatch || !dirMatches.length))
    fileMatches = glob.match(candidates.files);
  if (dirMatches.length)
    result.dirs = method(result.dirs, dirMatches);
  if (fileMatches.length)
    result.files = method(result.files, fileMatches);
}

function evaluatePatterns(patterns, source, result) {
  var pattern;
  var i;
  var len;
  for (i = 0, len = patterns.length; i < len; i++) {
    pattern = patterns[i];
    if (!pattern.match(/^[^#]/)) continue;
    evaluatePattern(pattern, source, result);
  }
}

function Chainable(files, dirs) {
  this.files = files;
  this.dirs = dirs;
}

var Globby = {
  select: function(patterns, source) {
    source = source || GlObject.all();

    var result = new GlObject();
    var dirs;
    var dirPatterns;
    var i;
    var len;

    evaluatePatterns(patterns, source, result);
    dirs = result.dirs;

    if (dirs && (len = dirs.length)) {
      // now go merge/subtract files under directories
      dirPatterns = [];
      for (i = 0; i < len; i++) {
        dirPatterns.push("/" + dirs[i] + "**");
      }
      evaluatePatterns(dirPatterns, new GlObject(source.files), result);
    }

    return new Chainable(result.files, source.dirs);
  },

  reject: function(patterns, source) {
    source = source || GlObject.all();
    return new Chainable(except(source.files, this.select(patterns, source).files, source.dirs));
  }
};

Chainable.prototype.select = function(patterns) {
  return Globby.select(patterns, this.toGlObject());
};

Chainable.prototype.reject = function(patterns) {
  return Globby.reject(patterns, this.toGlObject());
};

Chainable.prototype.toGlObject = function() {
  return new GlObject(this.files, this.dirs);
};

export default Globby;
