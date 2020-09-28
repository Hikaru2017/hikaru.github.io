/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","56400a5e376ce6b60d56879e0fb0058f"],["/archives/2014/03/index.html","5c04d522a6efefdbaa07f92dd3b245df"],["/archives/2014/index.html","af59a241d43df6736b759157d298694d"],["/archives/2017/07/index.html","d72f4c0e4fb21abca0ae9e8e1120fb39"],["/archives/2017/08/index.html","37ec9d504196d15cdd94ba4b9eaae93c"],["/archives/2017/10/index.html","033e197dbc1731c19b6eed08add8ebf5"],["/archives/2017/index.html","c1c839d0dae4d43031624ee1574fcaa5"],["/archives/2018/01/index.html","fdaea24d3664fc10cfec427a13fcd5ab"],["/archives/2018/02/index.html","1eb95818feb7bb29d288a249a154286d"],["/archives/2018/03/index.html","ec160af9564d465018cd653bd904d4c7"],["/archives/2018/04/index.html","21a4eaabd5a93f7e7bec50ed17e3a6bd"],["/archives/2018/05/index.html","32d9c369740acb02cf1bb09fd1716e27"],["/archives/2018/06/index.html","16721c15218991bb4ee3439371875493"],["/archives/2018/08/index.html","3c4989ac3d0d3596ff12831bd66fd3e1"],["/archives/2018/09/index.html","ab41a94f96d196289f123026bc96da4a"],["/archives/2018/index.html","dd940db0d009356ebb45081b781141b1"],["/archives/2018/page/2/index.html","d505dec20e82b742e19dbdbbcfd6faba"],["/archives/2018/page/3/index.html","5da16c5761c7deb1aa00fe2b736aad2b"],["/archives/2019/03/index.html","d272655f558dd65d2536bdd62973e7cb"],["/archives/2019/04/index.html","baf8fef504899d424d97e3662a455414"],["/archives/2019/05/index.html","316832b4dba96a335dc2fcb0fc19f8ee"],["/archives/2019/06/index.html","37d3c8b8b1d6dd290d38c4fac4e6a833"],["/archives/2019/07/index.html","5399e49614ca4f59e8479948c40bcc3e"],["/archives/2019/index.html","7ffbc2a6c7d7064dcceb09579c33c57d"],["/archives/2020/03/index.html","0d0c8402ac4444500180ffb05e91a94a"],["/archives/2020/04/index.html","4f152e90ac3651ef5ec50fdf77d920ba"],["/archives/2020/05/index.html","02488ce1d8f18445b55dd537b7280311"],["/archives/2020/07/index.html","5e5a3e54b44b84ec97b615662315db3d"],["/archives/2020/08/index.html","f889f065ad47c0680882fdb2b3216d8a"],["/archives/2020/09/index.html","cc79a45c81cdf9b89ca559a5d33bfc72"],["/archives/2020/index.html","adc185545608d44cb870f4cb92f5e6e3"],["/archives/index.html","d18963fe855d050ed3e29850852579c3"],["/archives/page/2/index.html","c1cba4f7a5cd8f0305249fe6565270ab"],["/archives/page/3/index.html","b1973701ca4529ea78a2e32ad3c776c4"],["/archives/page/4/index.html","79458a207a4b40973afb19e512ac8d6a"],["/archives/page/5/index.html","b195e8c88c0057f8241f86e4df5be277"],["/categories/Diary/index.html","77e215529da5a64e9986a45b7a47b3da"],["/categories/Linux/index.html","73af028ffeacab06fac45aca65f16fe6"],["/categories/index.html","c7d92906a16b59123e8e17c0a017fb55"],["/css/main.css","07ef92154ed8402ee50382374917bb6e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","88d748a1ebbf8e8fc05306d1317f44b3"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","4e603626c8e76e97010d2d0f395db2fc"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","3b10e12bca8270b3052dd158d9f54b63"],["/page/3/index.html","7deb1b297cca1a4d93361bd7254f3ee1"],["/page/4/index.html","9fa5dd0b126297947d5496bf3529d9a2"],["/page/5/index.html","e22775c0be01bd3afdee5764e36ccd45"],["/posts/10252/index.html","98a01a16dfb5a508b9d0da95588940f8"],["/posts/12241/index.html","8f59c3208a11b16420fcf67f0d466be7"],["/posts/1360d6db/index.html","aec4fe8dc1d172c83dddbdf69c0ad2e6"],["/posts/15726/index.html","8bd874ed81b2b836360016b72b6640b6"],["/posts/16287dd1/index.html","ff1be13cb26906f3214bef93c794a622"],["/posts/191/index.html","b2c36938b5680fd6bb51f43214d48634"],["/posts/19efde9d/index.html","f8b56f08c252b7f2e9e7a01d44f8e775"],["/posts/2371/index.html","68e8422785dd977411a665f45dadfc76"],["/posts/23846/index.html","e2bc789393da611603c20a52e100932d"],["/posts/2e76c7c7/index.html","27bbf91690079b7b941802eb77388f6d"],["/posts/2f5fa32a/index.html","adc7ed7d2ef97bece860c1e4b45053a9"],["/posts/2f6a690e/index.html","7e60c356f02ae8f9d4c0db8f41e1f72d"],["/posts/33570527/index.html","90af7ed23593e6d95e8b191d0c2db824"],["/posts/3392da79/index.html","b31eecb98433dcf52729386ad49bf1ae"],["/posts/34b7b93d/index.html","7aa3feed2455bf290965acc00a378274"],["/posts/35596/index.html","e25de87b949e243b7a4f44a8f45e30df"],["/posts/3cddf8a6/index.html","40609781d4502c4d2bfbfacd44ff943c"],["/posts/3fcfbf08/index.html","bdb16737b4799caff75982190ca27377"],["/posts/43dd7bdd/index.html","9f7989937618b38939b7f709ef5d80ed"],["/posts/455e3332/index.html","987fb7c798a6b8e197651427cf130e76"],["/posts/47778/index.html","a043b2aa9d2d0214fcf41d74ab69b414"],["/posts/4b9e079c/index.html","218d465e5697c6d93b4e5c66b89560a5"],["/posts/4d5ceeb7/index.html","31fa8b692ab33774885da7421c9d6dbc"],["/posts/510/index.html","220ffd53481eccde0611ecaeef7e56ea"],["/posts/513217ac/index.html","2817ef3cd95a69ea8fb4105b4d3c0703"],["/posts/585b595c/index.html","0afeec017dba9b51e455f90aafae27f6"],["/posts/60369/index.html","28f42cff26ef3e7b88b46b92261eb1e7"],["/posts/60bb74e9/index.html","96891afc1e0f7ea69d9ffff5d85b144e"],["/posts/61961/index.html","b4fcfcb0e18dd409d07986bfa77c155c"],["/posts/64812/index.html","c87f62bc65f6c8cd5f5fbb823d6c91c4"],["/posts/712bbfa1/index.html","e951aa1c62015f12d2b73e3cdae2b039"],["/posts/745e7cfa/index.html","97e8e0f65f3859c8498e1a507b8e03df"],["/posts/745ec33e/index.html","54a7585400f44e99a7f711be3ab5ff59"],["/posts/88dcdeb9/index.html","47335fbd09bf4f91660a0f9408216fdb"],["/posts/8f0db47/index.html","6a89cb0156f4b4aaeb5aef9ce29edeaa"],["/posts/91662d71/index.html","fc7cd4c127cc7eb129c944270d58b250"],["/posts/9d7faf08/index.html","9885bfa242060f2b84b700946267c690"],["/posts/b7d844c0/index.html","35a3acb129bce17100d28af4b2280bdc"],["/posts/b8a14aa/index.html","3b1bba1ec0ce192c7b78bade9936d27d"],["/posts/c432f601/index.html","118a002ca98f8885344ea056f039d5c7"],["/posts/c61c8774/index.html","7ba5ba49f1ed7296903113a65296cc98"],["/posts/ca137339/index.html","9b2eafc210ce47edf1b5dcb869d77a54"],["/posts/d0805e68/index.html","b3cacce1eccb6ac2d2e96543f3378bfa"],["/posts/dc700881/index.html","8b2ab70abb21407d483a2db27dea104b"],["/posts/dd157a56/index.html","a905f67b9716a8b6be4523c74e7c54ad"],["/posts/df182d34/index.html","3994a586d479b368898b370bc9079195"],["/posts/f74f4e4d/index.html","4a4e3a03851c288c6c0414b6a62f85ce"],["/sw-register.js","146a53db3425ad9287740b4fe10566da"],["/tags/C/index.html","5c416c84f1c4dee2d65a9a9986b2a6de"],["/tags/CentOS-7/index.html","0e367aba9e06f48fc49136d86c76afaf"],["/tags/Diary/index.html","866144e87d27ed94f0ae887821b6d5ab"],["/tags/Diary/page/2/index.html","66642cd5fff5e069e68ff49a83ee14d7"],["/tags/Diary/page/3/index.html","6d5922b046ab65037fed367f3334ef87"],["/tags/Diray/index.html","fb8a474cdf01a570bdd83941ecd0779a"],["/tags/Linux/index.html","60445680d8c8d9b914b8187c344148be"],["/tags/Linux/page/2/index.html","20881b5b1b69acd2ae93ee3f8b1a22bb"],["/tags/MacBookPro/index.html","81389c8f5f232f540923cc833ea28670"],["/tags/Network/index.html","a75507247a282103dfcaff0adefc72de"],["/tags/Python/index.html","2e25fee2d2a4a90549ccc276cef1fae7"],["/tags/Ubuntu/index.html","6f73a8f5a281ebb64e6bad69f5526deb"],["/tags/index.html","35aa8da4d2e691f488d2a88de3685ed9"],["/tags/kali/index.html","09776d50bf9efc2e3bea4cb455ddf29d"],["/tags/mac/index.html","924923b94dcc7516d4d094487d2505e5"],["/tags/virtualbox/index.html","8c9230b0820f219c84b3a9e87e906632"]];
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
