const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ENV = process.env.NODE_ENV;
const PATH = path.join(__dirname, "..", "dist/");
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const ANA = process.env.NODE_ANALYZER;
const CWD = process.cwd();

const cretaeRule = () => {
  return {
    test: /\.jsx$/,
    exclude: [path.join(__dirname, "..", "node_modules")],
    use: [{loader: 'eslint-loader'}]
  }
}
module.exports = {
  mode: ENV === "development" ? "development" : "production",
  entry: {
    app: path.resolve(__dirname, "../src/entry.js")
  },
  output: {
    publicPath: ENV === "development" ? "/" : "./",
    path: PATH,
    filename: "static/js/[name].bundles.js",
    chunkFilename: "static/js/[name].js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", "json"],
    alias: {
      "@": path.resolve(CWD, "src"),
      component: path.resolve(CWD, "component"),
      action: path.resolve(CWD, "src/store"),
      middleware: path.resolve(CWD, 'src/middleware')
    }
  },
  module: {
    rules: [
    //   cretaeRule(),
      {
        test: /\.(js|jsx)$/,
        exclude: [path.join(__dirname, "..", "node_modules")],
        include: [
          path.join(__dirname, "..", "src"),
          path.join(__dirname, "..", "component")
        ],
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
          MiniCssExtractPlugin.loader,
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
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              config: {
                path: path.resolve(process.cwd(), "postcss.config.js")
              }
            }
          },
          {
            loader: "less-loader",
            options:{
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jp(e)?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[path][name].[ext]",
            publicPath(url) {
              return `/static/magic/${url}`;
            }
          }
        }
      },
      {
        test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 1000,
          name: "fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html", // 匹配路径会从跟路径开始 process.pwd()
      filename: "index.html",
      title: "webpack 测试",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
    })
  ].concat(ANA ? [new WebpackBundleAnalyzer()] : [])
};
