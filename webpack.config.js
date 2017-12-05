var webpack = require('webpack');

var config = {
  devtool: "inline-source-map",
  entry: './src/index.js',
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["react", "es2015", "stage-1"]
        }
      }, {
        test: /(\.css$)/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'file-loader',
            options: { 
                //limit: 8000, // Convert images < 8kb to base64 strings
                name: 'images/[name].[ext]'
            } 
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options:{
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  
  stats: {
    errorDetails: true
  },

  devServer: {
    historyApiFallback: true
  }
};

module.exports = config;