const CACHE_NAME = 'portugues-saeb-v3';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-256x256.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];

const OFFLINE_PAGE = '/offline.html';
const FONT_CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Cache de recursos críticos
        return cache.addAll(ASSETS_TO_CACHE)
          .then(() => {
            // Cache da página offline
            return cache.add(OFFLINE_PAGE);
          })
          .then(() => {
            // Cache da fonte CSS externa
            return fetch(FONT_CSS_URL)
              .then(response => {
                if (response.ok) {
                  return cache.put(FONT_CSS_URL, response.clone());
                }
              })
              .catch(() => {});
          })
          .then(() => {
            console.log('Todos os recursos críticos foram armazenados em cache');
            return self.skipWaiting();
          });
      })
      .catch(err => {
        console.error('Falha ao armazenar recursos em cache:', err);
      })
  );
});

self.addEventListener('fetch', (event) => {
  // Ignora solicitações que não são GET
  if (event.request.method !== 'GET') return;
  
  // Ignora requisições de chrome-extension
  if (event.request.url.includes('chrome-extension://')) return;
  
  // Estratégia: Cache First, falling back to Network
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Retorna resposta em cache se encontrada
        if (cachedResponse) {
          return cachedResponse;
        }
        
        // Para navegação, tenta buscar da rede ou retorna offline
        if (event.request.mode === 'navigate') {
          return fetch(event.request)
            .then((response) => {
              // Verifica se a resposta é válida
              if (!response || response.status !== 200 || response.type !== 'basic') {
                throw new Error('Resposta inválida');
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
              // Se a rede falhar, retorna a página offline
              return caches.match(OFFLINE_PAGE);
            });
        }
        
        // Para outros recursos, busca na rede e armazena em cache
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
            // Se for uma imagem, retorna um placeholder
            if (event.request.headers.get('accept').includes('image')) {
              return new Response(
                '<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder"></svg>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            }
            
            // Se for CSS ou JS, retorna vazio
            if (event.request.headers.get('accept').includes('text/css')) {
              return new Response('', { headers: { 'Content-Type': 'text/css' } });
            }
            
            if (event.request.headers.get('accept').includes('application/javascript')) {
              return new Response('', { headers: { 'Content-Type': 'application/javascript' } });
            }
            
            return new Response('Offline - Sem conexão', { status: 503 });
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
  
  if (event.data.action === 'clearCache') {
    caches.delete(CACHE_NAME)
      .then(() => {
        event.ports[0].postMessage({ success: true });
      });
  }
});

// Ouvinte para push notifications
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'Jogos de Português';
  const options = {
    body: data.body || 'Novo conteúdo disponível!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    data: {
      url: data.url || '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then((clientList) => {
        if (clients.openWindow) {
          return clients.openWindow(event.notification.data.url);
        }
      })
  );
});

// Estratégia de atualização em segundo plano
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-content') {
    event.waitUntil(updateContentCache());
  }
});

async function updateContentCache() {
  const cache = await caches.open(CACHE_NAME);
  const updatedAssets = await Promise.all(
    ASSETS_TO_CACHE.map(async (url) => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          await cache.put(url, response.clone());
          return { url, status: 'updated' };
        }
        return { url, status: 'failed' };
      } catch (err) {
        return { url, status: 'failed' };
      }
    })
  );
  
  return updatedAssets;
}