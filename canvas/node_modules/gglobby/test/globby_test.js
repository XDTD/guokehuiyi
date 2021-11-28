/* global describe, it, context */

import Globby from '../lib/main';
import GlObject from "../lib/globject";
import {uniq} from "../lib/utils";
import {assert} from "chai";

function select(patterns, files) {
  return Globby.select(patterns, files).files;
}

function filesFor(files) {
  var dirs = [];
  var i;
  var len;
  var path;

  files = files.sort();
  for (i = 0, len = files.length; i < len; i++) {
    path = files[i];
    while (path.match(/\/[^\/]+$/)) {
      path = path.replace(/\/[^\/]+$/, '');
      dirs.push(path + "/");
    }
  }
  dirs = uniq(dirs.sort());
  return new GlObject(files, dirs);
}

describe("Globby", function() {
  it("should support chaining", function() {
    var files = filesFor(["foo/bar.rb", "foo/baz.rb", "foo/c/bar.html", "foo/c/c/bar.rb"]);
    var result = Globby.select(["*rb"], files).
                        reject(["baz*"]).
                        select(["c"]).
                        files;
    assert.deepEqual(
      result,
      ["foo/c/c/bar.rb"]
    );
  });

  describe(".select", function() {
    context("a blank line", function() {
      it("should return nothing", function() {
        var files = filesFor(["foo"]);
        assert.deepEqual(
          select([""], files),
          []
        );
      });
    });

    context("a comment", function() {
      it("should return nothing", function() {
        var files = filesFor(["foo"]);
        assert.deepEqual(
          select(["#"], files),
          []
        );
      });
    });

    context("a pattern ending in a slash", function() {
      it("should return a matching directory's contents", function() {
        var files = filesFor(["foo/bar/baz", "foo/bar/baz2"]);
        assert.deepEqual(
          select(["bar/"], files),
          ["foo/bar/baz", "foo/bar/baz2"]
        );
      });

      it("should ignore symlinks and regular files", function() {
        var files = filesFor(["foo/bar", "bar/baz"]);
        assert.deepEqual(
          select(["bar/"], files),
          ["bar/baz"]
        );
      });
    });

    context("a pattern starting in a slash", function() {
      it("should return only root glob matches", function() {
        var files = filesFor(["foo/bar", "bar/foo"]);
        assert.deepEqual(
          select(["/foo"], files),
          ["foo/bar"]
        );
      });
    });

    context("a pattern with a *", function() {
      it("should return matching files", function() {
        var files = filesFor(["foo/bar", "foo/baz"]);
        assert.deepEqual(
          select(["*z"], files),
          ["foo/baz"]
        );
      });

      it("should not glob slashes", function() {
        var files = filesFor(["foo/bar", "foo/baz"]);
        assert.deepEqual(
          select(["foo*bar"], files),
          []
        );
      });
    });

    context("a pattern with a ?", function() {
      it("should return matching files", function() {
        var files = filesFor(["foo/bar", "foo/baz"]);
        assert.deepEqual(
          select(["b?z"], files),
          ["foo/baz"]
        );
      });

      it("should not glob slashes", function() {
        var files = filesFor(["foo/bar", "foo/baz"]);
        assert.deepEqual(
          select(["foo?bar"], files),
          []
        );
      });
    });

    context("a pattern with a **", function() {
      it("should match directories recursively", function() {
        var files = filesFor(["foo/bar", "foo/baz", "foo/c/bar", "foo/c/c/bar"]);
        assert.deepEqual(
          select(["foo/**/bar"], files),
          ["foo/bar", "foo/c/bar", "foo/c/c/bar"]
        );
      });
    });

    context("a pattern with bracket expressions", function() {
      it("should return matching files", function() {
        var files = filesFor(["boo", "fob", "f0o", "foo/bar", "poo/baz"]);
        assert.deepEqual(
          select(["[e-g][0-9a-z][!b]"], files),
          ["f0o", "foo/bar"]
        );
      });
    });
  });
});

