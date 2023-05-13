var cacheName = 'Caridade';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        '/index.html',

        //'./manifest.json',




        //'./assets/css/bootstrap.min.css',

        //'./assets/js/bootstrap.min.js',

        //'./assets/js/jquery.min.js',

        //'./assets/css/fontawesome-all.min.css',

        //'./assets/css/main.css',

        //'/assets/css/images/bg01.webp',

        //'/assets/css/images/bg02.webp',

        //'/assets/sass/libs/_breapoints.scss',

        //'/assets/sass/libs/_functions.scss',

        //'/assets/sass/libs/_htmml-grid.scss',

        //'/assets/sass/libs/_mixins.scss',

        //'/assets/sass/libs/_vars.scss',

        //'/assets/sass/libs/_vendor.scss',

        //'/assets/sass/main.scss',

        //'./assets/js/popper.min.js',

        //'./assets/images/16.webp',

        //'./assets/images/',

        //'./assets/images/20.webp',

        //'./assets/images/29.webp',

        //'./assets/images/32.webp',

        //'./assets/images/40.webp',

        //'./assets/images/48.webp',

        //'./assets/images/50.webp',

        //'./assets/images/55.webp',

        //'./assets/images/57.webp',

        //'./assets/images/58.webp',

        //'./assets/images/60.webp',

        //'./assets/images/64.webp',

        //'./assets/images/66.webp',

        //'./assets/images/72.webp',

        //'./assets/images/76.webp',

        //'./assets/images/80.webp',

        //'./assets/images/87.webp',

        //'./assets/images/88.webp',

        //'./assets/images/92.webp',

        //'./assets/images/100.webp',

        //'./assets/images/102.webp',

        //'./assets/images/114.webp',

        './assets/img/128.webp',

        './assets/img/144.webp',

        './assets/img/152.webp',

        './assets/img/167.webp',

        //'./assets/images/172.webp',

        './assets/img/180.webp',

        './assets/img/196.webp',

        //'./assets/images/216.webp',

        './assets/img/256.webp',

        './assets/img/512.webp',

        './assets/img/512.png',

        //'./assets/images/1024.webp',

        //'./assets/images/120.webp',

        //'./assets/js/jquery.min.js',

        //'./assets/js/browser.min.js',

        //'./assets/js/breakpoints.min.js',

        //'./ssets/js/util.js',

        //'./assets/js/main.js',


      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});