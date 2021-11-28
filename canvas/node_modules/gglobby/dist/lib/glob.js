"use strict";

var _utils = require("./utils");

var grep = _utils.grep;
var except = _utils.except;

function Glob(pattern) {
  this.isInverse = pattern[0] === "!";
  if (this.isInverse) pattern = pattern.slice(1);
  pattern = pattern.replace(/^\/?(\*\*\/)+/, "");
  pattern = pattern.replace(/(\/\*\*)+\/\*$/, "/**");
  this.isDirectory = !!pattern.match(/\/$/);
  this.isExactMatch = !!(pattern.match(/^\//) && !pattern.match(/[\*\?]/));
  this.pattern = pattern;
}

Glob.prototype.match = function (files) {
  if (!files || !files.length) return [];
  return grep(files, this.toRegExp());
};

// see https://www.kernel.org/doc/man-pages/online/pages/man7/glob.7.html
var GLOB_BRACKET_EXPR = "\\[" + // brackets
"!?" + // (maybe) negation
"\\]?" + // (maybe) right bracket
"(?:" + // one or more:
"\\[[^\\/\\]]+\\]" + // named character class, collating symbol or equivalence class
"|[^\\/\\]]" + // non-right bracket character (could be part of a range)
")+" + "\\]";
var GLOB_ESCAPED_CHAR = "\\\\.";
var GLOB_RECURSIVE_WILDCARD = "\\/\\*\\*(?:\\/|$)";
var GLOB_WILDCARD = "[\\?\\*]";

var GLOB_TOKENIZER = new RegExp(GLOB_BRACKET_EXPR + "|" + GLOB_ESCAPED_CHAR + "|" + GLOB_RECURSIVE_WILDCARD, "g");

GLOB_BRACKET_EXPR = new RegExp(GLOB_BRACKET_EXPR, "g");
GLOB_ESCAPED_CHAR = new RegExp(GLOB_ESCAPED_CHAR, "g");
GLOB_RECURSIVE_WILDCARD = new RegExp(GLOB_RECURSIVE_WILDCARD, "g");
GLOB_WILDCARD = new RegExp(GLOB_WILDCARD, "g");

var WILDCARD_REGEXP_MAP = {
  "?": "[^/]",
  "*": "[^/]*"
};

// borrowed from https://github.com/fivetanley/i18nliner-handlebars/blob/master/lib/pre_processor.js
function splitCapture(pattern, string) {
  var result = [];
  var lastIndex = pattern.lastIndex = 0;
  var match;
  var s;
  while (match = pattern.exec(string)) {
    match = match[0];
    s = string.slice(lastIndex, pattern.lastIndex - match.length);
    if (s.length) result.push(s);
    result.push(match);
    lastIndex = pattern.lastIndex;
  }
  s = string.slice(lastIndex);
  if (s.length) result.push(s);
  return result;
}

function escapeRegExp(string) {
  return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function partToRegExp(part) {
  if (part.match(GLOB_BRACKET_EXPR)) {
    // fix negation and escape right bracket
    return part.replace(/^\[!/, "[^").replace(/^(\[\^?)\]/, "$1\\]");
  } else if (part.match(GLOB_ESCAPED_CHAR)) {
    return part;
  } else if (part.match(GLOB_RECURSIVE_WILDCARD)) {
    return part.slice(-1) === "/" ? "/(.+/)?" : "/.*";
  } else if (part.match(GLOB_WILDCARD)) {
    var parts = except(splitCapture(GLOB_WILDCARD, part), [""]);
    var len;
    var i;
    for (i = 0, len = parts.length; i < len; i++) {
      parts[i] = WILDCARD_REGEXP_MAP[parts[i]] || escapeRegExp(parts[i]);
    }
    return parts.join("");
  } else {
    // literal path component (maybe with slashes)
    return part;
  }
}

Glob.prototype.toRegExp = function () {
  var parts = except(splitCapture(GLOB_TOKENIZER, this.pattern), [""]);
  var i;
  var len;
  var result;

  if (parts[0][0] === "/") {
    result = "^";
    parts[0] = parts[0].slice(1);
  } else {
    result = "(^|/)";
  }

  for (i = 0, len = parts.length; i < len; i++) {
    result += partToRegExp(parts[i]);
  }
  if (result.slice(-1) === "/") result += "$";else if (result.slice(-2) === ".*") result = result.slice(0, -2);else result += "(\\/|$)";
  return new RegExp(result);
};

module.exports = Glob;