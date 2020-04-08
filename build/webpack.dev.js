const config = require("./webpack.base");
const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const chalk = require('chalk')
const path = require("path");
const assert = require('assert')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

config.plugins = config.plugins.concat([
  new MiniCssExtractPlugin({
    filename: "css/[name].css"
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DefinePlugin({
    TYPE: JSON.stringify('cdn')
  })
]);
config.devtool = 'source-map';

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

const compiler = webpack(config);
let server = new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, "..", "dist"),
  host: "127.0.0.1",
  inline: true,
  hot: true,
  historyApiFallback: true
});
server.listen(8081, 'localhost', () => {
  console.log(chalk.green("编译中..."));
});

module.exports = config