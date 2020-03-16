/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","b3c5731cdab4e23ca3f6de38ce0e61c4"],["/archives/2014/03/index.html","6042d169ead3da0050255243294d886b"],["/archives/2014/index.html","854a13a1ab24d39859ebcaf614eab053"],["/archives/2017/07/index.html","b1fd1d6340407642a6f04323b1339474"],["/archives/2017/08/index.html","1a0b3745f27b0ab421bb3764fbdbe0ed"],["/archives/2017/10/index.html","682197a01c0670a74564b055cfae62bd"],["/archives/2017/index.html","688807aa55dcf9ec90edaa45cd7c27e6"],["/archives/2018/01/index.html","c457ca56f9a6b2f6f25a54ab437c6cb6"],["/archives/2018/02/index.html","a5b81b981e835160d96b690486d1f7fc"],["/archives/2018/03/index.html","36730adeb1c838274766b308b6c9654e"],["/archives/2018/04/index.html","0c1d4f988883d3e5274c58478457f03d"],["/archives/2018/05/index.html","cc3d3a05d0d5359d9acb2d4f966f17e3"],["/archives/2018/06/index.html","a5e7276c620987fc27958c916d1d03f6"],["/archives/2018/08/index.html","907e799d5977bf3300c045a3f0af6186"],["/archives/2018/09/index.html","d0bf7b7c6d48ba47d15bebd700a9840a"],["/archives/2018/index.html","e821138630336537518108e6e76d7c66"],["/archives/2018/page/2/index.html","17b3ad59b4fa848d35768bdd414d1225"],["/archives/2018/page/3/index.html","8275ca8819f8a6d6fe2e02f94e431c62"],["/archives/2019/03/index.html","a44e122858e249bdeb5df97720694237"],["/archives/2019/04/index.html","4e3a2a2be8a44a558b3fa1d3756b6cbd"],["/archives/2019/05/index.html","7a9a614413bbcce1be57ca1a1503918b"],["/archives/2019/06/index.html","70a96155e3ee982a5a28924a058fff15"],["/archives/2019/07/index.html","742cb7a0329cd36eea541c78e281d986"],["/archives/2019/index.html","795b2af7130f99ed7bf8724e0704234e"],["/archives/index.html","3dd9e47aa167491558b63e82f7802d17"],["/archives/page/2/index.html","86f51dca5b4089241e5b7e357adf7062"],["/archives/page/3/index.html","d69b951627cec4270428247248b1445d"],["/archives/page/4/index.html","cbe919f9176e9aacf56c89ddd31e3b2f"],["/archives/page/5/index.html","051e5ad2ee874a63449d6c261a9d22d1"],["/categories/Diary/index.html","3bbd3449501715da8483ea2fdf83961d"],["/categories/Linux/index.html","a9b54ca7d5bbfbb004c3331ad49be045"],["/categories/index.html","647525808beceb81b5acac03a9b7f027"],["/css/main.css","26d2b7777f79641960ed96e03ab17f88"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","c5d4c1680e7cff00cf47775ff104fa8f"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","4963f8c296c8a97a19020cbeb4a93117"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","95eed057da3fec0528bdfdfc4d64e333"],["/page/3/index.html","51e890de1e61eec34e0f7d1eb86fd3b4"],["/page/4/index.html","019479759ea53f52bd2e7bee1888d4f6"],["/page/5/index.html","22366b838467a84b6b0657a35652a9a7"],["/posts/1360d6db/index.html","981d5524993b59fc8f7a46efbfecd07f"],["/posts/15726/index.html","b59164baefda59f733545bfa04ca4cc6"],["/posts/16287dd1/index.html","0b8c5bb09f1feaa82447c82a887abb3a"],["/posts/191/index.html","9b287171441b67ee2ab7fe5fdf9170a4"],["/posts/19efde9d/index.html","0c327897e38730050b10043e57d26cad"],["/posts/23846/index.html","6d602951ccc29039453872af3fdac5a0"],["/posts/2e76c7c7/index.html","7c730fbb649f4eff3cda43078a879ba9"],["/posts/2f5fa32a/index.html","c7a02c5d2c1898a328a350904937b486"],["/posts/2f6a690e/index.html","b89f2943d972d94c9cd8e08f6953c467"],["/posts/33570527/index.html","3d8900cc8fc15fd349bfbc85741e7e87"],["/posts/3392da79/index.html","c1e1ace910e446a070604859cf5a42d6"],["/posts/34b7b93d/index.html","ead907ce40a377141321979778349e6a"],["/posts/39e5d274/index.html","b7a57111f3c3fa5c6b1c831f5d32174e"],["/posts/3cddf8a6/index.html","55b59b1cb74463be148c4a5bac2f273b"],["/posts/3fcfbf08/index.html","eb40b1cc7e9ba0becbf3999df9e4e3cf"],["/posts/43dd7bdd/index.html","9c2784d7bd93633db83a326dbaba628a"],["/posts/455e3332/index.html","ab9142ca970a552289ac7e85e1e61ed9"],["/posts/47778/index.html","a404cbacf6dd7989a309dddc2a45fbdc"],["/posts/4b9e079c/index.html","8f59472a45cf913a955e34395d6a1b25"],["/posts/4d5ceeb7/index.html","78ad72a02f4fa46d196236f44a8706dd"],["/posts/513217ac/index.html","89829a7bd66f929537678f4533e9d11a"],["/posts/585b595c/index.html","c804bfdfe176dcf78667c75c68ee0044"],["/posts/60bb74e9/index.html","35e0d352849cde6d6e0cce0555e26e16"],["/posts/64812/index.html","e2b9ca5d19f78c0612b43b39e7f07b3b"],["/posts/712bbfa1/index.html","5857a7b5a71cca51fcc396e1ae62cde9"],["/posts/745e7cfa/index.html","2cf1aab26a976f660888033001723db9"],["/posts/745ec33e/index.html","de3f4cb8f13896d8f9e68e0051b93701"],["/posts/88dcdeb9/index.html","faef2ddf5f8d38337bc29e0738c75768"],["/posts/8f0db47/index.html","b0bbca1646d60227f0c1d842013d19e4"],["/posts/91662d71/index.html","9f9da88686883edb097f4b00a2333404"],["/posts/9d7faf08/index.html","9b43eea05846dfca92f63272ab811a1b"],["/posts/b7d844c0/index.html","aa1c21c4a803d33e12e208640c1615e5"],["/posts/b8a14aa/index.html","e054fb75a24558bee35d5326070a5a22"],["/posts/c432f601/index.html","d33bc3bfe072c992305fbf57ab4c643e"],["/posts/c61c8774/index.html","e3cf4e2587241d2378c876b1b2f3f420"],["/posts/ca137339/index.html","91c47c342aed1ffc164e330034afb7e2"],["/posts/d0805e68/index.html","95a00135cfde81b9ce022990b1000fd5"],["/posts/dc700881/index.html","0c85f0d65c424cd98f71590d4bdd4f42"],["/posts/dd157a56/index.html","71492ae4b55ef36d56e1d74b3fb34051"],["/posts/df182d34/index.html","223ae4a53e3f11552b387e29adcd6c19"],["/posts/f74f4e4d/index.html","19d670cc487a91b2fd62fb2d301a50f7"],["/sw-register.js","ed86cfdc7109550868b527e25680ab70"],["/tags/C/index.html","f12ee3cd944eb6c559c88e21f87f8c8d"],["/tags/CentOS-7/index.html","d0ecc0380b38be5be2daacfe408bb414"],["/tags/Diary/index.html","c1ce27b641a460f6c769dc2ea7b19d98"],["/tags/Diary/page/2/index.html","dcfb0de6810d6ad6acf2bf82d1dec9ca"],["/tags/Diray/index.html","0db1052af5481e8f7a4b337b5cd57664"],["/tags/Linux/index.html","27e3a40b9b0a17c0255a9811e4867591"],["/tags/Linux/page/2/index.html","a36053f3f833c7dcef16ea8119f0a138"],["/tags/MacBookPro/index.html","84f4f12a4fd1ce37a6f5b339f22dae54"],["/tags/Network/index.html","f8cda3db244a4de6aba805291a87e0c5"],["/tags/Python/index.html","4d638b8d3e6c159c3b3c66757456cd64"],["/tags/Ubuntu/index.html","f92b89609142dd552256ca5e56b3d381"],["/tags/index.html","40a0e4a3af22b62616e6ae41ffe63625"],["/tags/kali/index.html","6b4fe8deec9156887ffb3e7d64b1c5fa"],["/tags/mac/index.html","97b33439fa0dba9eaf14604faa9435bc"],["/tags/virtualbox/index.html","378e3cb9cae40b2b7fd5b962dea67ee7"]];
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
