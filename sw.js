/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","39d154def18221b61c4e86ad718f033a"],["/archives/2014/03/index.html","38ebef3015ca29fc4eda2ec691d803d0"],["/archives/2014/index.html","1d650a0afc7241f9f183e270691972d8"],["/archives/2017/07/index.html","bf452e02f1a96b8ef027a1c326fb8d47"],["/archives/2017/08/index.html","1a6a0248e3e0a5514f01dee07a067675"],["/archives/2017/10/index.html","3fe5a50f8b8e432b8e1e0d86543849c7"],["/archives/2017/index.html","8772634c800badf2bc65dd9e6feed020"],["/archives/2018/01/index.html","b7515591b787de509ea3cbbf90fcaba3"],["/archives/2018/02/index.html","890df097548cea5cb545f35c11cda355"],["/archives/2018/03/index.html","ba3b6fc309070eb24a462ec702a80535"],["/archives/2018/04/index.html","df9b9b45ee2fbe9f6fc840ff41b3088a"],["/archives/2018/05/index.html","42c2d9f42d3083d96b69f51cf5d0d7bb"],["/archives/2018/06/index.html","d315b256ad73fac16735ee9d2e89e737"],["/archives/2018/08/index.html","34d0d334d050fac0a281cccdcaab3ac0"],["/archives/2018/09/index.html","8bb7e42c01e6c2fd7687a7c3789ff953"],["/archives/2018/index.html","0812441607c8dd97911074c6ec2e7774"],["/archives/2018/page/2/index.html","e74b722007d19d5b68f02a4bc0c7ea9f"],["/archives/2018/page/3/index.html","32a4bf588f61ea0123525bfbaa087f70"],["/archives/2019/03/index.html","b94f3d7ba7f2fbfa0fe65b8f6d6f7693"],["/archives/2019/04/index.html","2dece3ad79ad9f09c86e5901b68acfd6"],["/archives/2019/05/index.html","db8085f9b0d50809c463d9f1eb06cba0"],["/archives/2019/06/index.html","a69c1d320dfba54c997721c8698dc61c"],["/archives/2019/07/index.html","382e79a162aa7b70b790ac41e098133b"],["/archives/2019/index.html","f02087ec556f1ba71658668fb3b4a346"],["/archives/2020/03/index.html","2ce9cd21d611e083a351bce76dbb5021"],["/archives/2020/04/index.html","c9ab3b797b7597bc17b211f243eb3951"],["/archives/2020/05/index.html","e660cd1527124900107c3ae9155a8a11"],["/archives/2020/07/index.html","da1c61cacf603d4db5a07253a3994992"],["/archives/2020/index.html","2a8f5b177411b06058507c8800cda638"],["/archives/index.html","69e17fea8468687fca053f778255f7f7"],["/archives/page/2/index.html","73fb0546de2088b3fe846e89d21e0e34"],["/archives/page/3/index.html","b4db9e5c160609ad78066487ac65fdc9"],["/archives/page/4/index.html","2d9b712b5cf91ff0f2399fa690d10798"],["/archives/page/5/index.html","8373260cc0772deab63f1068e7300042"],["/categories/Diary/index.html","52633daa512e66849a996bb81f7c0e1e"],["/categories/Linux/index.html","23378b95726870928146211cf4ee07cf"],["/categories/index.html","6ab8de7fba4b4e7bd9ba5bfe72d95820"],["/css/main.css","5d2a3c8d43ef1a3aa3e79f8052138ebf"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","d0d345fc9a2693860e212899b9adb6af"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","94e60508b2ac5947c3b90270105dc4c8"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d92f6978f5bc8c83255e14141f7edc15"],["/page/3/index.html","b44e33be7652e506d87f97af6afd34ab"],["/page/4/index.html","f182db39d83cb0fccd6237fcf79a6229"],["/page/5/index.html","e9000806caf4058171e9f3a50b1188eb"],["/posts/10252/index.html","bb4f44b217e12763cd46addcf5ab15b3"],["/posts/1360d6db/index.html","0aa517457188b3c0613466464cf6cedc"],["/posts/15726/index.html","cee98c89b2b8ffc9e40ccde1c7ae67e0"],["/posts/16287dd1/index.html","0230b263f3686f4ba95187de5211d057"],["/posts/191/index.html","7b05305c0144f12a4b674a0d9e3b7e61"],["/posts/19efde9d/index.html","4f9f188bf73a4d264c0572259af1e903"],["/posts/2371/index.html","49fe190170a230dc8870ec295624c086"],["/posts/23846/index.html","de13b5e67475a0ffc11e806e639c704f"],["/posts/2e76c7c7/index.html","5854eee346fd89a2128098463fd868d5"],["/posts/2f5fa32a/index.html","ad425534fd4c870394fb15dc38790653"],["/posts/2f6a690e/index.html","5a9a1ff173b43039224611f02646e362"],["/posts/33570527/index.html","bc88390868001e6b4221a97b51ade34d"],["/posts/3392da79/index.html","136a059f58fba732f01c4b2701518c83"],["/posts/34b7b93d/index.html","727290ecd868723148b5d1a20c4c94b7"],["/posts/35596/index.html","e328792e76ad491a5df70f728c65a69a"],["/posts/3cddf8a6/index.html","94ade133fd03963af50e63756799e11d"],["/posts/3fcfbf08/index.html","ba9b28d3c9f1d7e3c25e238b6e220f41"],["/posts/43dd7bdd/index.html","4993347aa9363d7a7db654246419b7fc"],["/posts/455e3332/index.html","4364ccbe1076fd9113088671e7990524"],["/posts/47778/index.html","aed28919325d57ab4f09b08e205ff668"],["/posts/4b9e079c/index.html","d751dd57a90aec0895ff7dcc17ba7734"],["/posts/4d5ceeb7/index.html","1f9c0dc7900e11b6b7eac8056ea585b5"],["/posts/510/index.html","19b6d72d92e2543f1cf7ae6b6b18188b"],["/posts/513217ac/index.html","a3b68fdbb246595a29fef0873bcb30fb"],["/posts/585b595c/index.html","6862a3d8416ad6e1588a990e03dbee43"],["/posts/60369/index.html","e85d2e8b5a81cbcb4ca96dfcb735f324"],["/posts/60bb74e9/index.html","d484e3d84a709da5814668335ade30eb"],["/posts/64812/index.html","34e245c95ea1a30001f4d2cabc4c8777"],["/posts/712bbfa1/index.html","2369d664ff4e848becf4c9281aa18680"],["/posts/745e7cfa/index.html","d81cc51ff8c41a8b8c815c2a8c7816b8"],["/posts/745ec33e/index.html","e75e803e1eea499dc64479c661ad1490"],["/posts/88dcdeb9/index.html","52a036654b97e4c1ae3d7722e61c665f"],["/posts/8f0db47/index.html","253f57ebd6a415ce70df8a8807cebda3"],["/posts/91662d71/index.html","f4e91b7f2be8e57b9bd2e4b1104708e0"],["/posts/9d7faf08/index.html","afad34484061d37f9f50605c743a5102"],["/posts/b7d844c0/index.html","18cbd6eaeb06eb2d5099283cac995943"],["/posts/b8a14aa/index.html","2692a96e5f31117ccf6ccbc3523af776"],["/posts/c432f601/index.html","523dbadf7033888fbb38f37c623cc3c4"],["/posts/c61c8774/index.html","b772f1172129ed2bc7cfc7f89545017e"],["/posts/ca137339/index.html","cde90528e0b2886f4c8e2c413d0a92ed"],["/posts/d0805e68/index.html","f92f0f887cd6433d225ee9369cea28d6"],["/posts/dc700881/index.html","506145910e9c717b15a01abe27ea4872"],["/posts/dd157a56/index.html","4d7f82bb497f98d4ab0b5f58924934ec"],["/posts/df182d34/index.html","0fe2df618d4a00a12adaa216951aff78"],["/posts/f74f4e4d/index.html","a7e1844ef6daf0e0255501ad23ee49fa"],["/sw-register.js","9e470ca613433480b18798b9216262a2"],["/tags/C/index.html","cadd8d3e08bcbe9ca512c1d244302060"],["/tags/CentOS-7/index.html","92036c5e63d526cb73776a75b44f82cd"],["/tags/Diary/index.html","cc54b45966721970d3666433c942619a"],["/tags/Diary/page/2/index.html","b9b2843f0a62d480aa2e1520030ef9ec"],["/tags/Diray/index.html","444c8b21b7e4738c5a45015fdbdf643a"],["/tags/Linux/index.html","26ecb1c911764864d2af9553d0034b38"],["/tags/Linux/page/2/index.html","74d49c9a1b8991d8520ed22c237e3068"],["/tags/MacBookPro/index.html","4c2281debb4a46bb003e044c1db0acbf"],["/tags/Network/index.html","394ea537db2bdd1aefda7ed4209d654a"],["/tags/Python/index.html","9d18722b0212a64defc4e93b1634c555"],["/tags/Ubuntu/index.html","6ed5fa26c0fb6fa6116bd66bcda685a8"],["/tags/index.html","d12689e5894c8a4a9814d768b98476c4"],["/tags/kali/index.html","80c3250502b99e3506a853ed91f6c53f"],["/tags/mac/index.html","1aed611ec89c4f1fe36cb960a6f78986"],["/tags/virtualbox/index.html","a640c361cdd0b8192f7977788f682d32"]];
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
