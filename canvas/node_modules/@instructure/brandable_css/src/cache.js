const debug = require('debug')('brandable_css:cache')
const _ = require('lodash')
const CONFIG = require('./config')
const {readJsonSync, outputJsonAsync} = require('fs-extra-promise')

const caches = ['file_checksums', 'bundles_with_deps']

let cache = {
  saveAll: async function () {
    return Promise.all(caches.map((cacheName) => cache[cacheName].save()))
  }
}

function initCache ({ filename }) {
  let self = {
    isSaved: false,

    data: (() => {
      let json
      try { json = readJsonSync(filename) } catch (e) {}
      return json || {}
    })(),

    update (key, value) {
      if (_.isFunction(key)) throw new Error('cant use function as key' + key + value)
      if (self.data[key] === value) return value
      debug('updating cache key', key)
      self.isSaved = false
      self.data[key] = value
      return value
    },

    save (opts = {}) {
      debug('saving', self.isSaved, filename)
      if (self.isSaved) return
      self.isSaved = true
      return outputJsonAsync(filename, self.data, {spaces: opts.compact ? 0 : 2})
    },

    clearMatching (query) {
      self.data = _.omit(self.data, (v, key) => key.match(query))
    }
  }
  return self
}

caches.forEach(name => {
  cache[name] = initCache({ filename: CONFIG.paths[name] })
})

module.exports = cache
module.exports.createCache = initCache
