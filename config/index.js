'use strict'

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'https://mallcdn.api.epet.com/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1515155681767',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      //api的index中有几个就要配置几个
      '/text': {
        target: 'https://mall.api.epet.com/v3/index/main.html?do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1515155682630',
        changeOrigin: true,
        pathRewrite: {
          '^/text': '/'
        }
      },
      '/class': {
        target: 'https://mallcdn.api.epet.com/v3/goods/category/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1515232673032',
        changeOrigin: true,
        pathRewrite: {
          '^/class': '/'
        }
      },
      '/index': {
        target: 'https://mallcdn.api.epet.com',
        changeOrigin: true,
        pathRewrite: {
          '^/index': '/'
        }
      },
      //短信验证
      '/item': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/item': '/'
        }
      },
      //配置common/utils/env.js???
      '/getBase': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/getBase': '/'
        }
      },
      '/reginste': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/reginste': '/'
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    useEslint: true,
    showEslintErrorsInOverlay: false,
    devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
