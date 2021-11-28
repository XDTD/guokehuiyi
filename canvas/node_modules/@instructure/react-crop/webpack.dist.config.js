module.exports = Object.assign({}, require("./webpack.config"), {
  entry: {
    "react-crop": "./src/index.js"
  },

  output: {
    libraryTarget: 'umd',
  },

  externals: [
    'react', "react-dom", "prop-types", "data-uri-to-blob"
  ]
});
