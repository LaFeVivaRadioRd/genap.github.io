const CACHE_NAME = 'radio-genap-v1';
const urlsToCache = [
  '/genap.github.io/',
  '/genap.github.io/index.html',
  '/genap.github.io/manifest.json',
  '/genap.github.io/imagen/Logo GenAp.png',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
];

// Instalación: cache de assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(
        urlsToCache.map(url => new Request(url, { mode: 'no-cors' }))
      ))
  );
});

// Activación: limpiar caches viejos
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
});

// Fetch: responder desde cache, fallback a offline.html si existe
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(resp => {
        if (resp) return resp;
        // Intentar red si no está en cache
        return fetch(e.request)
          .catch(() => {
            // Si falla la red, servir página offline (si la has cacheado)
            return caches.match('/offline.html');
          });
      })
  );
});
