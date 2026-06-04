const cacheName = 'ms-solar-v1';
const assets = [
  '/',
  '/index.html',
  // Agar aapki CSS aur JS files ke alag naam hain to wo yahan add karein, jaise:
  // '/style.css',
  // '/script.js'
];

// Service Worker Install Karna
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Requests ko Fetch karna (Offline Support ke liye)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});
