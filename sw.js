/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","163e966973f8bdeddd3b2b2359bbd331"],["/archives/2014/03/index.html","75d7c6c228e09805e2d9b46859600622"],["/archives/2014/index.html","2542ada0ce8a45f0da3f191d5580a3aa"],["/archives/2017/07/index.html","f699a09045f2901c3f966ae6eba1d19a"],["/archives/2017/08/index.html","e5c050f7703a4e72a0d0d0e2b68e470c"],["/archives/2017/10/index.html","a9440d7f229e5ef6f31d04e60b22e13a"],["/archives/2017/index.html","308a0e6c58d7d1afb0817b1d5cd649c5"],["/archives/2018/01/index.html","f326a925557d63d3fb87cfe79a623d18"],["/archives/2018/02/index.html","457bae6f343d2546c98a418fe1b3f1be"],["/archives/2018/03/index.html","fbd497d2521fb84c58b99b150d42c324"],["/archives/2018/04/index.html","802ce9a3e58d4baee045aad21e4b5b18"],["/archives/2018/05/index.html","6747d3d43e97830792f5c6ad3851b28b"],["/archives/2018/06/index.html","b3834035d66c96bc6a7e7e22c40a9c9a"],["/archives/2018/08/index.html","95347dfa776f35830f52c3b578cbba21"],["/archives/2018/09/index.html","bfc8b3cf6bc19312303f5a23388c4f72"],["/archives/2018/index.html","e0e04d105288f2ac22d4a85ea5374c0c"],["/archives/2018/page/2/index.html","09d3d0268bdfd4e85f3d4de55f09e8c4"],["/archives/2018/page/3/index.html","fac73193e2c7a90dc4e36ee0ad3b55b0"],["/archives/2019/03/index.html","3d6ce04b4cbaa1083966d7febb2deca4"],["/archives/2019/04/index.html","fa417054526583a243dd5b2e96967152"],["/archives/2019/05/index.html","77fe6299d97c4d9a56b794b7568543e5"],["/archives/2019/06/index.html","9c96a03314782402f2af4cde94928167"],["/archives/2019/07/index.html","bda3faae685819f76ccf6c1700ff3c7a"],["/archives/2019/index.html","656cdbbb0b7d92441859afb297eb0040"],["/archives/2020/03/index.html","4aa7e9f804529f10a08730144f1f3495"],["/archives/2020/index.html","a4945d7f3177958cd217e51c8a0823dc"],["/archives/index.html","a67bcadf53e74150b004ea6b7dd58009"],["/archives/page/2/index.html","42d4f7e2db867c4d6a28feb26d8e4b69"],["/archives/page/3/index.html","7574a3dfc89092241dc607ada745c5d8"],["/archives/page/4/index.html","c073d2c11219c73f945bb59a40c87418"],["/archives/page/5/index.html","6cd87e9a34787777175217cd488935fd"],["/categories/Diary/index.html","d0a4f1427e8509abaea987cbdbc369ae"],["/categories/Linux/index.html","cf85c97d6df8dfec0788a299db5e1e66"],["/categories/index.html","ff392bbd453f9937cddd763d1c1bb9ad"],["/css/main.css","1b668e8bcc29df0812121058e5fa604e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","3862ee7c35abaf25d20be243dc10d216"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","e0b14112b2178ee777d42112febc14d5"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","1a3d2b6ec28848ac429f04c3b67553d5"],["/page/3/index.html","14db360886460ee60410934464407582"],["/page/4/index.html","78d018bdb93427ed35879990226b0a7e"],["/page/5/index.html","6498b62f28932c8cd065319ea72e4bef"],["/posts/1360d6db/index.html","463171ac66e5b2e6b64aa1ce6a0ca1cc"],["/posts/15726/index.html","9bc0cd3d17b726fdc267d1649a5794b5"],["/posts/16287dd1/index.html","f36887e278a76d110cd0ba56d540e784"],["/posts/191/index.html","f7d6093bad6fb7154767626a7a3cbf4f"],["/posts/19efde9d/index.html","b3ea55326ece63cd6d58f71f7b8c4ca2"],["/posts/23846/index.html","377eb72dab7df0139feb8c9abb21da0a"],["/posts/2e76c7c7/index.html","3b9812d34803b9a19cc8873011c509c1"],["/posts/2f5fa32a/index.html","b8e30f8978a3565844157ee8af604c1b"],["/posts/2f6a690e/index.html","1c337e219084b76dce429ac830c9520c"],["/posts/33570527/index.html","9668d25e71208dff1f68884c63e0cc7c"],["/posts/3392da79/index.html","6bc7597f33bc9ab48829c077f968f0af"],["/posts/34b7b93d/index.html","46900dcd2f08709fb76c54c9a999d5ad"],["/posts/39e5d274/index.html","a6c67622d748b78ca4eddaa141df4502"],["/posts/3cddf8a6/index.html","f5f93f300ce0ce2786c4d095901ef06c"],["/posts/3fcfbf08/index.html","3bfcf4cf800f9bbf596edfd139d3e395"],["/posts/43dd7bdd/index.html","95fa51fa2f7525d38e98c043ea783d6f"],["/posts/455e3332/index.html","4f9f790ebd29d0d136f10fe0e9c24894"],["/posts/47778/index.html","a399488ccd6a48b07c2da7a6750cab68"],["/posts/4b9e079c/index.html","1da1a4f4bc311b07c3ccfe15b8cee8d8"],["/posts/4d5ceeb7/index.html","b9a3d92142b1532d0b4633b02883df09"],["/posts/513217ac/index.html","c67329afce4b01b8db573116af0fcd2a"],["/posts/585b595c/index.html","b9dca55ac2cb08ef451e50ca6b1f625e"],["/posts/60369/index.html","9c5ba5ebce091f31d744be2b22dc79c3"],["/posts/60bb74e9/index.html","a3a3d54ab93769b8d103a977330f60f3"],["/posts/64812/index.html","9036e480dadd1c6f6ed624a35ea72263"],["/posts/712bbfa1/index.html","8e5c1e6eb78f0ee64b931834ca28aab9"],["/posts/745e7cfa/index.html","1ffbd37c1943e393ca100dbd20e7863d"],["/posts/745ec33e/index.html","b37bde9bc1104eea5d7a3490e7cada00"],["/posts/88dcdeb9/index.html","51866990c3ce2ed2d5e045afe6335082"],["/posts/8f0db47/index.html","00b33b62f7a30e2ada688c2c4bad2f61"],["/posts/91662d71/index.html","5dd2c1143a35ea051c8f152ea3ec0530"],["/posts/9d7faf08/index.html","6dea934efe7829f6e0795f12c2f1643f"],["/posts/b7d844c0/index.html","9173646a3d79e9b182489940c6b2a7f0"],["/posts/b8a14aa/index.html","aba10aa3a8bb948cd59878d683643e68"],["/posts/c432f601/index.html","caebf35f31240d29312b43d42b73cc13"],["/posts/c61c8774/index.html","4b66e29be8402a3c7cae2b7279467647"],["/posts/ca137339/index.html","6578e78659d6ccecd20a5e79e1490038"],["/posts/d0805e68/index.html","b669a154149cdd769b579561167fb374"],["/posts/dc700881/index.html","266a196b784eeaabbcc371554b3a85e4"],["/posts/dd157a56/index.html","7c0ace179eea79db9993db1ad8ccbf28"],["/posts/df182d34/index.html","4b0b4f2d194a4c5ef16e5b2f2a834392"],["/posts/f74f4e4d/index.html","20c24fd9a5b136b2f305cd7c78d19c37"],["/sw-register.js","8bf748ecb148973543baa96112e2b479"],["/tags/C/index.html","6cefca4abc7a71cae0ccf9014307300c"],["/tags/CentOS-7/index.html","ce81b4ce1a187c19b864c14513606154"],["/tags/Diary/index.html","6034ad558cf027641744bdc9e308c76b"],["/tags/Diary/page/2/index.html","66d1514d4da200e9d323339e0f99a8af"],["/tags/Diray/index.html","ef46030d06037bc8250ed2101f3b5a9c"],["/tags/Linux/index.html","e672e059fd4a0ed2cc976682d5fc141c"],["/tags/Linux/page/2/index.html","ad3d5e376e68a003da5544ef6b66a724"],["/tags/MacBookPro/index.html","ff8cc280c8472824b7efafd49f63bbd5"],["/tags/Network/index.html","80ea11a5cb446aa801003d2f73e348ce"],["/tags/Python/index.html","8246c40c1dd888ece224c9af18a426b2"],["/tags/Ubuntu/index.html","09e6548673d4a22e8611826ee343f22d"],["/tags/index.html","17501bdee866272e4e8c9b303be7840c"],["/tags/kali/index.html","30235eeb84eb9919aa15b506c7373368"],["/tags/mac/index.html","043a7ccf6d3b19ec9dc9e09070a37e74"],["/tags/virtualbox/index.html","96cee773024f5841e63bab0c0def8801"]];
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
