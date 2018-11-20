importScripts('/pwa-sample/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pwa-sample/_nuxt/53cb6a4d3c02e83c1d07.js",
    "revision": "e8c493ce8a9f46842b836a5d1afd328f"
  },
  {
    "url": "/pwa-sample/_nuxt/573558a3cd892cd3fa89.js",
    "revision": "55acc62032cdf43982a57699e1dc7516"
  },
  {
    "url": "/pwa-sample/_nuxt/822b6dc8567f2a7640c0.js",
    "revision": "14889fa20c9ac7f9340ab64c84e7bb16"
  },
  {
    "url": "/pwa-sample/_nuxt/bf5088407cc07779caf7.js",
    "revision": "f51f39a18c4d1ae42e3fb843d7b1cdd4"
  },
  {
    "url": "/pwa-sample/_nuxt/f5a47b05928526f905a7.js",
    "revision": "6160337c24ae80826cdfa93090ca3e03"
  }
], {
  "cacheId": "pwa-sample",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/pwa-sample/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/pwa-sample/.*'), workbox.strategies.networkFirst({}), 'GET')
