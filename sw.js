/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a4fc88124a447833763346020208d11f"],["/archives/2014/03/index.html","4c2f05bfcf64c604cd79d995f0ee5225"],["/archives/2014/index.html","5699cc05651aab27e3a04f82308060bc"],["/archives/2017/07/index.html","8b42242c657c1b819f24b5509c9d7eb4"],["/archives/2017/08/index.html","5083065cde7455459ad00362816ed004"],["/archives/2017/10/index.html","c49ed8a541485176eaff0dbcedd311d5"],["/archives/2017/index.html","795a9cf5ae9f8fcc05dfd8e89214415b"],["/archives/2018/01/index.html","86a792d9cf2cc566df9f4ca635558352"],["/archives/2018/02/index.html","90f60ac453fa4cb78357b7fe45064f6a"],["/archives/2018/03/index.html","96be4b3061a29e6ee5b2373dfb664ef0"],["/archives/2018/04/index.html","1fb8829bd4395f48480fefcab3f82d94"],["/archives/2018/05/index.html","81626e8b468a1fc7661b243d0b161497"],["/archives/2018/06/index.html","d3a29c54717706532bffd700b7f8fd60"],["/archives/2018/08/index.html","70ecc5ff7b5ccad07b40e9a9383368f5"],["/archives/2018/09/index.html","b4922f3388a01edfcc71f6cd99951d2c"],["/archives/2018/index.html","4471a9486a38113b8005392483e81ac7"],["/archives/2018/page/2/index.html","c5a18ccbb7f805557f1f4a0a3c41b639"],["/archives/2018/page/3/index.html","b15607a51201241c125b7951e352d82f"],["/archives/2019/03/index.html","bd0a128f06666330f841d1017421744e"],["/archives/2019/04/index.html","8320b6d4c76c26982a29e7c5c707418a"],["/archives/2019/05/index.html","9d3fd7c676e5a65786a6e196ce95f1f4"],["/archives/2019/index.html","5c32234bf13d7c907e4da12c64d06879"],["/archives/index.html","b94649bbf27bba87e1f6e0a332bcc50f"],["/archives/page/2/index.html","b9454ea01cb4b0afbac608faadfe54a5"],["/archives/page/3/index.html","077d8b95b0d328f97c704b2d2848d039"],["/archives/page/4/index.html","d4d4f5d06d17e91fbfeef88ca8fc3022"],["/categories/Diary/index.html","63d40978b48df8d3a80656ca72750199"],["/categories/Linux/index.html","7dc91d23c5665ea98e5fa5e123cfeb85"],["/categories/index.html","a243e59e36f0fd1a9b0d91f06f680041"],["/css/main.css","e823327359d3ab0684e5f637846adc60"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","28955debead8315184237563a8a24790"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","b139e7d961f09d53dd76401f7f245ee1"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","d3dbac801d634d6f698905e18157fa23"],["/page/3/index.html","a27896af2883d18531ac6828c721674a"],["/page/4/index.html","43270f544c918eae03fd8d9a9d0c7869"],["/posts/1360d6db/index.html","d3c557e36f3d42bfadca7204e7d41469"],["/posts/15726/index.html","f781ee18143e204514dbb0af6443c98d"],["/posts/16287dd1/index.html","64ea980b3e60c5c9f7541f4b608774a5"],["/posts/19efde9d/index.html","2b0c5bd89c3f6b59409a5d1862f84609"],["/posts/2e76c7c7/index.html","13715710eb448ea494f96c03e7aa403f"],["/posts/2f5fa32a/index.html","fc18cee61898a4db9f53a49844fd109a"],["/posts/2f6a690e/index.html","cb9c03aed83d47222a28092639489a2b"],["/posts/33570527/index.html","59ac80a020d686ef30d242d38e9443e0"],["/posts/3392da79/index.html","3a8b79c467e5018b4e0fba13583d0ce3"],["/posts/34b7b93d/index.html","02eabc4f8a1bd285b986109bf4c13634"],["/posts/39e5d274/index.html","04c3de484e5fd71fe3e2135776b320b9"],["/posts/3cddf8a6/index.html","a4f2c90bff1fc54b19f940a3f101a289"],["/posts/3fcfbf08/index.html","cf694d5eafe3a1a4896bbafb474e7af3"],["/posts/43dd7bdd/index.html","8d5ef0a457f237cf3d7fcc32ec3d702f"],["/posts/455e3332/index.html","31a9ebca587cd373cb943b43d7afdb63"],["/posts/47778/index.html","79bdad63b594aec579ba552b1d359474"],["/posts/4b9e079c/index.html","e2da57021ba6676e616bb1ae3b36b48c"],["/posts/4d5ceeb7/index.html","5b991f4b688db7a2eb3791b92b2ce80f"],["/posts/513217ac/index.html","a8b04747b86ffc086c3d35043bb71e4d"],["/posts/585b595c/index.html","db7190e31b8e909eb2b70d858fdd5008"],["/posts/60bb74e9/index.html","a410d03c1a67a02ff888bc3898d29df0"],["/posts/712bbfa1/index.html","9fdb35f25ddcc2326a4ca0a3ebdd4f91"],["/posts/745e7cfa/index.html","14482c25a7a255de092757864ef08456"],["/posts/745ec33e/index.html","5c297f535b8fefe7e837598f697d52a2"],["/posts/88dcdeb9/index.html","cd4063792d12a74efdff04499a853803"],["/posts/8f0db47/index.html","0f03624e797ddf46affa4d83781bdf15"],["/posts/91662d71/index.html","7e4cbc85de4028d9148efdc2ae1bb31f"],["/posts/9d7faf08/index.html","17db3ecdf02e09a3153b691b760a34ed"],["/posts/b7d844c0/index.html","d53371baa6b030e6df1ef1fa581e4490"],["/posts/b8a14aa/index.html","8513e4393dfc4f78878f02ae48ea484f"],["/posts/c432f601/index.html","783a8bac164c63cf6d82ee03f5abf1f7"],["/posts/c61c8774/index.html","82a266402c42bb7074a02f6295a250c5"],["/posts/ca137339/index.html","826c3d001ffd2bab56365902d34ae717"],["/posts/d0805e68/index.html","4eb5eddbad0865540084d35b91011934"],["/posts/dc700881/index.html","b42c8b22be5dddc61d8c9cf4598a45c7"],["/posts/dd157a56/index.html","d9dc56d5cc8873e7aca724d7adf3b7d1"],["/posts/df182d34/index.html","48487f1bd88c17f72419f6196b5684a3"],["/posts/f74f4e4d/index.html","fac320cd8bfaaacb857836800f462106"],["/sw-register.js","21013da042956522db45cdce48212aa0"],["/tags/C/index.html","f10a982c569f30d8db9387989bba246c"],["/tags/CentOS-7/index.html","4ebde6c506bcd141cf0642636563d500"],["/tags/Diary/index.html","6ed4368cc142569470fae35fee230cf0"],["/tags/Diary/page/2/index.html","7d7f14e537c27618abced835296c2fc8"],["/tags/Linux/index.html","48978ae86d3d676962b5728e6523caa6"],["/tags/Linux/page/2/index.html","a3183f285dbc5550617b852f87fc8d29"],["/tags/MacBookPro/index.html","6b2926549c243c1b6dc8619808664a07"],["/tags/Network/index.html","40965fbbf3bed78caf1da16d0a4b5105"],["/tags/Python/index.html","f3fb08f6aaa406b919952b21b9d64b8d"],["/tags/Ubuntu/index.html","a1dd8c9f13f9147c3783be34cd62f345"],["/tags/index.html","67c34b8ed356d0998d6a0666dd0d0636"],["/tags/kali/index.html","dc8265dcab9ee36e8f9d9e6c59583b07"],["/tags/virtualbox/index.html","e0df735ffd490114c7b92b85c5fcbe1d"]];
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
