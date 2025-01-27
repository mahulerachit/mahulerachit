'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "867b79e6d0dc1c101052e34dd2929f23",
"assets/AssetManifest.json": "0e20727a9c2552f126bf045c32eb2c43",
"assets/assets/animations/switch_dark_mode.flr": "7530828e9a6ad38f86475fc17fc578ee",
"assets/assets/fonts/Montserrat-Bold.ttf": "d14ad1035ae6da4e5a71eca362a8d696",
"assets/assets/fonts/Montserrat-Medium.ttf": "aca6287f22eef510c1e622c97bb1e1e1",
"assets/assets/fonts/Montserrat-Regular.ttf": "34de1239b12123b85ff1a68b58835a1f",
"assets/assets/fonts/Montserrat-Thin.ttf": "426a4b74bf1d6920508384899bfb695b",
"assets/assets/images/avatar3.jpg": "e2e99be2651bf98ccb8d1e4ecc8ea94a",
"assets/assets/images/avatar_dark.jpg": "f30c7f291dc8720d7ad60c10c3e9e574",
"assets/assets/images/citations/citation_00.png": "495bf7c5d2426f4a68a8927931f61319",
"assets/assets/images/citations/citation_01.png": "41db1c862bcdad3e980b6d89885ba852",
"assets/assets/images/citations/citation_02.png": "e89420bb653ed52fceb9263505069623",
"assets/assets/images/citations/citation_03.png": "fa68d1dfc591090155a48aca92bb2916",
"assets/assets/images/citations/citation_04.png": "789d275cd86cfbb626b49c7707ffb1a8",
"assets/assets/images/citations/citation_05.png": "770c149648a5e3f5848f1b85cf15eaae",
"assets/assets/images/citations/citation_06.png": "60d75ab030ea339b07de2c2427d75395",
"assets/assets/images/citations/citation_07.png": "0046d53fa9d71b1649c5095807ce59c3",
"assets/assets/images/citations/citation_08.png": "ea387d6512b29334ec33748bb284eda6",
"assets/assets/images/citations/citation_09.png": "6a7739f663fa2a0ca77eb6c63520b030",
"assets/assets/images/citations/citation_10.png": "9c939d02138e5ce5a0deb2e680d40719",
"assets/assets/images/citations/citation_11.png": "ea0f5b1908d3dce6b67ebc1475bf58e6",
"assets/assets/images/citations/citation_12.png": "33d26c1ecd486779078550e4edc552f8",
"assets/assets/images/citations/citation_13.png": "48f3e2fad00b9884c9799e27c0c87309",
"assets/assets/images/citations/citation_14.png": "34fa2f79e26677c68d0d929583649a32",
"assets/assets/images/citations/citation_15.png": "f596b19e0c46de96ac43254e955df092",
"assets/assets/images/citations/citation_16.png": "3917697af13ef84ac1af51e7a3a6a635",
"assets/assets/images/citations/citation_17.png": "ab21bcae2769744bc82eb15e6bfedea5",
"assets/assets/images/citations/citation_18.png": "ba149bb561a7d7bdf2d38e35b54b693d",
"assets/assets/images/citations/citation_19.png": "968ba0b74a9b78041edb94cf4b498a77",
"assets/assets/images/citations/citation_20.png": "3b6523dca606ccfc050360fa6844a495",
"assets/assets/images/citations/citation_21.png": "7e0eff20578d0c616d6848ff9052e00f",
"assets/assets/images/citations/citation_22.png": "91c8f634947a1590de8d7fd2eaf17e7c",
"assets/assets/images/citations/citation_23.png": "8dcac562967812a5cf5bcfc0c681f188",
"assets/assets/images/citations/citation_24.png": "cc8f8cbc195d6dcde68688bdd00aa102",
"assets/assets/images/citations/citation_25.png": "f97978029fdd3478a84faaff0b31b2e0",
"assets/assets/images/citations/citation_26.png": "fed76c58d751dfa847367e49593b6c36",
"assets/assets/images/citations/citation_27.png": "b25cf565aadc3b428c951c8fc921456d",
"assets/assets/images/citations/citation_28.png": "39372e6067f1443b7db93f89567ae09a",
"assets/assets/images/citations/citation_29.png": "ab19b39aecc52c7c61f2f9ce8c32d98a",
"assets/assets/images/citations/thumbnails/thumb_citation_00.png": "bd151d32e1a0ec64ef423626e131fd30",
"assets/assets/images/citations/thumbnails/thumb_citation_01.png": "329747eec4057253ee383e9d171eaee4",
"assets/assets/images/citations/thumbnails/thumb_citation_02.png": "a07e994b0ba9941a5c9f0d9a24f7e841",
"assets/assets/images/citations/thumbnails/thumb_citation_03.png": "1e26d562e91a0f589edcf6f9324319ef",
"assets/assets/images/citations/thumbnails/thumb_citation_04.png": "da3dd0bae4a9284ee41e8c44862080a3",
"assets/assets/images/citations/thumbnails/thumb_citation_05.png": "595d5ae638719640290fda3cd8be6bd1",
"assets/assets/images/citations/thumbnails/thumb_citation_06.png": "06dedb26676e90f45fdf34d6bc8d36cb",
"assets/assets/images/citations/thumbnails/thumb_citation_07.png": "d50f43c530620c63354b5039e9c0b178",
"assets/assets/images/citations/thumbnails/thumb_citation_08.png": "cfda5b8cd192ed1e61b99092b04de239",
"assets/assets/images/citations/thumbnails/thumb_citation_09.png": "68aca8b281697ef68606ee3120097930",
"assets/assets/images/citations/thumbnails/thumb_citation_10.png": "a324cecebeb1ed74dc1a35fa59cb96a3",
"assets/assets/images/citations/thumbnails/thumb_citation_11.png": "ea0aa7504ff3ff0d733101c61040fff9",
"assets/assets/images/citations/thumbnails/thumb_citation_12.png": "b2ab460be6ed55e9b834097e85a7dfc6",
"assets/assets/images/citations/thumbnails/thumb_citation_13.png": "b44120b5b1cc6f46b0202c377a4fda04",
"assets/assets/images/citations/thumbnails/thumb_citation_14.png": "6be89528ac3134f24a4e7343e7131692",
"assets/assets/images/citations/thumbnails/thumb_citation_15.png": "a2f6db591bc9d58cc9a5848265176cc1",
"assets/assets/images/citations/thumbnails/thumb_citation_16.png": "a80df5eb2fdbe020b8323f27f33c3283",
"assets/assets/images/citations/thumbnails/thumb_citation_17.png": "86643de3931042b0dd3a5c4dde1a980f",
"assets/assets/images/citations/thumbnails/thumb_citation_18.png": "98233646b53196540932748ff9989675",
"assets/assets/images/citations/thumbnails/thumb_citation_19.png": "4200eb13c0ccd0d9601137d5c3816e70",
"assets/assets/images/citations/thumbnails/thumb_citation_20.png": "141660bad9489f7c1e7625b270a94583",
"assets/assets/images/citations/thumbnails/thumb_citation_21.png": "0baa6561b1f8668423d5339b4b3ea795",
"assets/assets/images/citations/thumbnails/thumb_citation_22.png": "37495fa322ed97be401b8dcc522eda6c",
"assets/assets/images/citations/thumbnails/thumb_citation_23.png": "b4005b79fbca692c70fa6f291bd164a0",
"assets/assets/images/citations/thumbnails/thumb_citation_24.png": "670552c4327f5920643a02f2dd7433e0",
"assets/assets/images/citations/thumbnails/thumb_citation_25.png": "f97978029fdd3478a84faaff0b31b2e0",
"assets/assets/images/citations/thumbnails/thumb_citation_26.png": "fed76c58d751dfa847367e49593b6c36",
"assets/assets/images/citations/thumbnails/thumb_citation_27.png": "b25cf565aadc3b428c951c8fc921456d",
"assets/assets/images/citations/thumbnails/thumb_citation_28.png": "39372e6067f1443b7db93f89567ae09a",
"assets/assets/images/citations/thumbnails/thumb_citation_29.png": "ab19b39aecc52c7c61f2f9ce8c32d98a",
"assets/assets/images/experiments/benchmark.jpg": "f97cc05c0f7676cbed3036da48fc1026",
"assets/assets/images/experiments/covid.png": "a590e71f5b47783627deb7c82cbc1b69",
"assets/assets/images/experiments/ui_color_picker.png": "9c9e56c4adade5a5dd910df1c5e2f457",
"assets/assets/images/experiments/webook.png": "3a18b6193da2c008ad7437f7f0961ace",
"assets/FontManifest.json": "c5085d8cff20e90940169c06778f36ed",
"assets/fonts/MaterialIcons-Regular.otf": "2caaee2aef4363b4bc629f0a400b6309",
"assets/NOTICES": "c9da824b2e0b00ee79008c14ae9529d7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "460d05693505e5db314a0deb9dc56a50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "cc24b5197d1b3f64fc2e47f72a407dcc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "30c1ee1472c166db12e9af1c7a61e493",
"/": "30c1ee1472c166db12e9af1c7a61e493",
"main.dart.js": "9cf63c80b62e89c3044e7c4b81454f42",
"manifest.json": "75d506c1587b51c43c3e98f2ece23f05",
"version.json": "38e3381c0dcb4f37066c08bbe465e8ae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
