const CACHE_NAME = 'gottlich-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/products.html',
  '/style.css',
  '/products.js',
  '/products-detail-clean.js',
  '/product-whatsapp.js',
  '/Gottlich Logo.svg',
  '/Product-photos(webp)/only photos-1.webp',
  '/Product-photos(webp)/only photos-6.webp',
  '/Product-photos(webp)/only photos-10.webp',
  '/Product-photos(webp)/only photos-12.webp',
  '/Product-photos(webp)/only photos-14.webp',
  '/Product-photos(webp)/only photos-16.webp',
  '/Product-photos(webp)/only photos-21.webp',
  '/Product-photos(webp)/only photos-28.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});