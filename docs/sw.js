importScripts('/pwa-sample/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pwa-sample/_nuxt/29410be9115ef06f42dc.js",
    "revision": "20d533252277eac6e1d754d368224217"
  },
  {
    "url": "/pwa-sample/_nuxt/53cb6a4d3c02e83c1d07.js",
    "revision": "e8c493ce8a9f46842b836a5d1afd328f"
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
    "url": "/pwa-sample/_nuxt/dad384268874ca504a44.js",
    "revision": "5bdfb16324d09641f696a35f1d0a1159"
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
