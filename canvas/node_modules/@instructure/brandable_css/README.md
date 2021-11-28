# brandable_css

A tool for compiling SASS source files into different _variants_ that have
different values for their variables. This can be used, for example, to
provide a high-contrast mode for your styles.

## Configuration

```yaml
---
paths:
    # path to where static assets referenced in stylesheets through url() should
    # be resolved from, like images or fonts
    public_dir: public

    # the base directory for all your source SASS stylesheets:
    # 
    # - included in sass's "includePaths" so you can include relative to it
    # - must contain a "variants/${variant}" folder for each defined variant
    #   wherein that variant can define a "_variant_variables.scss" stylseheet
    #   to be used when compiling that specific variant
    # - used as the root when it's necessary to produce relative sass paths
    # - used as a target directory in the watch mode; changes to files inside
    #   will trigger the watcher
    #
    sass_dir: app/stylesheets

    # minimatch/glob pattern to select all the stylesheets to process; note
    # that this should not cover the partials, only the bundles that you want
    # to generate variants for
    # 
    # this is relative to PWD
    all_sass_bundles: './app/stylesheets/**/[^_]*.s[ac]ss'

    # path to where the manifest should be generated
    bundles_with_deps: public/dist/brandable_css/bundles_with_deps.json

    # path to where the internal cache file should be generated; this is used
    # internally by brandable_css to tell which stylesheets needs to be
    # reprocessed on successive runs
    file_checksums: tmp/brandable_css_file_checksums.json

    # directory that will contain the processed variant bundle files: this is
    # what can be served to the user
    output_dir: public/dist/brandable_css

    # path to the file that contains the mapping of supported browsers to be
    # passed to [autoprefixer], which may look like this:
    # 
    #     minimums:
    #       chrome: 83
    #       safari: 12
    #       firefox: 78
    #
    # [autoprefixer]: https://autoprefixer.github.io/
    browsers_yml: config/browsers.yml
```

## Indices

> Since: v2.0.0

The main output of `brandable_css` can be very big and is unfit for inclusion
at runtime (e.g. in your bundle or over an HTTP request.) brandable_css supports
emitting a _compact_ structure that is optimized for runtime inclusion referred
to as an _index_. An index can be generated for only a subset of the bundles
and requires a little processing to decode it into something usable.

**Configuring an index**

```yaml
indices:
    name_of_index:
        keysz: Integer
        path: Filepath
        bundles: MinimatchGlob
```

Structure of an index:

    index = Array.<
        variants: Array.<String>,
        checksums: Map.<
            contrivedId: String,
            variantChecksums: Array.<Union.<md5: String, Integer>>
        >
    >

**Decoding the structure**

`variants` is the set of available variants for the bundles contained in the
index.

`variantChecksums` is an ordered set: each element corresponds to the variant
defined in the `variants` set at that index.

When a variant checksum is defined as a number, it must be a treated as an index
into the current bundle's variant checksum set; you can resolve the actual
checksum by looking at the element in the set at that index. This is done as
an optimization to avoid duplicate strings, which are 10 characters long.

**Example index**

```json
[
  [
    "new_styles_normal_contrast",
    "responsive_layout_normal_contrast",
    "responsive_layout_high_contrast",
    "new_styles_high_contrast",
    "new_styles_normal_contrast_rtl",
    "new_styles_high_contrast_rtl",
    "responsive_layout_normal_contrast_rtl",
    "responsive_layout_high_contrast_rtl"
  ],
  {
    "10": ["cbc4135c8d", 0, 0, 0, "8323e1aa23", 4, 4, 4],
    "15": ["16a8653e3f", 0, 0, 0, "e158453b86", 4, 4, 4],
  }
]
```

This index contains variant checksums for 2 bundles for 8 variants. The first
bundle is identified as `10`, this is its "contrived ID" which is equal to the
first `@keysz` characters of the MD5 digest of the bundle name. The variant
CSS files for this particular bundle are found at the following paths:

- @output_dir/new_styles_normal_contrast/${BUNDLE}-cbc4135c8d.css
- @output_dir/responsive_layout_normal_contrast/${BUNDLE}-cbc4135c8d.css
- @output_dir/responsive_layout_high_contrast/${BUNDLE}-cbc4135c8d.css
- @output_dir/new_styles_high_contrast/${BUNDLE}-cbc4135c8d.css
- @output_dir/new_styles_normal_contrast_rtl/${BUNDLE}-8323e1aa23.css
- @output_dir/new_styles_high_contrast_rtl/${BUNDLE}-8323e1aa23.css
- @output_dir/responsive_layout_normal_contrast_rtl/${BUNDLE}-8323e1aa23.css
- @output_dir/responsive_layout_high_contrast_rtl/${BUNDLE}-8323e1aa23.css

Resolving an ID to the actual bundle name is left to the caller.

## Changelog

### 3.0.0

- Switched engine from node-sass to dart-sass as the former has reached end of
  life status. Note that dart-sass is currently a lot slower than its previous
  counterpart.

### 2.0.0

- SASS_STYLE environment variable is no longer appended to filenames, so where
  by configuring `bundles_with_deps: ./a.json` you used to get either
  `a.jsonnested` or `a.jsoncompressed` based on what SASS_STYLE indicated, you
  now unconditionally get `a.json`
- RAILS_ENV environment variable no longer controls SASS_STYLE in its absence;
  SASS_STYLE now defaults to "nested", so in a production environment where
  you want compressed output, be sure to specify `SASS_STYLE=compressed` when
  running brandable_css
- Added support for indices

### 1.0.0

- Re-released under `@instructure/brandable-css`
- No longer transpiling (node) code to `lib/`, minimum required Node is now 12
- Updated chokidar dependency

## License

MIT
