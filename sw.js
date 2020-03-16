/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","d8964d32492e13f4d53c266341b4803f"],["/archives/2014/03/index.html","88aa3fd9e48ef1d401698dac0d4d74fc"],["/archives/2014/index.html","ee88cef465727a33a1e88e4c87b117e4"],["/archives/2017/07/index.html","f841a86b65480302bd38978f1181ff7e"],["/archives/2017/08/index.html","ec218db74cff1d90a36e074d1ae0315d"],["/archives/2017/10/index.html","993d46ada4abb67638ee485c740e8811"],["/archives/2017/index.html","4aced1eec6f3c076bc99f0f976eacacc"],["/archives/2018/01/index.html","0c44e79dbfde59ac262aaf0e8f7176f9"],["/archives/2018/02/index.html","c6404872a12b12183e7d8b624ab685bb"],["/archives/2018/03/index.html","734d50242e3b0c927d46d4af45d09398"],["/archives/2018/04/index.html","741ebdc177f3f586e98b04ce02561383"],["/archives/2018/05/index.html","b0a3e4cb6f5a7015c114a778e192c494"],["/archives/2018/06/index.html","ca4ac260406112b0a750393d29ec5a27"],["/archives/2018/08/index.html","074da52b89eeb06c4372d769a9ac309c"],["/archives/2018/09/index.html","96d6b1f5b7021e396846d6bd01f7e7e4"],["/archives/2018/index.html","2e02da418f43ac830e2d7bdc442422d1"],["/archives/2018/page/2/index.html","bf6359aeca7f41f71fe53082ace8aba5"],["/archives/2018/page/3/index.html","de170ae3b20b96dc6c57791c589b1159"],["/archives/2019/03/index.html","31a3e35dcb14e683d4a2a1c85729ae69"],["/archives/2019/04/index.html","adbc91cdd1a2a88eca74af938e76f773"],["/archives/2019/05/index.html","85c6bb4ad14420a72e83e2ef92242bdd"],["/archives/2019/06/index.html","deea557516b3fe6eeedf2c4fed33edea"],["/archives/2019/07/index.html","64fc7071e46a7cd65eab596ef4ac9768"],["/archives/2019/index.html","e8bcf135321717acd08efa4bc1e07fd9"],["/archives/index.html","4e49e69955a84d31babc3abcde7815a4"],["/archives/page/2/index.html","e084b73d8a6a1dff885dbcf0fc215f81"],["/archives/page/3/index.html","c6f39baa6455908418944f6dd50df49b"],["/archives/page/4/index.html","76c518bb0ed0c101874ad687a3bfa6c3"],["/archives/page/5/index.html","12ed89fe5698a786d448ecc0df426e1c"],["/categories/Diary/index.html","3317e36e2c3877dc306560a2a1924606"],["/categories/Linux/index.html","fd0aebd75b4c396ae362d5f1b7814988"],["/categories/index.html","30cc7f0f771978a487122c0eac9083af"],["/css/main.css","26d2b7777f79641960ed96e03ab17f88"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","d5b05f0aaa42d27a9fb6f49d46429b01"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","8e5080d0773bd079dad7696d3e8fa5b5"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","297a39235e08164f95ce0e9a70336ae5"],["/page/3/index.html","32525576b0cb7b3e2cb98532896ce323"],["/page/4/index.html","d7dc8d4c7cfe81107f776ea54d8772c7"],["/page/5/index.html","49e2fcf2807e8bb43c0790405a5d126b"],["/posts/1360d6db/index.html","dba3b3c1ac99293d185734189faf1ad4"],["/posts/15726/index.html","d288254e1451ab7d72b28c4afd7dd8ef"],["/posts/16287dd1/index.html","dc8bee117e3752aad95ff176cacb2b0a"],["/posts/191/index.html","93cf652f8aec404fba6a6564d7ab9647"],["/posts/19efde9d/index.html","0c2c4c7ec57ec62ad8d3b6ac9adc9b29"],["/posts/23846/index.html","c90f9aaca08df5522963f983e154faaf"],["/posts/2e76c7c7/index.html","d36199416e108b733c8baf082e6a59d5"],["/posts/2f5fa32a/index.html","8253af14b309d3b981d9836e783c8757"],["/posts/2f6a690e/index.html","b307f5fd8a2e73392b9b9bf6eacefdc6"],["/posts/33570527/index.html","07a0a9c7ec35378258a5e5c520252dd4"],["/posts/3392da79/index.html","1853c1af61cf03fde5b5520733871eba"],["/posts/34b7b93d/index.html","b179fba18efbc06b4ddcb96802a7337a"],["/posts/39e5d274/index.html","c78b33825c49f3f1bb57d807a7e1bf6d"],["/posts/3cddf8a6/index.html","039577f32ba229dbf9a8b1177b7f54c0"],["/posts/3fcfbf08/index.html","c7ab23eb9b39966451fc9a51e020f83c"],["/posts/43dd7bdd/index.html","3cc49c1bd896899d81961ba03aab0cb5"],["/posts/455e3332/index.html","cab77f9cc79c2a8528c67a830bc66052"],["/posts/47778/index.html","8655cc9b86df38e6a0c2fb77aa4421c9"],["/posts/4b9e079c/index.html","c6b1dab48671b7d6c032da764e315b2c"],["/posts/4d5ceeb7/index.html","75653f6126c1e1f28bfb6045f68f5200"],["/posts/513217ac/index.html","27abff16c18cfa1fe6c8c6a1634d66f6"],["/posts/585b595c/index.html","bc720152e2a4eeecf8a8e8bc347e40fe"],["/posts/60bb74e9/index.html","793456ab5edfb4ff019dfcb5fc9d304c"],["/posts/64812/index.html","74717a0f66af78539873d0a0ffd91025"],["/posts/712bbfa1/index.html","e97aaf399c11b77814b5b6b63c25c27a"],["/posts/745e7cfa/index.html","fa7edf5a9f46564ff32c902b26bdff09"],["/posts/745ec33e/index.html","4863acb088cc06c4f9e053f574d3d047"],["/posts/88dcdeb9/index.html","c671dc30bc3ad32cc1d52042d47e3cf1"],["/posts/8f0db47/index.html","dcf86a67b3e66ed5e3958ca0181f298a"],["/posts/91662d71/index.html","3da7b8c606a78ef3dd1cee188e0f7f60"],["/posts/9d7faf08/index.html","9c40040eeb31a6b2f891f0d31500e168"],["/posts/b7d844c0/index.html","e6491b32a1cb81551281e532a5e10785"],["/posts/b8a14aa/index.html","1978478ea7eb86a8be512acfff3089e6"],["/posts/c432f601/index.html","3e1c15b323eec27ca1a971d4ecfc4f8a"],["/posts/c61c8774/index.html","b1a0924731dd32056a62e9b9a580554c"],["/posts/ca137339/index.html","8b69986215087df22a8d594e0a685090"],["/posts/d0805e68/index.html","e47dfaf996aded2377aff0e11e4d4c97"],["/posts/dc700881/index.html","da5c686e492b34ff518dc68b3da74102"],["/posts/dd157a56/index.html","91f7f4ca652317d0936aa8917a01d5c7"],["/posts/df182d34/index.html","27658dfb97c98d79bf88d4dd9bac6a63"],["/posts/f74f4e4d/index.html","c88297a0c849fb7e3a029b5f57597c87"],["/sw-register.js","7ba1be23d34c5641dc3046289b9ccb29"],["/tags/C/index.html","09b55f0e8270fcaf815816629e521602"],["/tags/CentOS-7/index.html","4bd90bc0f638555ec265df6df8fc307a"],["/tags/Diary/index.html","e150560ba8624ed8be7408fc25f26e61"],["/tags/Diary/page/2/index.html","28f7aa9a0df18466b2d90f39b7c02d71"],["/tags/Diray/index.html","a13f34b2d4367881020cfe2e793de2f3"],["/tags/Linux/index.html","aa4f30a6b659c98516f777e307978c2e"],["/tags/Linux/page/2/index.html","30a5687873c465ba04cd7479f089aa2d"],["/tags/MacBookPro/index.html","37ae1527eef8d066fd1af1c77c6379a9"],["/tags/Network/index.html","b209c13fe2f181665ce7dfe42b41a1b1"],["/tags/Python/index.html","239492757c3de53dc90afe1c0165c784"],["/tags/Ubuntu/index.html","59b01874e3f7b0141a9c0e2e308be319"],["/tags/index.html","d2d6fa846a519d0af391f644ce238543"],["/tags/kali/index.html","37e57ac70d909428e5eb34f0bf14edd8"],["/tags/mac/index.html","62811e51a1941fb9ce83a14238f7504e"],["/tags/virtualbox/index.html","824d7728fc9ca65ea7d2a6ee2e951459"]];
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
