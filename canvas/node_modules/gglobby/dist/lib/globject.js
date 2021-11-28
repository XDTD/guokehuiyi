"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var fs = _interopRequire(require("fs"));

function GlObject(files, dirs) {
  this.files = files || [];
  this.dirs = dirs || [];
}

function getFilesAndDirs(root, files, dirs) {
  root = root === "." ? "" : root + "/";
  files = files || [];
  dirs = dirs || [];
  var entries = fs.readdirSync(root || ".");
  var entry;
  var i;
  var len;
  for (i = 0, len = entries.length; i < len; i++) {
    entry = entries[i];
    if (fs.statSync(root + entry).isDirectory()) {
      dirs.push(root + entry + "/");
      getFilesAndDirs(root + entry, files, dirs);
    } else {
      files.push(root + entry);
    }
  }
  return [files, dirs];
}

GlObject.all = function () {
  var result = getFilesAndDirs(".");
  var files = result[0];
  var dirs = result[1];
  return new GlObject(files, dirs);
};

module.exports = GlObject;