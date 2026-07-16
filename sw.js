self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // Simple fetch handler to satisfy PWA requirements
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
