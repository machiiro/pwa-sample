importScripts('/_nuxt/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/382049a5cd5ed275d903.js",
    "revision": "3d6e1679298a73dff17291631930814d"
  },
  {
    "url": "/_nuxt/8bff83497e52ed420183.js",
    "revision": "1c81d8cfd930d0bdb7ce9d67191f26ba"
  },
  {
    "url": "/_nuxt/a1a991cccbd2a982b373.js",
    "revision": "c28db12f7536867fc983580ed100ff34"
  },
  {
    "url": "/_nuxt/d260cb7e1d34c01e4d1c.js",
    "revision": "a600a80a655838fd381ffed110a4eb03"
  },
  {
    "url": "/_nuxt/dc64526bab8c6c65969c.js",
    "revision": "40bf1f44f70e334e1bcb14c62f93c2fd"
  }
], {
  "cacheId": "pwa-sample",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
