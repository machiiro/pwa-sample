const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/onesignal',
    '@nuxtjs/pwa'
  ],

  generate: {
    dir: 'docs'
  },

  /*
  ** Build configuration
  */
  build: {
    publicPath: 'https://machiiro.github.io/pwa-sample',

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  workbox: {
    dev: true
  },

  oneSignal: {
    init: {
      appId: '467a2655-6d7d-4618-8691-00a3477c8b45',
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: true
      }
    },
    cdn: true,
    OneSignalSDK: 'https://cdn.onesignal.com/sdks/OneSignalSDK.js'
  }
}
