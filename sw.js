 let staticCacheName = 'restaurant-offline';
 self.addEventListener('install', function(event) {
     event.waitUntil(
         caches.open(staticCacheName).then(function(cache) {
             return cache.addAll([
              './',
              './index.html',
              './restaurant.html',
              './css/styles.css',
              './js/dbhelper.js',
              './js/main.js',
              './js/restaurant_info.js',
              './node_modules/idb/lib/idb.js',
              './sw.js',
              './manifest.json',
              './img/',
              './favicon.ico'
             ]);
         })
     );
 });


self.addEventListener('activate', function (event) {
// Perform install steps
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
             return Promise.all(
                 cacheNames.filter(function(cacheName) {
                     return cacheName.startsWith('restaurant-') && cacheName != staticCacheName;
                 }).map(function(cacheName) {
                     return caches.delete(cacheName);
                 })    
             );
         })
     );
 });
 
 self.addEventListener('fetch', (event) => {
     // console.log(event.request);
     event.respondWith(
         caches.match(event.request).then(response => {
            if (response) {
                console.log('Found ', event.request.url, ' in cache');
                return response;
            }
            console.log('Network request for ', event.request.url);
            return fetch(event.request).then(networkResponse => {
                if (networkResponse.status === 404) {
                    console.log(networkResponse.status);
                    return;
                }
                return caches.open(staticCacheName).then(cache => {
                    cache.put(event.request.url, networkResponse.clone());
                    console.log('We have fetched and cached', event.request.url);
                    return networkResponse;
                })
            })
        }).catch(error => {
            console.log('Error, ', error);
            return;
         })
     );
 });

  self.addEventListener('message', (event) => {
    console.log(event);
    
    // var messages = JSON.parse(event.data);
     if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
     }
   });