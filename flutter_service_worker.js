'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a634afa9a2a8271e5f612c4fc079444b",
".git/config": "190a36b2b12d6cc0e190d5f4ffbfef05",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bf412863d88d66f269e576a785ac910f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "047823c02aac008d804f6f8d22c6e3d1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8026d2073da48e3dbd5a8a1d880f674b",
".git/logs/refs/heads/main": "2a6eda137db56189ed336fda0e7e3dc9",
".git/logs/refs/remotes/origin/main": "ede2f5fa95c2b02ed382c0d827e9307e",
".git/logs/refs/stash": "f1287292475b030fdb4bcc3f2992acda",
".git/objects/00/c7ab1fe2f7895e6401f3e69a56d7ccea25bf7c": "dcd19c937d1a248172f46d88127dd4b1",
".git/objects/02/bb21d50a1bf7e7008bf73d21ab9e74d946d3ca": "ffb10ca71053c041efdb9aea79cdb0a6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0c/f60e614f8eddeae3de5f3783428ab31240c149": "67d148a5b6b0ef2754b992bd94504ad3",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/22/21393500207481be8d7ecc53781af30ebe983c": "229d3df0c3027d0dc4368ad0e1cb3bd2",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/049789914fd65fbd5abb4797deef096ee1586d": "b836b2d39aaf315d4db7ae2ba04fdde7",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/2573de3ffc0958cf087c0473456665dabd7b82": "7f72eb749871898900da61b36fc1be19",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/bbc35d6f65413fb5f23b66823cb14ba3c6ca69": "a878d2d3c865791f85cd9e8e5da6b725",
".git/objects/4d/9a8a600c4b3de6e0027830615ccf7d1f83ccf5": "09212f32876e843cc9bb73d3fec700bc",
".git/objects/54/c775afeea9bd27ba9e1295c67efd3109be9503": "4cd3b4ee4f6a2580032c387d3025e084",
".git/objects/59/2ce74b1bdc05fea8e19c967a821754bc255970": "582bfe5dd4dcd5bda26f3dfc9832bdaa",
".git/objects/65/20200d521810357aa67ed8ca0ab1fabc9d037c": "e74251973475e8d973260d0c1a842d1b",
".git/objects/68/41eee3171a803c50052e164f3bc99c4ba2c536": "2550d813e21d882639254d76b9bc296f",
".git/objects/6f/d845730e01637ead797a5ad11e0e2a9dc02eac": "3f7ef92b24af5561e51f8bb89715fd0c",
".git/objects/71/b56ff629743cb9d6620e98934fb67f38f8515c": "143102085c014fa08837807ad5d42a13",
".git/objects/75/7ee6aced02735a999c1cf8d6415bd1b55b4303": "8f57e148468e68dd8df9be94e1b48b8d",
".git/objects/78/a8571ab6e50d1ba0f4d65c0d09d5059f3f485e": "fe0a343486562a441ca1d4f548e4dfb4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/14aa9a6266d280ff2b8f8396ec2fc02145c214": "f835f871460de7aeadbbf6cee2650965",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/80/d6d9d21a55ac28a4f50d1aef2263a89efa235a": "ed2736cea4da7dbb83a71b362265b9c1",
".git/objects/82/cc37336ef0bbf9c65c9f9af14143c2bed341c1": "9a83a742c954b137bd55c345ae7e6202",
".git/objects/88/7f646fb3cd19c5c8f5b80f24776fc28bad9df7": "4b78167323f60d396e16d127cd2f96f1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9e/c622d53efbe2f8324eb5f2b35bac4dc036ed70": "6b6d74ca0e3025f09b9fe84782515b96",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ce3d8f1d86054484e615a5293aa3b6bb2c7420": "9cb85874d89ce76e9d604f44e0c5e32e",
".git/objects/b8/c3b16f1f4ff7ebbc19700230fb5f9ecf5e7b24": "d5ffe76f6f88df1fa93c5df45362b309",
".git/objects/b9/1f7e0c0e607dd2c09806da747de05d0e008989": "9972798a4c0d2d3928d3d3b155640a10",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/64eaec8cf2e667755d6eb2fe954ffb76e26ece": "c5221bb9f39f8062fbedf46704a803b6",
".git/objects/bb/f7f98811d3f760cd7fa3f5116d58f90ad08acc": "9084e226916de879d74d918cc8ee7458",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/bf/737f2675019b52fd8b6e5eedf56d9891ec243a": "ac5b97e502bce411cbffd7bacc607550",
".git/objects/c3/3ac09eeae82789ca905b4444209ec710d5c3ab": "1d4e5cf5cf3b9b89fed71195cf3bd375",
".git/objects/c8/d17a92262f1b706d499c9561cd5f68f15b783a": "6db4978688e66e6b05d5c52ff9f5d110",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/4b81e9bc7fc33e4c993271e6c71c354945f646": "db04e64aee46f37740e5b12219586c44",
".git/objects/d2/cec61ec3373e1994f66c0ecc1bb594d0da96f7": "d7c09cf645478b744e6d4595ad2dc305",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/593c65a4ee93c287c6d8c72fce58aa2e980462": "373b06b0b3f18283b263896b5d814417",
".git/objects/df/c5ff3535fd00f422b000e4fb92f2f524990031": "7f0c061a8cb8ff846738d6d40081f04b",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/b1dc6f2eb9a52b9608db3484f341b0fe3cc986": "6c755a61a149a290f764fdad2acc6601",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/7a64143d7a4718e26bc99a8c156dbd8bd2e5a0": "fb31f7b12b9c8d85d1a5f746a86c3a52",
".git/objects/f4/fdf0e7c37d5fdd4cc0dc65c5bff57ffbc652f0": "95a28205ef2e50b4b695ac48100ebec3",
".git/objects/fa/3aa6618fac6de3f5044de4f4552d2e6182820c": "a873d0df9b2cf9f66de76d8d53704efc",
".git/objects/ff/a9e8814bf8e8a4ccdd746aebc18075af7aaa62": "58c9143e40965082a77dad6bf0177b95",
".git/ORIG_HEAD": "0754f7a28d1191e829b660cebd237803",
".git/refs/heads/main": "b4480a551d15550143e71dbc816d30a3",
".git/refs/remotes/origin/main": "b4480a551d15550143e71dbc816d30a3",
".git/refs/stash": "50c841eef9637fb080a511acaa298277",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8f2b7ab052dfcf4ace9901a3769cab3f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
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
"index.html": "c7a5fff6220c4ff5975947e0129718f9",
"/": "c7a5fff6220c4ff5975947e0129718f9",
"main.dart.js": "501822aa978b3763c34961cfa6409fb2",
"manifest.json": "3914a648d83d6e6041aaf6fa8299cd27",
"version.json": "6418fd0e2b014d6718f51fad88cefda7"
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
