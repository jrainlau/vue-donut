const { join } = require('path')
const hljs = require('highlight.js')
const markdown = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + markdown.utils.escapeHtml(str) + '</code></pre>';
  }
})

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
        use: [
          'babel-loader'{{#lint}},
          'eslint-loader'{{/lint}}
        ]
      },
      {{#lint}}
      {
        enforce: 'pre',
        test: /\.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {{/lint}}
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2)$/,
      //   loader: 'file-loader',
      //   query: {
      //     name: 'font/[hash:8].[ext]'
      //   }
      // },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        // query: {
        //   limit: 10000,
        //   name: 'img/[hash:8].[ext]'
        // }
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader',
        options: markdown
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.css', '.less'],
    modules: [resolve('src'), 'node_modules'],
    alias: {
      '~src': resolve('src'),
      '~components': resolve('src/view/components'),
      '~pages': resolve('src/view/pages'),
      '~assets': resolve('src/view/assets'),
      '~store': resolve('src/store'),
      '~static': resolve('src/document/static'),
      '~docComps': resolve('src/document/doc_comps')
    }
  }
}
