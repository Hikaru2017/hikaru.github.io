/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9efedb93b6cbc3d0ffdffa3f034ea4bc"],["/archives/2014/03/index.html","b495ecf96e99d60dc4882f0ba6f48270"],["/archives/2014/index.html","cce84eaa887671d2056ef47262fc3c37"],["/archives/2017/07/index.html","d22d9bdb594a6f63c6e8e1801878dd61"],["/archives/2017/08/index.html","7d6eea77afe218619a5fd4240f804337"],["/archives/2017/10/index.html","9a210764e6c4a1455bce17d3815579c0"],["/archives/2017/index.html","f00354dd7c2eda7cab74a71a10a3ea5d"],["/archives/2018/01/index.html","0786c0940fd9f6438763c9197b2c765b"],["/archives/2018/02/index.html","e0224027bf04d0d8cd5cd60e1f060b15"],["/archives/2018/03/index.html","fea9c73bbce474880ea73b67320925c6"],["/archives/2018/04/index.html","2f7bbe0a5b048140482f944dacc9153c"],["/archives/2018/05/index.html","c97585496e292a6de1b997ac399253a6"],["/archives/2018/06/index.html","5274661f4fca1110c5184eb9674865a5"],["/archives/2018/08/index.html","37e138bdfbcebfa6aaf54631079c16e6"],["/archives/2018/09/index.html","d07ed9fce8ccf58d76a8c361202e1d84"],["/archives/2018/index.html","72a23583b8acaf55bf52bd232dc996c5"],["/archives/2018/page/2/index.html","0a60adf80cdf8af8a8ad1be8cdfe2951"],["/archives/2018/page/3/index.html","17c4ee71b6e9f0ef5c9b0e7b5e1f4a88"],["/archives/2019/03/index.html","03e90861da1ccf6c63788dc6dc10a5f4"],["/archives/2019/04/index.html","7081a635a5b72b260d5bfe028e1d3da5"],["/archives/2019/05/index.html","4da0b0dba157dc9839a2075a7ab3379b"],["/archives/2019/06/index.html","b0e0bf484e80b47ba6abc2f7882468e9"],["/archives/2019/07/index.html","e55eabefcd99bdf3cdbd5ac59bff5a9a"],["/archives/2019/index.html","31ef01730579cef90c9409899fcfedd9"],["/archives/2020/03/index.html","0aef6ce468dd95ce1ffad81fec986ff3"],["/archives/2020/10/index.html","f3b41c40391b668e5d8ce23f5aaa0414"],["/archives/2020/index.html","f5479aecd6a57eed2b7d23e022092a93"],["/archives/2021/01/index.html","38f90a5a7318b75bde261f86d2435f6e"],["/archives/2021/index.html","eecde37fc108cb90b45c6e324f2ac872"],["/archives/index.html","936ce9efad33190579a96b3e830a9bae"],["/archives/page/2/index.html","7e0b9cda622b6a06c0290ea96007050d"],["/archives/page/3/index.html","787179ecc0d8100c614b787f9b253b5c"],["/archives/page/4/index.html","e111aeef7a75693e3740f80dcd1d7b8e"],["/archives/page/5/index.html","3a87d82add87fbf36da24b8a3958a26f"],["/categories/Diary/index.html","e533f970258725f5678a0cfe503d9af7"],["/categories/Linux/index.html","9496e4e9c9ea20c331f64eba2dfe5f11"],["/categories/index.html","e126a2253b991772c665c8fa06ed42eb"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","d61e129520c9b0787cb34437c513f562"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","86e3677bf67deb901689e196afa66f23"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/lib/fastclick/README.html","8aade2b4af2fe7a20a07717acad50663"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","b9392df0b8ad9841e784c3115569a509"],["/page/3/index.html","0cf06d1bbfc3e2ea4e16b9dfc703ca39"],["/page/4/index.html","de7fab73dfeb0d848d952fed6d1392ac"],["/page/5/index.html","4718b941d6a360e44bf0fe623addf285"],["/posts/1360d6db/index.html","85531998b76ed9c1aa3dd1e2cb7521ff"],["/posts/15726/index.html","56254b5f1c26d55bec7443a4940743cf"],["/posts/16287dd1/index.html","9a6fc5a2fa047480d27e375d42faf6f8"],["/posts/16625/index.html","d4cd0c3816707659752e3c6017646faa"],["/posts/191/index.html","98d3551267ba8ef17845b3cc4a767d68"],["/posts/19efde9d/index.html","02f7a146c0b57e5136baf13fca2f8ee5"],["/posts/23846/index.html","2dcbbb65456f9bb609726aab282035ac"],["/posts/2e76c7c7/index.html","731e9ca47e8bf35653ef22d819008107"],["/posts/2f5fa32a/index.html","41286e5bd33b80d1439ba4678d5c2458"],["/posts/2f6a690e/index.html","9c6ac570a9f80d4cb647f876c89c91c6"],["/posts/33570527/index.html","2be83d426080be2f18772041ce196728"],["/posts/3392da79/index.html","fcc9ff0d898956408e07169f570b4cb4"],["/posts/34b7b93d/index.html","ef878f009bdc83e00f3e62634b5a931c"],["/posts/3cddf8a6/index.html","54b21ad1a643f85d2184129d6f72d9ec"],["/posts/3fcfbf08/index.html","fda1f0765657a38ee4ee8cd0a7bef067"],["/posts/43dd7bdd/index.html","5a3fb5c3489b889bbd2157ef776d80aa"],["/posts/455e3332/index.html","51e0773b049162836fa8757b0468f697"],["/posts/47778/index.html","43fe18879ca669efd75eac2e19ebd719"],["/posts/47863/index.html","1b5471d2f0bacb5e56ea792016a480ca"],["/posts/4b9e079c/index.html","acc1033a7946feac0fdff2786d443fbb"],["/posts/4d5ceeb7/index.html","3992f58fe63563f32d9ab5aa74615764"],["/posts/513217ac/index.html","8e0373412b9d7588d96623891bbecfeb"],["/posts/585b595c/index.html","f7189fca4087923917ac7869b0a4f087"],["/posts/60369/index.html","3f2e36a30bb1d11eb5803077bd8a2ccb"],["/posts/60bb74e9/index.html","687c8b66081466721492bdb6400047f5"],["/posts/64812/index.html","e803396f9aec357ec15b942c7e6dbd16"],["/posts/712bbfa1/index.html","12aadddb1555fbd7b68a1967afcde706"],["/posts/745e7cfa/index.html","8a06ecf40716f7a4a65e20be5154e75e"],["/posts/745ec33e/index.html","34823e71d10c83ff07406f2c7fe88142"],["/posts/7668/index.html","566186321389772caf717e39504343dd"],["/posts/8865/index.html","6713dd054d96532cca1f21a016020b27"],["/posts/88dcdeb9/index.html","8912ff05f3682cec3f5e8c7071eb77c0"],["/posts/8f0db47/index.html","5e4755d3cb128ed0d81e0ed70a23641f"],["/posts/91662d71/index.html","3615afa513ad2268906ec63c99908e98"],["/posts/9d7faf08/index.html","cd3ec7675733e520e0874dc45f20db3a"],["/posts/b7d844c0/index.html","8ce2b18d55f354baacce1e740c27bab8"],["/posts/b8a14aa/index.html","58c5ed3ed57e45e5a2c4d97e5f4ed2bd"],["/posts/c432f601/index.html","f74d96677e0fddbb1077eef4babb53e6"],["/posts/c61c8774/index.html","4712cc23d9f190f3e202edc0c08e964a"],["/posts/ca137339/index.html","44c49a1af8c932351507806414064fc5"],["/posts/d0805e68/index.html","503c57a93db521c92ec6706a43547b95"],["/posts/dc700881/index.html","db18240caa5f7f67849a34f8f9bf1286"],["/posts/dd157a56/index.html","a94bc1493f76904cdd0f3eea79036bb6"],["/posts/df182d34/index.html","05a3c88719c06b21d16f1af6ca211a98"],["/posts/f74f4e4d/index.html","05b79913735a6b9de559e3bac9b93f1e"],["/sw-register.js","3ecf0f3ea508dde100ac460f47167e5d"],["/tags/C/index.html","1b662cfdd5a4d15cc07c005b1dcad76b"],["/tags/CentOS-7/index.html","1946ecf9726b67b3ac5605938bf0d5fd"],["/tags/DeepLearning/index.html","3e534da6a542331845caa43cbcdb3da6"],["/tags/Diary/index.html","a648b2deec1ffa4c31646c999e8a164e"],["/tags/Diary/page/2/index.html","3d24fb307057e4118a5f53742692a6c9"],["/tags/Diray/index.html","a848d20764aca4e0b05b7cac617a55b9"],["/tags/Encrypt/index.html","e8ec3fe4af542f91928c1e8af0c15f25"],["/tags/Hexo/index.html","96eb9f49c40ace4c7086deb61f656f2c"],["/tags/Linux/index.html","7ba5f40a139d321270def2a25c68f690"],["/tags/Linux/page/2/index.html","ca7533125828f6135ae017a680781c54"],["/tags/MacBookPro/index.html","ccdf0e64c1184c6c42c8aeee4b722856"],["/tags/Music/index.html","394eac20acd670a70531ce26cf412bc4"],["/tags/Network/index.html","faa04c2e770b25dc762344482b4ccd16"],["/tags/Python/index.html","6dd9ba8c6397d8f831c98bba0de712f7"],["/tags/Symphony/index.html","62c91f8cb18ffdd992eb44d0fd44a636"],["/tags/Ubuntu/index.html","1406ba4f4f613735f59364470d51defa"],["/tags/index.html","b864050807845e336f3becfbdbfb98dc"],["/tags/kali/index.html","2beff2fd97191650eb725aed67ffafcc"],["/tags/mac/index.html","86c028f118b2dd5fa772ba52eeb2a53c"],["/tags/virtualbox/index.html","1ef9ba42f415c9bacc59779ed6f00671"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
