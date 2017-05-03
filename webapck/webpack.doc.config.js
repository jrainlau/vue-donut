const { join } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const basicConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const resolve = dir => join(__dirname, '..', dir)

module.exports = merge(basicConfig, {
  entry: {
    app: './src/main.js',
    vendor: [
      'vue'
    ]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  devtool: 'source-map',
  output: {
    path: resolve('docs'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      chunksSortMode: 'dependency'
    }),
    new CleanWebpackPlugin(['docs'], {
      root: resolve('./')
    })
  ]
})
