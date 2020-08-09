/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4a1232cd6d1d09571f02da3c02ff95b0"],["/archives/2014/03/index.html","5090b96e0262016b328a5b091a233d29"],["/archives/2014/index.html","dbb656a7a118e04f4f2b44deb59f09fd"],["/archives/2017/07/index.html","7c7dd1b6951e05f1d85a6553ae92253f"],["/archives/2017/08/index.html","afc42515e712cd200feb202c05a41a10"],["/archives/2017/10/index.html","9caa18b976349e1a05dcec06eceb4290"],["/archives/2017/index.html","41cec005215bff595f30dfe68fc6d7a1"],["/archives/2018/01/index.html","4a48469a53ebfcdfcadef0629b21e4d9"],["/archives/2018/02/index.html","22a1aa71b9b82b933ba662c8a27215cd"],["/archives/2018/03/index.html","56c8c21bea0caf20aa2a5e36e766b170"],["/archives/2018/04/index.html","64bc8f12fc30a4e9506df6896eac1149"],["/archives/2018/05/index.html","079ebf7025ac848b040bdd9059bcfc65"],["/archives/2018/06/index.html","8cfd8ac9d426deb6ffbdd18efdf2a019"],["/archives/2018/08/index.html","7dee6856e5eee727372bd525c33ede5f"],["/archives/2018/09/index.html","ce39f39bc0b59fe8496ba62cfaf5bae5"],["/archives/2018/index.html","e3aa6c16cb706c4a7a1392faec6b17cf"],["/archives/2018/page/2/index.html","3bb63e848070e90d26a2c701e283d751"],["/archives/2018/page/3/index.html","b53b0df5203d774a630b0656b9dc5310"],["/archives/2019/03/index.html","ef9455d6b96a360f4181e04996b7ca76"],["/archives/2019/04/index.html","9f7d51603cedd47d865ddd00d5f8cb55"],["/archives/2019/05/index.html","6036e203d8386340945086202cd2875e"],["/archives/2019/06/index.html","5a2e47be79d3fe2acd04fb2a2623115a"],["/archives/2019/07/index.html","a1a6a6f759e96d284d838f367129710f"],["/archives/2019/index.html","484e9ff0dc1f5019f458bd99109c6685"],["/archives/2020/03/index.html","7479c3961f6744e9b3f86ad31cb2aebb"],["/archives/2020/04/index.html","5e086a30f828a4c79bf77d6caa8fcce1"],["/archives/2020/05/index.html","f7dd5985d1f1748acc762f4af76c21ff"],["/archives/2020/07/index.html","38665784d096ceae822a97b71d426411"],["/archives/2020/index.html","6880ca4e0215bd32b39f3429a9f4e50c"],["/archives/index.html","d0a8bbc984ab0392a4f6dbb9c519cf0e"],["/archives/page/2/index.html","a2b6d69166dee98415dec138652ffde4"],["/archives/page/3/index.html","7b02cc4f9ae1fda784c46b0778530749"],["/archives/page/4/index.html","e6b4e743dc17c8355f7020c1bc4bb634"],["/archives/page/5/index.html","cce9dc5edacf2b79e85561ac94a5d238"],["/categories/Diary/index.html","c22cd617d400fe75161ded888040063d"],["/categories/Linux/index.html","6479d515b32feed633520046d36905ba"],["/categories/index.html","749391d585f991c74f9dd07205e54113"],["/css/main.css","6c53802501ba7c70412f8ab4f72753da"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","841665311f7090c5bdbfe3a3e719c25e"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","602f96303ae1bcae489bfffc6c047d9b"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","1de7d57e6ee4ca47b5ceb24f3960fd77"],["/page/3/index.html","6e7fbba541ac501967160ceb9f112fe9"],["/page/4/index.html","122ad5902d49321dedbb5a95eb4d4334"],["/page/5/index.html","e7d2bec70738e24d7b65447cfa034f43"],["/posts/10252/index.html","c69feb6eda462f0188e7d15db9831fac"],["/posts/1360d6db/index.html","3f668e042d6d9dcddfc16fc49e813fbb"],["/posts/15726/index.html","6d5e74fd58c1bd6f87d8199e585ee3ec"],["/posts/16287dd1/index.html","44de5aae24dcddc42eedf714b1bd4209"],["/posts/191/index.html","05a47153ff8a6414a4095dcece0606e0"],["/posts/19efde9d/index.html","c45b489245e4b72899966e96bf3f0a22"],["/posts/2371/index.html","579869f7b3069af3998cac42c47a7dab"],["/posts/23846/index.html","d1a5efb42243972a91187526aa5b4ac6"],["/posts/2e76c7c7/index.html","640a579f6bd426e75187271acf8672eb"],["/posts/2f5fa32a/index.html","9c916dd15765ef7b7ef3b255ce9fa66c"],["/posts/2f6a690e/index.html","ecd7bc384401dafb599e448ccd3f8647"],["/posts/33570527/index.html","57b217a7744fd1cce808f33ef41e7591"],["/posts/3392da79/index.html","45175c0885e52e1bad346810959e36ca"],["/posts/34b7b93d/index.html","b12e2d4ba8dbde95c6c57c00eb13b8f4"],["/posts/35596/index.html","0972543c2ab34cc37dd768349d723427"],["/posts/3cddf8a6/index.html","0a9fc5496a611b8575d02abc28d6ec43"],["/posts/3fcfbf08/index.html","bcf0d44e6907c95ea21119588a498d9a"],["/posts/43dd7bdd/index.html","5f5407a3bf1c814f2a20adc08facada1"],["/posts/455e3332/index.html","8f0186170aa7f01330ae83142f3fac13"],["/posts/47778/index.html","1f28165f280005720079876734d9142b"],["/posts/4b9e079c/index.html","d6bdf59c2f6bae520f686e1cae71446b"],["/posts/4d5ceeb7/index.html","82e50f5d2092ccf04d2b7ae4c27af2b2"],["/posts/510/index.html","9fa45866f5644f05687a07a97a5c633a"],["/posts/513217ac/index.html","77bdae0ecfd2566f805de0eb7715531a"],["/posts/585b595c/index.html","aef002367654f33a64e634401d796824"],["/posts/60369/index.html","0180284143a0192b8735daed5a17c9ea"],["/posts/60bb74e9/index.html","e7493f55117c78e6af0965e471714c5a"],["/posts/64812/index.html","29723b579a6178fc378ee96319ed226b"],["/posts/712bbfa1/index.html","dfe4cb9df72e62d74938a96cae9df698"],["/posts/745e7cfa/index.html","23697105a8ede8cb81351747e004dae1"],["/posts/745ec33e/index.html","32133af5b8d07e4c51208ce7fd864a1b"],["/posts/88dcdeb9/index.html","06c228cde56a2ee567f0f46a91b4eb7f"],["/posts/8f0db47/index.html","058b1cf8b9846207107411783860d071"],["/posts/91662d71/index.html","a33f8535fe486ca276d5bafe0629f76b"],["/posts/9d7faf08/index.html","8d2be02f25d0fa63f98de105b1624b6b"],["/posts/b7d844c0/index.html","c878322377ff1e8b989ca80aec1a5ec2"],["/posts/b8a14aa/index.html","a7f65cb35c50c0d21057cfc685e23f64"],["/posts/c432f601/index.html","963b7a08dfb3ca7bfbe1371000a1ecd1"],["/posts/c61c8774/index.html","a83b1c9cba843daeb6f790f5ccc4e175"],["/posts/ca137339/index.html","e58de0f6cf5bbdb853815d5a4f9d853c"],["/posts/d0805e68/index.html","0a303dae1d4641c172afc65df22e49d0"],["/posts/dc700881/index.html","c199ba7e52fa15c2c84272a7e7148cab"],["/posts/dd157a56/index.html","c37a6838ecb86f704866c5cb1bdad9a7"],["/posts/df182d34/index.html","f6df9e7e9fca0c68df554ed20328cf56"],["/posts/f74f4e4d/index.html","e9363e60f4ed7757e4bc8a80d10a2a71"],["/sw-register.js","236fbc6d80ec29980cb807b1d43e7205"],["/tags/C/index.html","8b77c7032999f59b3c938872a9d8fd0e"],["/tags/CentOS-7/index.html","b5c641d77467268c60a174b19cd5b3ba"],["/tags/Diary/index.html","2a494c4f30ff5de0eab1fef9886fa598"],["/tags/Diary/page/2/index.html","3b534636c7d427f9a3655de7b1896a14"],["/tags/Diray/index.html","ac0344ecd00b3eb9d59ff18eefca9637"],["/tags/Linux/index.html","7e2f0911be4ff030dc5151af8dd78519"],["/tags/Linux/page/2/index.html","16d25acbf1a9387b0d0d0683c48eaaba"],["/tags/MacBookPro/index.html","bacd0a23f0bf8bc981bbf107073b4802"],["/tags/Network/index.html","2b548b29c72a4354ac55d72bf32f6287"],["/tags/Python/index.html","7c89b82b5f80bef139b6311e7b39bee5"],["/tags/Ubuntu/index.html","7790c14093a0473213819e526e822044"],["/tags/index.html","06f93e5543f72f24b87739c4bb974f34"],["/tags/kali/index.html","be5d68c5b5d4a3a06c4c14c26d63ce53"],["/tags/mac/index.html","b3535a4e2d71803ede2c9e628fda2f42"],["/tags/virtualbox/index.html","6a6d4b5ebd0c2907e9c9a75bd43a64d4"]];
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
