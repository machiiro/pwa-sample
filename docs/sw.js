importScripts('/pwa-sample/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pwa-sample/_nuxt/53cb6a4d3c02e83c1d07.js",
    "revision": "e8c493ce8a9f46842b836a5d1afd328f"
  },
  {
    "url": "/pwa-sample/_nuxt/710947b3b4ee232c1cd1.js",
    "revision": "0532bda27379be0826190fd6065cb761"
  },
  {
    "url": "/pwa-sample/_nuxt/71ab6ddf3fa3cde1da16.js",
    "revision": "0a2dc3168b01f2b8d2a1679d4db8d7e4"
  },
  {
    "url": "/pwa-sample/_nuxt/765823f0717a910f6f5f.js",
    "revision": "596557b0942035bbf438a320c8b17a3a"
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
