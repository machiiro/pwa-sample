importScripts('/pwa-sample/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/pwa-sample/_nuxt/0553b399b81a46b13ca7.js",
    "revision": "6c0a1c5756148f998fc45d19b9664526"
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
    "url": "/pwa-sample/_nuxt/990d47e30a4927915a2d.js",
    "revision": "7440dd32a3352cc816a755f6c225f02d"
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
