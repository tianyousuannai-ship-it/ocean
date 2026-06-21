// 宝宝英语乐园 - Service Worker
// 预缓存所有应用资源，实现完全离线使用
const CACHE_NAME = 'english-fun-v1';

// 需要预缓存的资源文件
const PRECACHE_URLS = [
  '/ocean/',
  '/ocean/index.html',
];

// 安装阶段：预缓存核心资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  // 立即激活，不等待旧版 SW 关闭
  self.skipWaiting();
});

// 激活阶段：清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  // 立即接管所有页面
  self.clients.claim();
});

// 拦截网络请求：优先从缓存读取，没有则发起请求并缓存
self.addEventListener('fetch', (event) => {
  // 跳过非 GET 请求
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((response) => {
        // 只缓存成功的响应
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      }).catch(() => {
        // 完全离线时返回兜底内容
        if (event.request.destination === 'document') {
          return caches.match('/ocean/index.html');
        }
        return new Response('离线中', { status: 503 });
      });
    })
  );
});
