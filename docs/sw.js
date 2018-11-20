importScripts('/pwa-sample/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pwa-sample/_nuxt/1f98b51e069bd923d5c2.js",
    "revision": "4aa5ce4c2f6282045da933b21bfbfae4"
  },
  {
    "url": "/pwa-sample/_nuxt/4714395eeb1e7246eecf.js",
    "revision": "207146b9c92d0b6b96cdbcaf5355ed95"
  },
  {
    "url": "/pwa-sample/_nuxt/53cb6a4d3c02e83c1d07.js",
    "revision": "e8c493ce8a9f46842b836a5d1afd328f"
  },
  {
    "url": "/pwa-sample/_nuxt/701a37c3c1c1c48299a1.js",
    "revision": "96292f4a99ea407558f4467eeb7fd667"
  },
  {
    "url": "/pwa-sample/_nuxt/822b6dc8567f2a7640c0.js",
    "revision": "14889fa20c9ac7f9340ab64c84e7bb16"
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
