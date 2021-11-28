/* global describe, it, context */

import Globby from "../lib/main";
import {except, merge} from "../lib/utils";
import fs from "fs";
import path from "path";
import mkdirp from "mkdirp";
import temp from "temp";
import rimraf from "rimraf";
import {exec} from "shelljs";
import glob from "glob";
import touch from "touch";
import {assert} from "chai";

function gitignoreTest(test) {
  var tmpDir = temp.mkdirSync();
  var origDir = process.cwd();
  try {
    process.chdir(tmpDir);
    prepareFiles();
    exec("git init .");
    test();
  }
  finally {
    process.chdir(origDir);
    rimraf.sync(tmpDir);
  }
}

function prepareGitignore() {
  var ignore =
    "# here we go...\n" +
    "\n" +
    "# some dotfiles\n" +
    ".hidden\n" +
    "\n" +
    "# html, but just in the root\n" +
    "/*.html\n" +
    "\n" +
    "# all rb files anywhere\n" +
    "*.rb\n" +
    "\n" +
    "# except rb files immediately under foobar\n" +
    "!foobar/*.rb\n" +
    "\n" +
    "# this will match foo/bar but not bar\n" +
    "bar/\n" +
    "\n" +
    "# this will match nothing\n" +
    "foo*bar/baz.pdf\n" +
    "\n" +
    "# this will match baz/ and foobar/baz/\n" +
    "baz";
  fs.writeFileSync('.gitignore', ignore);
  return ignore;
}

function prepareFiles() {
  var files = [
    '.gitignore',
    'foo.rb',
    'foo.html',
    'bar',
    'baz/lol.txt',
    'foo/.hidden',
    'foo/bar.rb',
    'foo/bar.html',
    'foo/bar/baz.pdf',
    'foobar/.hidden',
    'foobar/baz.txt',
    'foobar/baz.rb',
    'foobar/baz/lol.wut'
  ];
  for (var i = 0; i < files.length; i++) {
    mkdirp(path.dirname(files[i]));
    touch("./" + files[i]);
  }
}

function untracked() {
  return exec("git status -uall -s", {silent: true}).
    output.
    replace(/^\?\? /gm, '').
    trim().
    split(/\n/);
}

function justFiles(files) {
  var result = [];
  for (var i = 0; i < files.length; i++) {
    if (!fs.statSync(files[i]).isDirectory())
      result.push(files[i]);
  }
  return result;
}

function gitFiles() {
  var files = glob.sync('.git/**/*', {dot: true});
  return justFiles(files);
}

function allFiles() {
  var files = glob.sync('**/*', {dot: true});
  return justFiles(files);
}

describe("Globby", function() {
  describe(".select", function() {
    it("should match .gitignore perfectly", function() {
      gitignoreTest(function() {
        var rules = prepareGitignore();
        assert.deepEqual(
          Globby.select(rules.split(/\n/)).files,
          except(except(allFiles(), gitFiles()), untracked())
        );
      });
    });
  });

  describe(".reject", function() {
    it("should match the inverse of .gitignore, plus .git", function() {
      gitignoreTest(function() {
        var rules = prepareGitignore();
        assert.deepEqual(
          Globby.reject(rules.split(/\n/)).files,
          merge(gitFiles(), untracked())
        );
      });
    });
  });
});
