const config = require("./webpack.base");
const webpack = require('webpack')

config.plugins = config.plugins.concat([
  new webpack.optimize.OccurrenceOrderPlugin()
])
config.optimization = Object.assign({}, {
  splitChunks: {
    chunks: "all",
    minChunks: 2,
    cacheGroups: {
      common: {
        minSize: 0,
        name: "common",
        minChunks: 2,
        priority: -5
      },
      verdors44: {
        test: /node_modules/,
        name: "disanfang",
        minSize: 10,
        minChunks: 1,
        priority: 0
      }
    }
  }
});
module.exports = config
