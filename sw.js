
var cacheName = 'v1.0';

var cacheAssets = [
    'index.html',
    'src/index.js',
    'src/master.css',
    'images/logo192.png',
    'images/logo512.png'
]

// installation
self.addEventListener('install', e => {
      console.log('Service Worker: Installed');
      e.waitUntil(
            caches
              .open(cacheName)
              .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
              })
              .then(() => self.skipWaiting())
          );

});    

// activation
self.addEventListener('activate', e => {
    console.log('Service Worker: Installed');
}); 

// fetch

self.addEventListener('fetch', e => {
      console.log('Service Worker: Fetching');
        e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
      
});