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
    filename: "[name].[chunkhash].css"
  }),
  new OptimizeCssAssetsPlugin({})
]);
config.optimization = Object.assign(
  {},
  {
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
  process.stdout.write(stats.toString());
  console.log(chalk.cyan("production build success!"));
});

module.exports = config;
