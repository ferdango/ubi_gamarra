/* UbiGamarra · service worker: app instalable y usable sin conexión */
const VERSION = 'v8';
const SHELL_CACHE = `ubi-shell-${VERSION}`;
const CDN_CACHE = `ubi-cdn-${VERSION}`;
const TILE_CACHE = 'ubi-tiles';
const TILE_LIMIT = 600;

const SHELL = [
  './', './index.html', './css/app.css?v=7', './js/app.js?v=7', './js/catalog.js?v=8', './js/data.js?v=7', './js/mapstyle.js?v=5', './js/garments.js?v=5', './js/payments.js?v=5',
  './manifest.webmanifest', './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/icon-32.png',
];
const CDN = [
  'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js',
  'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const shell = await caches.open(SHELL_CACHE);
    await shell.addAll(SHELL);
    const cdn = await caches.open(CDN_CACHE);
    await Promise.all(CDN.map((url) => cdn.add(url).catch(() => null)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keep = [SHELL_CACHE, CDN_CACHE, TILE_CACHE];
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => !keep.includes(k)).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

async function trimTiles() {
  const cache = await caches.open(TILE_CACHE);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - TILE_LIMIT; i++) await cache.delete(keys[i]);
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request).then((res) => {
    if (res && (res.ok || res.type === 'opaque')) cache.put(request, res.clone());
    return res;
  }).catch(() => cached);
  return cached || network;
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const res = await fetch(request);
  if (res && res.ok) {
    cache.put(request, res.clone());
    if (cacheName === TILE_CACHE && Math.random() < 0.05) trimTiles();
  }
  return res;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Las rutas a pie siempre se piden en vivo
  if (url.hostname === 'routing.openstreetmap.de') return;

  // Archivos de la app: red primero (siempre la última versión) y caché si no hay conexión
  if (url.origin === self.location.origin) {
    const key = req.mode === 'navigate' ? './index.html' : req;
    event.respondWith(fetch(req).then((res) => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(SHELL_CACHE).then((c) => c.put(key, copy));
      }
      return res;
    }).catch(() => caches.match(key, { ignoreSearch: true })));
    return;
  }

  if (url.hostname === 'tiles.openfreemap.org') {
    // Las teselas y fuentes no cambian; el TileJSON sí (nueva versión del planeta), así que se revalida
    const isTile = /\.(pbf|mvt)$/.test(url.pathname) || url.pathname.includes('/fonts/');
    event.respondWith(isTile ? cacheFirst(req, TILE_CACHE) : staleWhileRevalidate(req, CDN_CACHE));
    return;
  }

  if (url.hostname === 'unpkg.com' || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(staleWhileRevalidate(req, CDN_CACHE));
  }
});
