const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(env, options) {

  const config = {
    context: path.join(__dirname, "src"),
    entry: "./",
    mode: "development",

    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    module: {
      rules: [
        {
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
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: "App",
        hash: true,
        template: path.resolve(__dirname, "./index.html")
      })
    ],

    devServer: {
      contentBase: "./dist"
    }
  };

  return config;
};
