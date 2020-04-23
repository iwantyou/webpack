const config = require("./webpack.base");
const webpack = require("webpack");
const uglifyJs = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const chalk = require("chalk");
const ora = require("ora");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

config.plugins = config.plugins.concat([
  new webpack.optimize.OccurrenceOrderPlugin(),
  new uglifyJs({
    cache: true,
    parallel: true,
    uglifyOptions: {
      compress: true,
      mangle: false
    }
  }),
  new MiniCssExtractPlugin({
    filename: "static/css/[name].[chunkhash].css"
  }),
  new OptimizeCssAssetsPlugin({})
]);
// config.devtool =  "source-map"
config.optimization = Object.assign(
  {},
  {
    runtimeChunk: {
      name: 'runtime'
    },
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
        react: {
          test: (module) => {
            console.log('222', module.resource)
            let reg = /corejs/g
            return reg.test(module.resource)
          },
          name: "react",
          minChunks: 2,
          priority: 1
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
  }
);
let spinner = ora("building for production...");
spinner.start();
webpack(config, (err, stats) => {
  spinner.stop();
  if (err) throw err;
  if (stats.hasErrors()) {
    console.log(chalk.red("production build error..."));
    return process.exit(1);
  }
  process.stdout.write(stats.toString({
    // colors: true,
    // modules: false,
    // children: false,
    // chunks: false,
    // chunkModules: false
  }) + '\n')
  console.log(chalk.cyan("production build success!"));
});

module.exports = config;
