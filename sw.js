const CACHE="swasthgaon-cache-v1";

self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll([
        "/SwasthGaon/",
        "/SwasthGaon/index.html",
        "/SwasthGaon/manifest.json"
      ])
    )
  );
});

self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
