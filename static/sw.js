importScripts('https://machiiro.github.io/pwa-sample/workbox.dev.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "https://machiiro.github.io/pwa-sample382049a5cd5ed275d903.js",
    "revision": "3d6e1679298a73dff17291631930814d"
  },
  {
    "url": "https://machiiro.github.io/pwa-sample5cd6afd26b44120afcfc.js",
    "revision": "ed69c86d370997de96ada2c6b16b186a"
  },
  {
    "url": "https://machiiro.github.io/pwa-sampleca17add249afe25792da.js",
    "revision": "8b170d238619c170f10a50b11fb2e7ee"
  },
  {
    "url": "https://machiiro.github.io/pwa-sampled260cb7e1d34c01e4d1c.js",
    "revision": "a600a80a655838fd381ffed110a4eb03"
  },
  {
    "url": "https://machiiro.github.io/pwa-sampledc64526bab8c6c65969c.js",
    "revision": "40bf1f44f70e334e1bcb14c62f93c2fd"
  }
], {
  "cacheId": "pwa-sample",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('https://machiiro.github.io/pwa-sample/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
