/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","990098b6a0e866da4da0c7dc1a8d24c2"],["/archives/2014/03/index.html","a44f22b695a5a23d87cbb20b9d5b7898"],["/archives/2014/index.html","a241b0542c2148f36c43d034b9b6d3b2"],["/archives/2017/07/index.html","2a810395cb367583b0e07f771fe392ee"],["/archives/2017/08/index.html","b893fc2d09c178a96ae66c44013b586a"],["/archives/2017/10/index.html","cd7b59810e6a31481b726fd5c07fef3f"],["/archives/2017/index.html","0510c91a52949acbcdba3139ae5c91ca"],["/archives/2018/01/index.html","90a096d6a22f613e31ab6492eb0d074b"],["/archives/2018/02/index.html","b07a020ae80a163f005060f2d7dd3557"],["/archives/2018/03/index.html","150240328b516bdde1599bbb5999f39c"],["/archives/2018/04/index.html","1158902264b65c822ee655a1ddc243f7"],["/archives/2018/05/index.html","df304fbf33a8059c4c9718636d2183f7"],["/archives/2018/06/index.html","a17a6c32439dcac5bdf43bc16b366d26"],["/archives/2018/08/index.html","1294dee1b2690024a138d89f29ccfb10"],["/archives/2018/09/index.html","73550b153247065b261e308d12bdbfd7"],["/archives/2018/index.html","347ad2e00bebb339678121ab204cbcee"],["/archives/2018/page/2/index.html","b258b53408aef2101f6a5e0c54545d1f"],["/archives/2018/page/3/index.html","3fb09f1e43b4d23daca2cba6c581d794"],["/archives/2019/03/index.html","b2ece7dd8a7517661ff6fcbf95e8318a"],["/archives/2019/04/index.html","befcf1ad0f2affcef6e2590c41afd008"],["/archives/2019/05/index.html","d426f44a456e118bfcc2a027b8ee2720"],["/archives/2019/06/index.html","ccb51fba34a6ee3ed5f710145461c865"],["/archives/2019/07/index.html","e2a9e9432966ae54f88ef0033b1a72ed"],["/archives/2019/index.html","43871ec294423b6973e4cd4c552a4d6c"],["/archives/2020/03/index.html","5c41efcaceaf0ecfe881475958d5973d"],["/archives/2020/04/index.html","3e1c23e2b8badbbf657a8cc7e7ef03af"],["/archives/2020/05/index.html","6c34522a5ab336f36bb539c78a1b8a48"],["/archives/2020/07/index.html","5799df38673d73599698c8004dfe766e"],["/archives/2020/index.html","86ae6e6a84d591a668e91228923fca5f"],["/archives/index.html","09c0c019fcb026738bbdacf03b49bcc2"],["/archives/page/2/index.html","c72478a4de00d4a02fec9bf034fa8075"],["/archives/page/3/index.html","6b33659c9a329f50dc193387e73fdaf6"],["/archives/page/4/index.html","5a2cd7538f920282b05b0f69648f01e5"],["/archives/page/5/index.html","a7ac94bb2db1891dd957e2d17c234a1d"],["/categories/Diary/index.html","fdc9b9399f6fceae1a8f5dc123047e67"],["/categories/Linux/index.html","2ddedc60aec479af82205893165e0527"],["/categories/index.html","919c1149f78a5c0d6749782cf026c2c3"],["/css/main.css","46a02ec94ecad5803fe58ea4ce77e3de"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","ae2f278481aec32f08fafa0a8c3e75fd"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","cd347b6bf384c3980f99045c83dd06af"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","1fd6dde3b843841bad9a2dacd13862aa"],["/page/3/index.html","92ea14f8cbc9a2d729c6261ad09fcd4f"],["/page/4/index.html","9963d7d981c68505cb633b4f24c23e0b"],["/page/5/index.html","c7f8ee265439c3a8f7066a04cc519384"],["/posts/10252/index.html","05236614b582dafff1d231837e202f10"],["/posts/1360d6db/index.html","067e5eba844e05be0739400e8997e30f"],["/posts/15726/index.html","90f309c3a73d9487bdc9d4d0cfe1f8a3"],["/posts/16287dd1/index.html","d0435d608eb7f62ab84870c29cc946c2"],["/posts/191/index.html","d0230b408a87cca4e1e7c9bcb6f080b0"],["/posts/19efde9d/index.html","8a48bc387cb93302fe210b72d4e91e6e"],["/posts/2371/index.html","488f0fdfb47023551a8a38afbc54c681"],["/posts/23846/index.html","7a16d6b54e6aa2962e98da07683721b8"],["/posts/2e76c7c7/index.html","193a4f02961db2957d415c6f120dcde7"],["/posts/2f5fa32a/index.html","74b4ae22851f6523e5f9dda00071a832"],["/posts/2f6a690e/index.html","49f4a692cf208331e5f9562c7327cf82"],["/posts/33570527/index.html","d83d39ff6f08e32fce1571d97b89f111"],["/posts/3392da79/index.html","cb9b22a6c166cd4288cf406bd54bbae6"],["/posts/34b7b93d/index.html","7c04637e3c02219eddd879c3e11a7938"],["/posts/35596/index.html","06939f6fb6db67ce9e520c22b83fab34"],["/posts/3cddf8a6/index.html","1477ab69f0805f64b83475bdd483631c"],["/posts/3fcfbf08/index.html","711aaf8d9bcbc3163ff01aec87b29206"],["/posts/43dd7bdd/index.html","5078374f406855ec38d2a76cc0698631"],["/posts/455e3332/index.html","7ff5b67a57f0b1d539c03df09b4273b9"],["/posts/47778/index.html","00ee0507be661dc677bd9968d44232d7"],["/posts/4b9e079c/index.html","e0701531ba8aec0bd4b6682110548372"],["/posts/4d5ceeb7/index.html","29390332bd3e1213f47037b074d24a13"],["/posts/510/index.html","8df656cb2498a65ac83eed3d3445f4a6"],["/posts/513217ac/index.html","fba12cb6eff00cd6db60067d20ed70b6"],["/posts/585b595c/index.html","63f3dc6bd153f67a5afac76770c1e24d"],["/posts/60369/index.html","373db004e3a4750d662e4e181175ec3d"],["/posts/60bb74e9/index.html","688cecbabd79aa3d0b2505cb9fd51412"],["/posts/64812/index.html","f08736c997ca0c71dcd59c09d259a551"],["/posts/712bbfa1/index.html","cd5bd4ba67ff4c552cbc124257c2437e"],["/posts/745e7cfa/index.html","846e0f977fd4a496beb2fa9734d6f3c5"],["/posts/745ec33e/index.html","58b49f9daae76cbaf8a012392d8c459e"],["/posts/88dcdeb9/index.html","7030cdcaeb804208225bdcf0c147c0d3"],["/posts/8f0db47/index.html","ede09ab3de7189c3bc8d0c02ccab251d"],["/posts/91662d71/index.html","ffa700da054049f6aeb84966de3ab237"],["/posts/9d7faf08/index.html","b199529bc994ac6772f002452d7d4975"],["/posts/b7d844c0/index.html","e41fe4f72a17a5c206f2c7f9129fc7d6"],["/posts/b8a14aa/index.html","3ad3fc08c2b27f90f3d8a9c1a80d4aef"],["/posts/c432f601/index.html","472d1ef2d0cfbbb0e5ef98ae904854cc"],["/posts/c61c8774/index.html","52989c952f7c3b8f15e238f5782c22d1"],["/posts/ca137339/index.html","f4ce412d5e0c61cb58d1bd96242df5c5"],["/posts/d0805e68/index.html","0260fa70cb20562905f92e083c642bcf"],["/posts/dc700881/index.html","65d83e1d1c7206e71d5d763976c91872"],["/posts/dd157a56/index.html","726bdea3c826b1815703d3fff640d62b"],["/posts/df182d34/index.html","1f387aa8fe246b7755e0042d8ac5d9f4"],["/posts/f74f4e4d/index.html","21c20e11cb6e6a85eb83f8c9dda6656e"],["/sw-register.js","2df7cec6c1846c610e64d096421a98c2"],["/tags/C/index.html","7fb3ee1fe0f03793e637c4ef0bf9c306"],["/tags/CentOS-7/index.html","d70bbaf05fe67db58e8f2e345525ace5"],["/tags/Diary/index.html","9573ce1218400700cfe2ff0020dd21fb"],["/tags/Diary/page/2/index.html","1b3853c1166b1d682c7855b1678c799d"],["/tags/Diray/index.html","9f6e497821da97966261df0ab4db9a63"],["/tags/Linux/index.html","ebf55ae4ea57e268a765c0deaf304fb8"],["/tags/Linux/page/2/index.html","e5e93e90eccd6f9bae27d4e749721448"],["/tags/MacBookPro/index.html","81cbefa22d6d7c803d1275f0bab69048"],["/tags/Network/index.html","9f458f13d531f80105ebdb5fb2d56ddf"],["/tags/Python/index.html","4238ff2aa74252bc9900aca990061f2d"],["/tags/Ubuntu/index.html","b13c589eabf34410ad61d5702569781e"],["/tags/index.html","02daa8696b3d9acfa5c38ef28797fd20"],["/tags/kali/index.html","e7b97adf7a317b438c6832219f9f1679"],["/tags/mac/index.html","39b436a9a9a46d9a7a99460a2f3fd8c3"],["/tags/virtualbox/index.html","eabe8c4c90ae82ae973124ac19a36f11"]];
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
