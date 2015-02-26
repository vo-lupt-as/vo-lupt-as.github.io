//sw.js
this.addEventListener('install', function(e) {
e.waitUntil(
    console.log(e)
    )
});

this.addEventListener('activate', function(e) {
    console.log(e)
});

this.addEventListener('error', function(e) {
    console.error(e)
});

this.addEventListener('fetch', function(e) {
    console.error(e);
    e.respondWith(new Response('Hello from your friendly neighbourhood service worker!'))
});
