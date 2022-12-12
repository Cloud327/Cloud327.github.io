'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "afb5a15ce8829385b0e286b262baa774",
"assets/assets/blockPlace.mp3": "8459b2064a06fc4156a6c985599bf64f",
"assets/assets/hardDrop.wav": "5851fb3a6e94a950876d1bc1804f2973",
"assets/assets/LineClear.wav": "4df4635ee796e69379f6ea7cb19a20a1",
"assets/assets/Tetris.mp3": "4ae866dc425a9904e84252322ec8413b",
"assets/assets/trombBlock.wav": "5d46c5b83761cf970da7c0b6529f41b5",
"assets/assets/trombtrisbackground.png": "3fdaeb4254ddf0401be04472044d52db",
"assets/assets/tromb_logo_magenta_dye.png": "5786ae74d9a957ab10aca0b8122a30ca",
"assets/FontManifest.json": "2f38919b26e89a2b937ca3a13fcfd5a8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/game/assets/blockTypeDefs/defaultBlocks.txt": "2425c11e4fed2da521f7b0aa72420384",
"assets/lib/game/assets/blockTypeDefs/oopsAllTrombBlocks.txt": "ad4fffe4d4efcca9ffd35d6218acfb08",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520Bold%2520Italic.otf": "58d6d0f239ad68ffea99f6806192525f",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520Bold.otf": "6d10397a151d83e4407fecd27f76cafb",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520ExtraBold%2520Italic.otf": "25fc45beea052352d26652d2c49f0d4d",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520ExtraBold.otf": "ba652585147838634b0c7349268b90fd",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520ExtraLight%2520Italic.otf": "aa7d838eb472dd7eecab90f22c346815",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520ExtraLight.otf": "2ca289481f8d1dd05620d9dc60956320",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520Italic.otf": "d4b7a2994bc60c1390316f24589989e2",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520Light%2520Italic.otf": "1eff3105c56cfe2713f877a216902c7a",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520Light.otf": "78e812f3fda430191facc31c64a4b927",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520Medium%2520Italic.otf": "75ea2e6cc0904032a0ab0b9ac6f44725",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520Medium.otf": "4718f2452d00ff1c747e78bb8c4a6641",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520SemiBold%2520Italic.otf": "907a010cde50f325010cd6beb1d167cb",
"assets/lib/game/assets/Galano%2520Grotesque/Rene%2520Bieder%2520-%2520Galano%2520Grotesque%2520SemiBold.otf": "cbd91bb2a05d0a9b2f88e3e8c5d43cce",
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
"assets/NOTICES": "ea91a436f80f797bdb8a7c3a84e0c17f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "0ff5c2d72578756a2d288596d5a621dc",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fccf38b81df3eb94e791075529b9c3e1",
"/": "fccf38b81df3eb94e791075529b9c3e1",
"main.dart.js": "2ac41f9c9ab46e1d9468ab0141052b1f",
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
