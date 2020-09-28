/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","8d4f23ee2694da1b376f0e6cc6eda20e"],["/archives/2014/03/index.html","6ec632552a8e6c83a9f7dcf9cb6df664"],["/archives/2014/index.html","139240ec323de7b5469096850b123636"],["/archives/2017/07/index.html","c1b5299db11ec4b8b2af5df951f079a5"],["/archives/2017/08/index.html","94a60d163cb560740273d865ef3cc17d"],["/archives/2017/10/index.html","a207523edc129fa40ddc8dc5095273af"],["/archives/2017/index.html","ad2870fe42b2a11c0df4ddb36ce1b34a"],["/archives/2018/01/index.html","ed0de21f36dcbd005feea57c8477b347"],["/archives/2018/02/index.html","781662ec63fbc070834ad28a3c8a7717"],["/archives/2018/03/index.html","17d417c6f175ced6482ae1c421f50869"],["/archives/2018/04/index.html","ea63bc8404969c73be1bff82cad35b10"],["/archives/2018/05/index.html","5a0f0f82b453e021e99c6ddd0615f8e3"],["/archives/2018/06/index.html","4decf28efbead889b562e2e50b740740"],["/archives/2018/08/index.html","24594689fae5d5e6ea556c78199f77dc"],["/archives/2018/09/index.html","79e7356533b45fb2b80adbd5fa9d798a"],["/archives/2018/index.html","3e95a7173f8a8b54b16cc8c69f368551"],["/archives/2018/page/2/index.html","99bcaf93e4d507eefc2f1e2e724bb595"],["/archives/2018/page/3/index.html","c712682ec0b976b655048052fd9c1efd"],["/archives/2019/03/index.html","5b1307478236452ee6324707e75628b3"],["/archives/2019/04/index.html","a1b4d0fd58b4e0211c9f33967bdb9cec"],["/archives/2019/05/index.html","65baa4beb9f505ca028bb0812f1dea67"],["/archives/2019/06/index.html","32bb81b26c9ce7cb73097a587d47b267"],["/archives/2019/07/index.html","01ce3fe02c4ca3a40daa4d3b12ca1fdc"],["/archives/2019/index.html","090e0c65857ee3c00b1010f63c52a059"],["/archives/2020/03/index.html","6a9a403d357683a94610e81d83710c16"],["/archives/2020/04/index.html","433bfdb2fb3ea41d4880b1425956f460"],["/archives/2020/05/index.html","d87db40346f95b227e34aa4af66d92fb"],["/archives/2020/07/index.html","04b37ffaa50fa87e888990a3d140e33d"],["/archives/2020/08/index.html","c64b453782bbefaccf3d0c7d633a4b56"],["/archives/2020/09/index.html","b5d08a68e1d2c0aa9541645bafb270c9"],["/archives/2020/index.html","a7bba064d0dfd6aa1e050ecb6bab7611"],["/archives/index.html","9922cd13a4ea5f312f8d208712638f4a"],["/archives/page/2/index.html","7cb2b7eaceff63122ff71ed786dbd46c"],["/archives/page/3/index.html","9e7d65bd6d8d7e9a42fa47a96f983fb9"],["/archives/page/4/index.html","4341de42466d1ea0dcd5585b6f85de89"],["/archives/page/5/index.html","7b5bc70283d3622aa422670eb8113eb8"],["/categories/Diary/index.html","de00c2356d50871dac965a6c3579d99c"],["/categories/Linux/index.html","409e48989e45efca446fdef0e90aaac0"],["/categories/index.html","d3c381a7dbadbf0072ea287549682ee8"],["/css/main.css","3693b0a8eb2a73b5f76fa475d9e6530e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","a689705ff9779997dc8762460018513d"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","86ffa0c4cd8e3d9fb3b28c50c68a41c1"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","bfc7d59db820f381898282b01153daa0"],["/page/3/index.html","aceb36b2cc94020990aee3251f41860d"],["/page/4/index.html","ee739e1bc13663759a4d82e4220a16a4"],["/page/5/index.html","ddb613b805c9254ca9f04a6c6689d627"],["/posts/10252/index.html","45234a1f11d1b14080633a8e18005081"],["/posts/12241/index.html","504560c2be4d3bd2147217870b862048"],["/posts/1360d6db/index.html","090cd0a60cec6d4b680cc20237095f84"],["/posts/15726/index.html","d10176c1856267e1d14e293a2efa0401"],["/posts/16287dd1/index.html","847c81f094a4d0236e30cc436c9c5e3b"],["/posts/191/index.html","660b87ee4760dd4b4231d22d955ce117"],["/posts/19efde9d/index.html","ffb09ef343e18702684199445116a40b"],["/posts/2371/index.html","f4b02627dc5c5a778f964f7ac4ba366d"],["/posts/23846/index.html","a3ad19b1115f595578d9db0a4a6410c4"],["/posts/2e76c7c7/index.html","f21cef197bf2f182bb2f4906a4888ed2"],["/posts/2f5fa32a/index.html","377c9f910ae81233fc6a691c82478194"],["/posts/2f6a690e/index.html","f7d2e7b38b15a0816d6e4c5e3ed9735b"],["/posts/33570527/index.html","435c48f6be72351288475e7a24ca8a88"],["/posts/3392da79/index.html","6a1e4665cd0d3e04b454736a921072d9"],["/posts/34b7b93d/index.html","20a8ef80ed9612340d9e1fa9325d7257"],["/posts/35596/index.html","fbaab7b029fc8180959d5a850d31c4bc"],["/posts/3cddf8a6/index.html","4045aab4b5a9c48241c790bcdcd6244b"],["/posts/3fcfbf08/index.html","4f39c6ac9ef84142c12cb68d43672401"],["/posts/43dd7bdd/index.html","90edefa37a093a656cf781e93d25f291"],["/posts/455e3332/index.html","b377c2e59f31a9bf1ea778b0aefc874a"],["/posts/47778/index.html","df581510ca1eb93a614367bc433d52af"],["/posts/4b9e079c/index.html","b2def52a5c756b4244ac7bc18e552021"],["/posts/4d5ceeb7/index.html","9decb6515dc4f9bfa51cb6c27cede6b0"],["/posts/510/index.html","946a062868abef40c8013f09956e3aac"],["/posts/513217ac/index.html","d8d5ff3b5d5a78533359d3c63091efae"],["/posts/585b595c/index.html","0bc75e97b964d5e675a9a12f9bcdc447"],["/posts/60369/index.html","cefd22f7fb8978e916dd0e50d675ad5c"],["/posts/60bb74e9/index.html","b8e4c4d4e6e08b03927e1f6b5dbb9fce"],["/posts/61961/index.html","15f27cf52605f049fe239927660935a9"],["/posts/64812/index.html","3b63ea6eff88011bf87e39f34e67b924"],["/posts/712bbfa1/index.html","3205f0abbfc848fad245a163225152b0"],["/posts/745e7cfa/index.html","b01bba1fb781f5894de39655dcb44d2b"],["/posts/745ec33e/index.html","9726db0a4861e41607121758ae70bb3d"],["/posts/88dcdeb9/index.html","109fd771dae158d82525e9e8f03da038"],["/posts/8f0db47/index.html","7fb9b58891d329c8038e64f1b8af3a5e"],["/posts/91662d71/index.html","c5b6c6d72ed42e12bfa55eba812ccc6c"],["/posts/9d7faf08/index.html","9f5400de36a94a1ae16a9452f3c38493"],["/posts/b7d844c0/index.html","fd1794d962f9117ea97838ad852fcb2a"],["/posts/b8a14aa/index.html","4dad66869ab5106e4990bde145879b9f"],["/posts/c432f601/index.html","ab131e3cf348d00a802eb0d3cf9fd3ba"],["/posts/c61c8774/index.html","c3fe1f2be86420d3b98741d994ba6b85"],["/posts/ca137339/index.html","70f2436c55f1a9f86faee399dfbcb0e2"],["/posts/d0805e68/index.html","86402ae1f8c0733130504fbfc0933200"],["/posts/dc700881/index.html","04f81c7f723b78e5d256322eb85a6e12"],["/posts/dd157a56/index.html","2eae944a2b0519da571c30f0e5d82d76"],["/posts/df182d34/index.html","ff19ceafdf4bafeb3560165bcc6b1a04"],["/posts/f74f4e4d/index.html","a9e018d65647411c654e3472df417910"],["/sw-register.js","eb8c4936ae70f3d7ce5a8a7756ee46f4"],["/tags/C/index.html","03c1e5549d61f9de28cd634d12dd732a"],["/tags/CentOS-7/index.html","588330b8cf501fd159692ba25f6a1397"],["/tags/Diary/index.html","ca6f2efc1fcb7632b32e95b964b7f714"],["/tags/Diary/page/2/index.html","cc136a21a4e12bb4ec6241beb32539c0"],["/tags/Diary/page/3/index.html","0316b84678953c5bfef785b91e088753"],["/tags/Diray/index.html","c7f25f6d045da51724ade0cb83cc26f1"],["/tags/Linux/index.html","b8bf86d5af12ae1e328b5af1c6feaede"],["/tags/Linux/page/2/index.html","cc8989dd51d2167eeffac1c15dcfcea1"],["/tags/MacBookPro/index.html","88349cc2470549a4e001c42f70f26b34"],["/tags/Network/index.html","b0679f02cc7ccece4dd678c7d6cbfe33"],["/tags/Python/index.html","80eea488b272761cfda4e1cb72b6147a"],["/tags/Ubuntu/index.html","e26366e11ff4feb94e8e98fca825abb6"],["/tags/index.html","c39751707aa58323463c22fddb51bc00"],["/tags/kali/index.html","0613d7fd58c805a6bdd0947f09d7bba8"],["/tags/mac/index.html","b6f4d0f742878779eb8bc3adf76b2352"],["/tags/virtualbox/index.html","a0f02fd8193ce04bf0ad2bba8513a797"]];
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
