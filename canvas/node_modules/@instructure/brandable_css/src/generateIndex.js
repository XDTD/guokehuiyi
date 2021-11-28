const minimatch = require('minimatch')
const contriveId = require('./contriveId')
const indexOrValue = (index, value) => index === -1 ? value : index

module.exports = ({ name, pattern, combinedChecksums, keysz, manifestKeySeperator }) => {
  const variants = []
  const reserved = {}

  const checksums = Object.keys(combinedChecksums).filter(key => minimatch(key, pattern)).reduce((acc, bundleAndVariant) => {
    const data = combinedChecksums[bundleAndVariant]

    // keys look like this:
    //
    //     jst/courses/Syllabus.scss$$$$$$$$$$$responsive_layout_high_contrast
    //     ^^^^^^^^^^^^^^^^^^^^                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    //     bundle                              variant
    //
    const [bundle, variant] = bundleAndVariant.split(manifestKeySeperator);

    // since there are very few jst/ bundles, we can save some bytes by using
    // some deterministic id instead of their full bundle names, in this case
    // it's the first few characters of the md5
    //
    // webpack has to stay in sync with this! see frontend_build/i18nLinerHandlebars.js#buildCssReference
    const id = contriveId(bundle.replace(/\.s[ca]ss$/, ''), keysz)

    if (reserved.hasOwnProperty(id) && reserved[id] !== bundle) {
      throw new Error(
        `index(${name}): bundle "${bundle}" collides with "${reserved[id]}" at ` +
        `id "${id}". Consider increasing the id_size of the index or renaming ` +
        `one of the source files.`
      )
    }

    reserved[id] = bundle

    // when brandable_css reports "includesNoVariables" for a bundle, there
    // will be only one file regardless of the variant, so again we save some
    // space by using a 1 element array
    if (data.includesNoVariables === true) {
      acc[id] = [data.combinedChecksum]
    }
    else {
      // keep track of the variants as we encounter them, for templates that
      // do use variables (and thus will have one file per variant), the
      // checksum for a specific variant file will be found in its set at
      // the index of that variant in the "variants" set
      //
      //     variants = ["normal", "high_contrast", "responsive_high_contrast"]
      //     checksums["fd0"][1] = "aaaa"
      //
      // "aaaa" is the checksum of the file for the variant "high_contrast"
      //
      if (!variants.includes(variant)) {
        variants.push(variant)
      }

      acc[id] = acc[id] || []
      acc[id][variants.indexOf(variant)] = (
        // save more space by replacing duplicate checksums with references
        // to the first (by its index)
        //
        //    checksums["fd0"] = ['asdf', 'asdf', 'asdf', 'baab']
        //    # into =>
        //    checksums["fd0"] = ['asdf', 0, 0, 'baab']
        //
        indexOrValue(acc[id].indexOf(data.combinedChecksum), data.combinedChecksum)
      )
    }

    return acc
  }, {})

  return [variants, checksums]
}
