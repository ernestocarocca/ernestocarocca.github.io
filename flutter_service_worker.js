'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "280093ea20c419e38544af53f94d09bf",
"index.html": "5bb9781d558d4d721bcb2e8a46a465ea",
"/": "5bb9781d558d4d721bcb2e8a46a465ea",
"main.dart.js": "93e47b763326c46f7d8822fd63935b2b",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
".git/config": "e58f2079ff8ee673459dd396c6e07bd5",
".git/objects/59/671c37c9c3921ccad97c510998559e36f846cf": "9b16931d08300309c2280df44c4d90d3",
".git/objects/3e/2db5b613e3283f4aa484b67b5fe62b2ce9b6f6": "e791fe6aab6bcf5e416b29e72ff0db0f",
".git/objects/9b/ab57c02a19340523568a7a268f7ed3e6e92c78": "3bfda523fe3b1b0ce17fbd1c2230edfd",
".git/objects/56/e9e63a0f2aea14cf6e2a7db32bbacdaf633964": "91d62bc09c9b288f2df750cdf342a486",
".git/objects/51/c343a0ab9e54f504805f3d21383d9a24f68cd8": "5b93d049b6066a233526db6d020c88f4",
".git/objects/02/eac6989ad65d3fcea222171a83a1348ee0dbd9": "539e9a510b3dc247d200e75dc75c1a04",
".git/objects/ac/a1158064e99304ace4868f82ad562408beca2b": "b1b2ee89c6c43122b3da7b9dfcf29e4e",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/a5/3682b7db9012034e1d69de48d4b54731272095": "94cf187371f2eead488e12faa55d07d5",
".git/objects/bd/2109e958f3bb30ec6ae8172468cfea7c939a3b": "7f81b7c55ab59c93be98dada38a34b34",
".git/objects/d1/5d07b6c9020f784c49b8e984792ff455589fba": "e7aad6dc53dda145c38b07678eac41d1",
".git/objects/e2/e08d1b8730b3f81ec4bbf004fde20f8d1b06fd": "b0aff8ef15013017df0ea940e85c10f2",
".git/objects/f3/fdbff8db956d6570d0eb78bf385494ccb7f95e": "628b97f33bc1e7a86cbdb338ba6c5b1f",
".git/objects/c7/dc9f6de46e70d4f840df55c955152a569d24f0": "ec85ce614ecd483a25fde004ada531ab",
".git/objects/c7/572e48f383d9d0837844acdd7e08180200ac1e": "3dce562ccc15ce5d75f2631daf24cf13",
".git/objects/c0/9a4f3edd86bf49324a861132224e171f103615": "3256fca6a7be00ffb41d372a81d3536a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/60745fe520c2f7f3741db66dcc4588747e430c": "cca1d986792660717f1b3760e96a6cf2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/74/2cfd44c0ec260faac91fdda8308ac5acbf97a8": "3162ebee3c15071f03b496542c188238",
".git/objects/17/a6557e1cabee44e91fe381ea44512fe73cfcb6": "437b498743189f8062561b301b72beb7",
".git/objects/75/b833370b60945436cd12691596ce832ec59633": "5860baaab22ceb7784cef3e499c84759",
".git/objects/75/e34cb52deb6e2338921e8b02db5f56f33a1820": "41703030401f884ccdc9a498d7bb994b",
".git/objects/2f/b3f86a75e7dcbbe6e0fd499b11a8149e9df9ce": "e1f3dbedcfb8663a066a34a76420f544",
".git/objects/9a/8c7efbb0cea27048abe75146b7c630ffba1704": "06f97c186dd7bc9ac28d86747b82cf71",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/97/67c1a17bf2961aa845848c02fbaf523a7f8d30": "e4d05cadfcb9cc79fedf05f24d53d8dc",
".git/objects/64/c33f4584c6a5005fc2efc13185064fecaf8597": "b0df7df61b7c9f1f16ff13ecefbfc93e",
".git/objects/90/4a376e49418a45d90a77b9832375ae1773f27d": "398e1ac8df740ae82cb98747e5eeb2f2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/1b5f8ea827dcb3d3beb698aa1e0be75069fed0": "ba3a7e25b8bc117bab2d8a41870b7628",
".git/objects/b0/93f6cd8c6d78e425aa0243559e5f76cb029e1e": "8a3af62984214b9289ac0d50ba08b5ff",
".git/objects/cd/7d6af13c5c049f95b4c1bc9f5f18572be4e947": "d692d3d3712a90a24a6f572724ac98b6",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/70/2b55430b296bfe63e16857e2bfe88b9056fe18": "0e9fc4de99eff0e3334050544cd15a39",
".git/objects/1e/dc27e733e0f4b1526a565edca01e44f369aada": "8ab0d378b29ff0a8921eedfc9f890aa8",
".git/objects/4a/f62fbead3654c1e705a3be4ca6074a6275e84f": "abf002e1e986832d9c0a817fb8cd52b2",
".git/objects/23/f5bd5110aafbd79daf847598b8982c3a7e53c6": "d780b1919f7423b22e63cc7df427b149",
".git/objects/8d/061ab5e89225f3c68b1c9d2e37c1d7410198aa": "e99e60d07641a91c8c8f4a69ca8f6d06",
".git/objects/71/8f25e4c155e943432e57c326658c59fda89891": "0ddf693a16cdd125d082f536b5c0cb2b",
".git/objects/71/1bb893eff3e28d577420b005698101e523a9b1": "a39067510811eb58d6aa93b6b1faf2c8",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/82/62535cdcbd1e80de20d45c8da39b1e2ce4b626": "e86c3f72b0b7f8d03acd5ec43a1ac9b5",
".git/objects/2e/414f51f1640de802dfb4140afbf935ad43c45f": "d8f9a974305a1f5666dcfc26c016d59c",
".git/objects/7f/e7f1d692370ff16594d486f783febfe8132a03": "a61340b821679628ef07728c4afddd67",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a579e9d52f32ce88abd97fca0498ec5",
".git/logs/refs/heads/main": "5110b7a1f931d5d0e8b09c598ec2981b",
".git/logs/refs/remotes/origin/main": "1b745365b22b4afa3703d5945c20eca0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "0387bd78fec4684fbe54258e29ed1608",
".git/refs/remotes/origin/main": "0387bd78fec4684fbe54258e29ed1608",
".git/index": "cad1d9432ca5dd94d302ed4821ed949d",
".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
".vscode/launch.json": "9b2660a4b7336066449cc8040e1d143a",
"assets/AssetManifest.json": "b6e1776043865f7098317f4c33b1f025",
"assets/NOTICES": "38f4488b771e2d82c4d18336832f072a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "a06b48fc9192570e1dbd20479aeed8e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5f8b50d7dc9b3482de955ea2e6090f1f",
"assets/fonts/MaterialIcons-Regular.otf": "546b1660f6945e339ed1465d024947a6",
"assets/assets/guilherme-stecanella-EefsBN5B5GE-unsplash.jpg": "11bbc5239c55bb50bb3a0e291e9eeafe",
"assets/assets/avi-richards-Z3ownETsdNQ-unsplash.jpg": "a870114c6b195ea5802bc3f28862e536",
"assets/assets/chino-rocha-vhCg8uOAcr8-unsplash.jpg": "8dd8e26b8f3ecfacc60d74d751288f59",
"assets/assets/creative.jpg": "542b880dde43cf89fc1a1eabd8e62b95",
"assets/assets/4.jpg": "8dd8e26b8f3ecfacc60d74d751288f59",
"assets/assets/0.png": "edee294448a9575d7ad10649d9dc2c2e",
"assets/assets/bg.jpg": "a612329ba70ff17745349b5202db34b7",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "8bd6b02debe4cb77998782baa1eed362",
"canvaskit/canvaskit.js.symbols": "83ad552fe7b7cc8ee8311f60941e02f5",
"canvaskit/skwasm.wasm": "e02b06c626f97135f314f451d2fd7dad",
"canvaskit/chromium/canvaskit.js.symbols": "4ba8d2a0ca33a008c2716df1c4d4bebc",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.wasm": "faccee5e3a41fd214ddd106fe9024c42",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.wasm": "72ceae406442681eb7bedfa856264163",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
