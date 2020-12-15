const config = require("./webpack.base");
const webpack = require("webpack");
const uglifyJs = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const chalk = require("chalk");
const ora = require("ora");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

config.plugins = config.plugins.concat([
  new webpack.optimize.OccurrenceOrderPlugin(),
  new MiniCssExtractPlugin({
    filename: "static/css/[name].[chunkhash].css",
    chunkFilename: "static/css/[name].[contenthash:8].chunk.css",
  }),
  new OptimizeCssAssetsPlugin({}),
]);
config.optimization = Object.assign(
  {},
  {
    minimize: true,
    minimizer: [
      new uglifyJs({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          mangle: false,
        },
      }),
    ],
    runtimeChunk: {
      name: (enterpoint) => {
        return `runtime-${enterpoint.name}`;
      },
    },
    splitChunks: {
      chunks: "async",
      name: false,
      minChunks: 1,
      cacheGroups: {
        // common: {
        //   minSize: 0,
        //   name: "common",
        //   minChunks: 1,
        //   priority: -5
        // },
        verdors44: {
          test: /node_modules/,
          name: "vendros",
          minSize: 10,
          minChunks: 1,
          priority: 0
        }
      }
    },
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
  process.stdin.write(stats.toString());
  console.log(chalk.cyan("production build success!"));
});

module.exports = config;
