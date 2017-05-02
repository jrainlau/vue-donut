const { join } = require('path')
const webpack = require('webpack')

const resolve = dir => join(__dirname, '..', dir)

module.exports = {
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.less'],
    modules: [resolve('src'), 'node_modules'],
    alias: {
      '~src': resolve('src'),
      '~components': resolve('src/components'),
      '~pages': resolve('src/pages'),
      '~assets': resolve('src/assets'),
      '~store': resolve('src/store'),
      '~static': resolve('src/static')
    }
  }
}
