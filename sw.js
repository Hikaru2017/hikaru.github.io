/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a9767ef31c322bcdba3b430715d7237a"],["/archives/2014/03/index.html","c148348540b0b087c5d60cc6e70d496e"],["/archives/2014/index.html","73d6ba9b173ce8ced6a84364aa9f5b8c"],["/archives/2017/07/index.html","a2d9b96fc4b2d156e6942def3cd683d6"],["/archives/2017/08/index.html","6bb34619004c860bdf52d515d30d6811"],["/archives/2017/10/index.html","3a8e2dab82a2275188c591b5f6fc27ee"],["/archives/2017/index.html","5fba896949d6f160b890564677ff81b2"],["/archives/2018/01/index.html","929940c67a285eb22d0c6b5d767abdec"],["/archives/2018/02/index.html","b298afb6dd11c02cf82cb090f34b6b32"],["/archives/2018/03/index.html","5b99a60cf2277f7d553a64c90ec2d8a2"],["/archives/2018/04/index.html","2ad3962e7d3b3ea72375b96a81ebc546"],["/archives/2018/05/index.html","64937b478e2befb4c4d85f024da5d1ee"],["/archives/2018/06/index.html","39803d0f0ce5aa8f9593552935d524e7"],["/archives/2018/08/index.html","96390b72a2338c05b5d48c138ca1d312"],["/archives/2018/09/index.html","e275d2b9480d74cc7d1e10b932c5558a"],["/archives/2018/index.html","95fe18ed03ebaf8e2bc339fb3c09b49a"],["/archives/2018/page/2/index.html","8d93639616528164548a76f5fc81238b"],["/archives/2018/page/3/index.html","d74f9101a0e408668c8e46667a1b6ac1"],["/archives/2019/03/index.html","926a50778ceb20d4d4ab2180f55cfdf8"],["/archives/2019/04/index.html","681e3abb88b9d00d72ec81d9fa8024ac"],["/archives/2019/05/index.html","a901281527cd2815339ffda03933b10b"],["/archives/2019/06/index.html","e4659c608715fc2d82af0d8c9e02a8b5"],["/archives/2019/07/index.html","cddc05427933ed91d9855fe7bb77f1ba"],["/archives/2019/index.html","bc6b1224a5bb4477a7dc99bbd114c30c"],["/archives/2020/03/index.html","23dca642f4c0dc4604f047caa2ba6f55"],["/archives/2020/04/index.html","8ed53f1ca8d611ce74a3b22d26739a47"],["/archives/2020/05/index.html","f61b6acb0cd64d877a468553c01bbc0c"],["/archives/2020/07/index.html","10e49f3dbdae6224c92d70fe49efc2a6"],["/archives/2020/08/index.html","136a5403bea662949cd0cacaf765dde7"],["/archives/2020/index.html","80b61e212cdc3ef2e723898d3b87c49c"],["/archives/index.html","e33817ff7b5822d38d6e19551abefe13"],["/archives/page/2/index.html","3f319e4b09d172be28a071f93548ce7c"],["/archives/page/3/index.html","bd346865baf3931a4af4647f8e2f08f5"],["/archives/page/4/index.html","edb640d51e2f3bb3279b059cb835b0bb"],["/archives/page/5/index.html","19c11b4c024dd57e5c47a24d426ed017"],["/categories/Diary/index.html","03b056bf74c600f7bace05be260b0b75"],["/categories/Linux/index.html","670984e1615cd4bfeb7f30c755bc9854"],["/categories/index.html","32f657ce26a42271a17236b6ffb35495"],["/css/main.css","221d5c6cad95819a3ea67da9314090a0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","9d3523a13ecf6bd3d7994dc07cf82b42"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","c8346c9baca5e4ec3f95c0dbc067cbb9"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","afb316b05e7f35d718a95bdfa4dca5ab"],["/page/3/index.html","09d75f030480891f41fc44e723e6bee7"],["/page/4/index.html","4f204cb9aea1590e2b70121ce4089957"],["/page/5/index.html","b6e47a662895860f19ca51401943591a"],["/posts/10252/index.html","2806400575bbd5bef5135f32407b7b6e"],["/posts/1360d6db/index.html","b18c03f49b63031abb3c0f337d5ef914"],["/posts/15726/index.html","2229222907654e4735fb8f63306c61b7"],["/posts/16287dd1/index.html","ab51cf1cf8737961100e6c692a754166"],["/posts/191/index.html","bbcbed3db25f3e102fb576e49f77656d"],["/posts/19efde9d/index.html","03fe0d29b33ea5ab4ecfe0042718cddd"],["/posts/2371/index.html","83fd21974b298b5695580b5130fa8eb1"],["/posts/23846/index.html","ac8f2f7a508f8d18213fd44791797f2c"],["/posts/2e76c7c7/index.html","7c440c5379e52d0523af99bb4aa5b3a6"],["/posts/2f5fa32a/index.html","5b923fb96daf9f23951dd137150e406c"],["/posts/2f6a690e/index.html","7e5977f8b7a66117bcd2ea9f827af68b"],["/posts/33570527/index.html","cd8cc5fdc6f44ebbbaf1e2d95c6f71a2"],["/posts/3392da79/index.html","b5aaa23a015d1f653cc68ceb9326a089"],["/posts/34b7b93d/index.html","45278f3fa8fe6742bdd69d3627f3da66"],["/posts/35596/index.html","e671f631990e721c0fafbcbd8b7f86b1"],["/posts/3cddf8a6/index.html","35e7586951c58f5d2ec2e69c33e5f143"],["/posts/3fcfbf08/index.html","5c681c321f69db012c7ff1b90cecd4b5"],["/posts/43dd7bdd/index.html","edb93da74934e9403c88632d67cc2144"],["/posts/455e3332/index.html","aa56475584e5161d32ce5b5120eeda6d"],["/posts/47778/index.html","2207fbc1194061ea44c56334f6bc872c"],["/posts/4b9e079c/index.html","53af7bef61fd96e899008b16c3c91486"],["/posts/4d5ceeb7/index.html","ddaac9c41da611fe68cf4fb5079f3d45"],["/posts/510/index.html","c9896061787ff71f21ef0b188bdffe83"],["/posts/513217ac/index.html","2fca5cdd464e4632e04f60ccfe24f755"],["/posts/585b595c/index.html","6817f0d659a78ac3dfe63541caa03a84"],["/posts/60369/index.html","5d8d73d7d3777b6f607d391d1e13ac0a"],["/posts/60bb74e9/index.html","026d72fd9007fac8253e305b0669eabd"],["/posts/61961/index.html","bea0e1d14fec183031808001c81e5203"],["/posts/64812/index.html","bfadac622e32a5940902446b6ceb8995"],["/posts/712bbfa1/index.html","0d718c7c1c28e604700c34e01009bfc5"],["/posts/745e7cfa/index.html","2c508789181cbe770cfd2203011efb92"],["/posts/745ec33e/index.html","d29013735f9cf96afe980ab42bc731e3"],["/posts/88dcdeb9/index.html","2966046ed6e148d6e08dc052f6d4765d"],["/posts/8f0db47/index.html","68b96e5cc20f636e62a8e6b6eed28202"],["/posts/91662d71/index.html","67161a6b77ddd666fafdefcda6b3c5a9"],["/posts/9d7faf08/index.html","9168b7faefd1048cb3dad27ddf762e95"],["/posts/b7d844c0/index.html","b00dd95da17fec73ab41e68ecbb657cf"],["/posts/b8a14aa/index.html","84c28fe0773ceac672491df1148bce9b"],["/posts/c432f601/index.html","02e2c0eb3bae23b93d7270c40838dd09"],["/posts/c61c8774/index.html","0c446a43dfc700485a0858855698a50f"],["/posts/ca137339/index.html","9dfa00b6932d6b68b1bf271f21277a4e"],["/posts/d0805e68/index.html","17bd36768d087fbd16fbcf2f9873f3f8"],["/posts/dc700881/index.html","19fd122c96838f8aa0bf0cb700bd3bb6"],["/posts/dd157a56/index.html","c673cdec4a96f45a6523fb1cbf45a3e6"],["/posts/df182d34/index.html","bf41ee4ded1b25e4c479ac448377ba17"],["/posts/f74f4e4d/index.html","4afe4abef332323446245216d5cb6459"],["/sw-register.js","820590ac11e6f74ee78b017fa83b2d42"],["/tags/C/index.html","574d64aec6b02990482dc6e07787eda8"],["/tags/CentOS-7/index.html","060e15c80c0c1ad0d564b218e649d076"],["/tags/Diary/index.html","5e6a6b2c96bd761b82117e61c4c8ebb5"],["/tags/Diary/page/2/index.html","312b7f70cdf8519e1a6aa3b1335d88fc"],["/tags/Diray/index.html","2b1fb387eb6859b6859d8e33f879e94a"],["/tags/Linux/index.html","e9a5776055bc4af37a31adfe97ceb005"],["/tags/Linux/page/2/index.html","f3a932ef74535421b8ca76b3f83b22f7"],["/tags/MacBookPro/index.html","ed0361ea244b806cfda5d4fddd7c141c"],["/tags/Network/index.html","42e4fc8295cac196f148173ad170a6c3"],["/tags/Python/index.html","1151c8adf2e9c6914ebea70b173aabbc"],["/tags/Ubuntu/index.html","fd71f0790594e602c5f0e1739eba8a98"],["/tags/index.html","7d8ab8e323d836500deeaf6338eac0a4"],["/tags/kali/index.html","62e6e7cba8e7e6b414baaca2a3f34697"],["/tags/mac/index.html","f4bb9545afb4f7d60f2eae94b8feadaf"],["/tags/virtualbox/index.html","1767fdd727034db29241761d010dec8d"]];
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
