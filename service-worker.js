self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open("all-content").then(function(cache) {
        return cache.addAll(
          [
            '/css/styles.css',
            '/data/restaurants.json',
            '/img/1.jpg',
            '/img/2.jpg',
            '/img/3.jpg',
            '/img/4.jpg',
            '/img/5.jpg',
            '/img/6.jpg',
            '/img/7.jpg',
            '/img/8.jpg',
            '/img/9.jpg',
            '/img/10.jpg',
            '/js/dbhelper.js',
            '/js/main.js',
            '/js/restaurant_info.js',
            '/',
            '/restaurant.html'
          ]
        );
      })
    );
  });
  
self.addEventListener('fetch', function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request, {ignoreSearch: true})
      .then(function(response){
        // resolves with the match regardless of query string
        return response;
      });
    })
  );
});

