const CACHE_NAME = 'gottlich-v1';
const urlsToCache = [
  '/',
  '/style.css',
  '/Gottlich Logo.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.destination === 'image' || event.request.url.includes('.css')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  }
});