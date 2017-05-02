const { join } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const basicConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const resolve = dir => join(__dirname, '..', dir)

module.exports = merge(basicConfig, {
  entry: {
    app: './src/components/index.js',
  },
  devtool: 'source-map',
  output: {
    path: resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: resolve('./')
    })
  ]
})
