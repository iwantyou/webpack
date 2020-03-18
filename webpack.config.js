const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ENV = process.env.NODE_ENV;
const webpack = require("webpack");
const PATH = path.join(__dirname, "dist/js");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ANA = process.env.NODE_ANALYZER;
module.exports = {
  mode: ENV === "development" ? "development" : "production",
  entry: {
    app: path.join(__dirname, "src/entry.js")
    // c: path.join(__dirname, "src/page/c.js")
  },
  output: {
    publicPath: ENV === "development" ? "" : "http://baidu.com/cdn",
    path: PATH,
    filename: "[name].bundles.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    host: "127.0.0.1",
    port: 8080,
    inline: true,
    hot: true,
    before(app) {
      app.get("/acc", (req, res) => {
        res.setHeader("content-Type", "text/html");
        res.end();
      });
    }
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.join(__dirname, "node_modules")],
        include: [path.join(__dirname, "src")],
        use: [
          {
            loader: "babel-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader:
              ENV === "development"
                ? "style-loader"
                : MiniCssExtractPlugin.loader,
            options:
              ENV === "development"
                ? {}
                : {
                    publicPath:
                      "../" /**
                                                这个默认值也是output的publicpath  但是他作用于文件内部的图片的路径 
                                                此选项会覆盖file-loader的publicPath的值
                                                 */
                  }
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "global",
                localIdentName:
                  ENV === "development"
                    ? "[path][name]__[local]--[hash:base64:5]"
                    : "[hash:base64]"
              }
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader:
              ENV === "development"
                ? "style-loader"
                : MiniCssExtractPlugin.loader,
            options:
              ENV === "development"
                ? {}
                : {
                    publicPath:
                      "../" /**
                                                这个默认值也是output的publicpath  但是他作用于文件内部的图片的路径 
                                                此选项会覆盖file-loader的publicPath的值
                                                 */
                  }
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        test: /\.(png|jp(e)?g|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "assets/" /**这个值的默认值为output的publicPath的值  */
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      title: "webpack 测试"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin()
  ].concat(ANA ? [new WebpackBundleAnalyzer()] : []),
  optimization: {
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
};
