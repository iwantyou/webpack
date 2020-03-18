const webpack = require('./webpack.config')
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ANA = process.env.analyzer;
ANA && webpack.plugins.push(new WebpackBundleAnalyzer())

export const plugins = webpack.plugins