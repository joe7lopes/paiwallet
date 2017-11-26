var webpack = require('webpack');

var config = {
  devtool: "inline-source-map",
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module : {
    loaders : [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react']
        }
      },
      { test: /(\.css$)/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
};

module.exports = config;