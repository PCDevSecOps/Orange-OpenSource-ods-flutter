'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/1.5x/il_navigation_bar.png": "8927163cc6c2dbb7dc950fa5882fb67a",
"assets/assets/1.5x/il_typography.png": "6d0d635b6220898d3efbc1676fccd211",
"assets/assets/1.5x/il_chips.png": "d644d3d1c57f04c4c7dd4a3eab9d0e11",
"assets/assets/1.5x/il_switches.png": "65e603bf82cf1bc0eccef328c63cc8a7",
"assets/assets/1.5x/placeholder.png": "212828718e4a68e835271ec32f9bc2f0",
"assets/assets/1.5x/il_about.png": "4c174f1c682469ee54535abead52efca",
"assets/assets/ic_chevron_down.svg": "0e2ba41ac75ebd092d1fe34a572294ee",
"assets/assets/il_navigation_bar.png": "309047997ddb8ba02235e6a61d076a0a",
"assets/assets/il_progress.png": "93585fffa1ae775e8faf61779bf59106",
"assets/assets/ic_guidelines_dna.svg": "ae5dae7d3ef67995ba1100f5ac021b8e",
"assets/assets/ic_profile.svg": "1730196ba6e76e6038eefedcb929ba74",
"assets/assets/il_spacing.png": "b4fa3d4172b24b541d44b987e0d729e1",
"assets/assets/recipes.json": "8d9d20ed3e8f1c76725e487b71884236",
"assets/assets/il_cards.svg": "b5d29a54a8e825d1270bfe041d275961",
"assets/assets/il_app_bars_top_generic.svg": "7c1ab7208402b510b8c347908e7a8962",
"assets/assets/2.0x/il_navigation_bar.png": "dea6fad1fb475f86725042bc2eeb9b44",
"assets/assets/2.0x/il_typography.png": "5f15be0f38278edce7a4b86d646e8d78",
"assets/assets/2.0x/il_chips.png": "cbeeaf0369cb414388342eb43328dc11",
"assets/assets/2.0x/il_switches.png": "2d01949c289b10e4907de31734f35f02",
"assets/assets/2.0x/placeholder.png": "06ae60e8597533d13f41643b2d8750d8",
"assets/assets/2.0x/il_about.png": "faa319c3b2dc560761aae5dd7bec6cb2",
"assets/assets/il_color.png": "f7cd1dc0baeb9e5b46fc2ea08c5f145d",
"assets/assets/il_sliders.png": "27bbeb67fbb52dd25f311a0a45b17519",
"assets/assets/il_floating_action_button.svg": "a2ba0e798cd019e27ff7c9a706486984",
"assets/assets/3.0x/il_navigation_bar.png": "f9612fe258c267e6ea8ae07693a223da",
"assets/assets/3.0x/il_typography.png": "ecc4c2ded49dce72f86110017a2ac42a",
"assets/assets/3.0x/il_chips.png": "830ea1aff3707c37d8c90719da8c3a4b",
"assets/assets/3.0x/il_switches.png": "a82d1015b6d7afdf99c6874f6edd67cd",
"assets/assets/3.0x/placeholder.png": "08b769a0b4b7663ae7784fa964cf8abe",
"assets/assets/3.0x/il_about.png": "7be7e478e11dcb994cd03d52e65a6fc4",
"assets/assets/il_checkbox.svg": "40ff55794ad5255b8c95bb0e4c6b01a1",
"assets/assets/il_typography.png": "ea5d460295677d2374ce19d5f5096dbe",
"assets/assets/il_chips.png": "cbeeaf0369cb414388342eb43328dc11",
"assets/assets/il_sheets_bottom.png": "88e670045d4aae3497a73dd296f511fe",
"assets/assets/4.0x/il_navigation_bar.png": "513557514dfba9fba2204a8040dd5adb",
"assets/assets/4.0x/il_typography.png": "0ea75da2e9fea6664ae27c95001c5927",
"assets/assets/4.0x/il_chips.png": "9a66954e4195ea7789567e94b04e2782",
"assets/assets/4.0x/il_switches.png": "e4a2d46e313bb71f913233fd0f243ca1",
"assets/assets/4.0x/placeholder.png": "31b7de4af9d668cdde267f1870fdaacb",
"assets/assets/4.0x/il_about.png": "cd45187a0f8a5797187d308e8a1d8ac0",
"assets/assets/ic_components_atom.svg": "163165c9a17798d3ae4aecdd9ecdb07e",
"assets/assets/recipes/ic_restaurant.svg": "c1798f4069c15fdf38430b75612172f5",
"assets/assets/recipes/ic_cooking_pot.svg": "fdd264b08b7f25c4a6928665248eeab7",
"assets/assets/recipes/ic_ice_cream.svg": "dab434415ca2900ec4ebc69851c33869",
"assets/assets/recipes/ic_heart_favorite.svg": "cf17f432bd4dbcb6dad1b05503087e28",
"assets/assets/recipes/ic_coffee.svg": "af19234e2998b56f7c84b8a806f39aad",
"assets/assets/il_switches.png": "1fa07ee316905ffbe127f164a5421f15",
"assets/assets/placeholder.png": "8a33e037f705bf245c42e1104561aecb",
"assets/assets/il_about.png": "ce66b44bb4b6b93aea78cbc08e711470",
"assets/assets/il_menu.png": "ddc8532dfecf3676343d749fc0f7a681",
"assets/assets/il_buttons.svg": "f7fb2566c8d1bfc5845ce5777fc1299f",
"assets/assets/il_radio_buttons.svg": "5fe3717ddd4fa3735dfff66cb9258af3",
"assets/assets/il_dialogs.png": "321fc971ddf5f0c30fbda673785b7dce",
"assets/assets/ic_modules_molecule.svg": "95d7f39290c304d3fea194bcc4140515",
"assets/assets/il_text-fields.png": "2033ddf03a91f743bdecda28ebfc92f4",
"assets/assets/il_lists.svg": "0ddbb8c0ea5d4c221506d0caa0403e09",
"assets/assets/ic_about_info.svg": "87c18a04e9f807dfd25601d88949b283",
"assets/assets/il_snackbars.svg": "1d6b5803539742a4f11626336ccec404",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "ada5245dd2d5845744a998e15461dfb9",
"assets/NOTICES": "2a6fda3a95da3a775b97b85149c405d9",
"assets/AssetManifest.bin": "9b184e082b1e3c02eb4bfec66282b3ac",
"assets/CHANGELOG.md": "e12f322a7408bb0efa70a040bb427ec1",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin.json": "29189443f79d83a170484ce06b3eea6f",
"assets/fonts/MaterialIcons-Regular.otf": "ea3c76e7d2cc13bb130121a67e1ba8b4",
"assets/packages/ods_flutter/assets/placeholder.png": "8a33e037f705bf245c42e1104561aecb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"mstile-150x150.png": "8008c3bafec59df8c561287616a1843a",
"android-chrome-512x512.png": "1269dce3139bb79859418c85b7b82b57",
"index.html": "74d180af6f7d4392baac18d3776bc189",
"/": "74d180af6f7d4392baac18d3776bc189",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"android-chrome-192x192.png": "bd21fb58b025bbbb7c014ab3e89bd14d",
"favicon.ico": "896b7d2800f5d9c205218decd1e70db6",
"site.webmanifest": "b9aa277fcfc34c31db6c7a7ea3469b8c",
"apple-touch-icon.png": "3fe5a5775e75f1de1e7828e6a74fab80",
"favicon-16x16.png": "432c5effd08aa105c60e00af714eb9f2",
"favicon-32x32.png": "a465c5868297ee2fafb649913644a1f3",
"main.dart.js": "cfe0ef00365aa0abebc1380fe3899944",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"version.json": "ee181979e31d3b4d39b0e4455c43227c",
"safari-pinned-tab.svg": "b9b254aae3c748726218ae1ab5610890",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c"};
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
