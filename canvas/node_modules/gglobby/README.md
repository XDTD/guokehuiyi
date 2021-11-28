# globby

globby is a [`.gitignore`](http://www.kernel.org/pub/software/scm/git/docs/gitignore.html)-style
file globber for JavaScript. It's *not* a general replacement for [glob](https://github.com/isaacs/node-glob),
but it is potentially a better choice if you're globbing a large js
project and applying a long list of exclusion patterns.

not to be confused with the [other globby](https://github.com/sindresorhus/globby). sadlol story [here](https://github.com/jenseng/globby-js/commit/a48af78)
(i thought i had learned my lesson after the i18nline/i18nliner fiasco, but apparently not).

## Installation

`npm install gglobby`

## Usage

    var Globby = require('gglobby');

    // all files matched by the rules
    Globby.select(rules).files;

    // all other files
    Globby.reject(rules).files;

    // ooh chaining!
    Globby.select(rules).reject(other_rules).files;

### An example:

     > var rules = fs.readFileSync('.gitignore').split(/\n/)
    => ["/node_modules", "/tmp", "/build"]

     > Globby.select(rules).result
    => [
      "node_modules/browserify/.npmignore",
      "node_modules/browserify/.travis.yml",
      ...
      "tmp/test/extractors/translate_call_test.js",
      "tmp/test/extractors/translation_hash_test.js"
    ]

## Why on earth would I ever use this?

* You're curious what is getting `.gitignore`'d and/or you want to do something
  with those files.
* You're writing a library/tool that will have its own list of ignored/tracked
  files. My use case is for an I18n library that extracts strings from js/hbs
  files... I need to provide users a nice configurable way to blacklist given
  files/directories/patterns.

## Compatibility Notes

globby is compatible with `.gitignore` rules; it respects negated patterns, and
ignores comments or empty patterns. That said, it supports some things that may
or may not work in your version of git. These platform-dependent `.gitignore`
behaviors are platform independent in globby and can always be used:

 * Recursive wildcards à la ant/zsh/node-glob. `**` matches directories recursively.
 * Basic [glob(7)](https://www.kernel.org/doc/man-pages/online/pages/man7/glob.7.html)-style
   bracket expressions, i.e. character classes, ranges, and
   complementation. Named character classes, collating symbols, and
   equivalence class expressions are not yet supported. Note that the
   syntax for some of these is slightly different than what you would
   find in regular expressions. Refer to [the documentation](https://www.kernel.org/doc/man-pages/online/pages/man7/glob.7.html)
   for more info.

## Related Projects

* [globby(.rb)](https://github.com/jenseng/globby)

## License

Copyright (c) 2015 Jon Jensen, released under the MIT license
