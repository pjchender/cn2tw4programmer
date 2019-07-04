const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    test: './src/utilities/test.js',
    buildNewTongWenTang: './src/utilities/buildNewTongWenTang.js',
    background: './src/background.js',
    contentScript: './src/contentScript.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{
      from: './src/images',
      to: './images'
    }, {
      from: './src/manifest.json',
      to: './'
    }]),
    new webpack.optimize.SplitChunksPlugin()
  ]
}
