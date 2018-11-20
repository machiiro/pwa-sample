importScripts('/pwa-sample/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pwa-sample/_nuxt/53cb6a4d3c02e83c1d07.js",
    "revision": "e8c493ce8a9f46842b836a5d1afd328f"
  },
  {
    "url": "/pwa-sample/_nuxt/55271f2e382d3bb6a4b3.js",
    "revision": "53291d9a19bd2550419d8ff16fe0ffa9"
  },
  {
    "url": "/pwa-sample/_nuxt/71ab6ddf3fa3cde1da16.js",
    "revision": "0a2dc3168b01f2b8d2a1679d4db8d7e4"
  },
  {
    "url": "/pwa-sample/_nuxt/822b6dc8567f2a7640c0.js",
    "revision": "14889fa20c9ac7f9340ab64c84e7bb16"
  },
  {
    "url": "/pwa-sample/_nuxt/e4c521d827ada10c5714.js",
    "revision": "f4a3cf69de9690b73f7abed23a85afb5"
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
