'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f5855d64d7a40e5781991cd45a2c4a25",
"assets/assets/blockPlace.mp3": "8459b2064a06fc4156a6c985599bf64f",
"assets/assets/hardDrop.wav": "5851fb3a6e94a950876d1bc1804f2973",
"assets/assets/LineClear.wav": "4df4635ee796e69379f6ea7cb19a20a1",
"assets/assets/Tetris.mp3": "4ae866dc425a9904e84252322ec8413b",
"assets/assets/trombBlock.wav": "5d46c5b83761cf970da7c0b6529f41b5",
"assets/assets/trombtrisbackground.png": "3fdaeb4254ddf0401be04472044d52db",
"assets/assets/tromb_logo_magenta_dye.png": "5786ae74d9a957ab10aca0b8122a30ca",
"assets/FontManifest.json": "2f38919b26e89a2b937ca3a13fcfd5a8",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/lib/game/assets/blockTypeDefs/DefaultBlocks.txt": "2425c11e4fed2da521f7b0aa72420384",
"assets/lib/game/assets/blockTypeDefs/oopsAllTrombBlocks.txt": "ad4fffe4d4efcca9ffd35d6218acfb08",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque.otf": "0db105f867c7eb2e491db586cc26b417",
"assets/lib/game/assets/logo_dark.png": "ec0546c9fdcff3ed09f255502751d5d4",
"assets/lib/game/assets/logo_dark_1.png": "dfa1d608bccd587096b7a3ca84cbf6d3",
"assets/lib/game/assets/logo_dark_2.png": "1e831b311fdb1f1661eec840bff393d5",
"assets/lib/game/assets/logo_dark_3.png": "2d947d7ccdf87dcb88ea48676bc61b7f",
"assets/lib/game/assets/logo_dark_4.png": "153c4d958732eecc53f152e8807cde0b",
"assets/lib/game/assets/logo_light_1.png": "91c1e58e9a1a75e876f745f57e270264",
"assets/lib/game/assets/logo_light_2.png": "e8621154fe254defec05b83991539a0f",
"assets/lib/game/assets/logo_light_3.png": "7b058912b1abe0ccbb86dc0f61a8f261",
"assets/lib/game/assets/logo_light_4.png": "b5ebd21a7201c79e06c229cf73068f23",
"assets/lib/game/assets/trombSpriteBlack.png": "87e2857b1fe2927633788ed6b8f9dfa7",
"assets/lib/game/assets/trombSpriteWhite.png": "c384123bd969924da92040d8298a1133",
"assets/NOTICES": "08321419d3f81914c057bc10952e2c81",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f4da42b4aa052c3dff7f35e1f614b043",
"canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "db931120412af26cc1511fa058afaf0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6613dcdeced40e1000d4f40a28252f0b",
"/": "6613dcdeced40e1000d4f40a28252f0b",
"main.dart.js": "9e0e53b7c297e930d56b380460ec9416",
"manifest.json": "0d03a559b264393f0fcbe319a09d124e",
"version.json": "5e8088e9f864a3bb92ffda25372adca7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
