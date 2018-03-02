const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, argv) => {

  const isProduction = env === 'production';
  const cssExtract = new ExtractTextPlugin('styles.css');

return {
    entry: ["babel-polyfill", './src/app.js'],
    output: {
      path: path.join(__dirname, 'public'),
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
    plugins: [cssExtract],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
}