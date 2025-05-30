const CACHE_NAME = 'portugues-saeb-v2';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];

const OFFLINE_PAGE = '/offline.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(ASSETS_TO_CACHE)
          .then(() => {
            console.log('Todos os recursos foram armazenados em cache');
            return cache.add(OFFLINE_PAGE);
          })
          .catch(err => {
            console.error('Falha ao armazenar em cache alguns recursos:', err);
          });
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Ignora solicitações que não são GET
  if (event.request.method !== 'GET') return;
  
  // Estratégia: Cache First, falling back to Network
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Retorna resposta em cache se encontrada
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Se não estiver em cache, busca na rede
        return fetch(event.request)
          .then((response) => {
            // Verifica se a resposta é válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clona a resposta para armazenar em cache
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          })
          .catch(() => {
            // Se a rede falhar, retorna a página offline para navegação
            if (event.request.headers.get('accept').includes('text/html')) {
              return caches.match(OFFLINE_PAGE);
            }
          });
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => {
      // Ativa o controle de clientes imediatamente
      return self.clients.claim();
    })
  );
});

// Ouvinte para mensagens (útil para atualizações)
self.addEventListener('message', (event) => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

// Ouvinte para push notifications (para futuras implementações)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png'
  };
  
  event.waitUntil(
    self.registration.showNotification('Jogos de Português', options)
  );
});