importScripts('/pwa-sample/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pwa-sample/_nuxt/53cb6a4d3c02e83c1d07.js",
    "revision": "e8c493ce8a9f46842b836a5d1afd328f"
  },
  {
    "url": "/pwa-sample/_nuxt/822b6dc8567f2a7640c0.js",
    "revision": "14889fa20c9ac7f9340ab64c84e7bb16"
  },
  {
    "url": "/pwa-sample/_nuxt/aa4e0cd41f60e824bd15.js",
    "revision": "05e27c8b172957f64b54635342a57de9"
  },
  {
    "url": "/pwa-sample/_nuxt/b82a5962ed5b9a06c0d7.js",
    "revision": "3b032207c81b5e69206d6d81e1528e3d"
  },
  {
    "url": "/pwa-sample/_nuxt/caccaa4596977ef16b36.js",
    "revision": "e0ad7ae288a5258065519b00cf32306b"
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
