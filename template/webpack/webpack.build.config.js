const { join } = require('path')
const merge = require('webpack-merge')
const basicConfig = require('./webpack.base.config')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const resolve = dir => join(__dirname, '..', dir)

module.exports = merge(basicConfig, {
  entry: {
    app: './src/view/components/index.js'
  },
  devtool: 'source-map',
  output: {
    path: resolve('dist'),
    filename: 'index.js',
    library: '{{ name }}',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: resolve('./')
    }),
    new CopyWebpackPlugin([
      { from: 'src/view/assets', to: 'assets' }
    ])
  ]
})
