const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (env, options) {

  const config = {
    context: path.join(__dirname, "src/components"),
    entry: "./",
    mode: "development",
    devtool: "source-map",

    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    module: {
      rules: [{
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.tsx?$/,
          loader: "awesome-typescript-loader",
          exclude: /node_modules/,
          options: {
            useCache: true
          }
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ["css-loader", "less-loader"] })
        },
        {
          test:/\.(png|jpeg)$/,
          loader: "file-loader",
          options: {
            name: '[path][name].[ext]?[hash]'
          }
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "App",
        hash: true,
        template: path.resolve(__dirname, "./index.html")
      }),
      new ExtractTextPlugin("style.css"),
    ],

    devServer: {
      contentBase: "./dist"
    }
  };

  return config;
};
