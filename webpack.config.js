const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => {
  if (env) {
    var isProduction = env.production
  } else {
    isProduction = false
  }
  const config = {
    context: path.join(__dirname, "src"),
    entry: './',
    mode: isProduction ? 'production' : 'development',
    devtool: 'source-map',

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },

    module: {
      rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
        options: {
          useCache: true,
        },
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract([ 'css-loader'])
      },
      {
        test: /\.(png|ico|jpe?g)$/,
        loader: 'file-loader',
      }],
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'Movie finder',
        hash: true,
        template: path.resolve(__dirname, './index.html'),
        favicon: 'doge-favicon.ico',
      }),
      new ExtractTextPlugin('style.css'),
    ],

    devServer: {
      contentBase: './dist',
    },
  };

  return config;
}
