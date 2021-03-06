const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if(process.env.NODE_ENV === 'test-dev' || process.env.NODE_ENV === 'development'){
  require('dotenv').config({ path: '.env.test'});
}

module.exports = (env, argv) => {

  const isProduction = env === 'production';
  const cssExtract = new ExtractTextPlugin('styles.css');

return {
    entry: ["babel-polyfill", './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: (/\.s?css$/),
        use: cssExtract.extract({
          use: [
            // 'style-loader',
            {loader: 'css-loader', options:{sourceMap: true}},
            {loader: 'sass-loader', options:{sourceMap: true}}
          ]
        })
      },{
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options:{
          name: 'fonts/[name].[ext]'
        }
      }]
    },
    plugins: [
      cssExtract,
      new webpack.DefinePlugin({
        'FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  };
}