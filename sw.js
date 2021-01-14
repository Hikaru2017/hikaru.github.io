/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","969e82b070ce7a94bf1fb16ade541be1"],["/archives/2014/03/index.html","97a0c9c81a5464b89791c22396b6dc96"],["/archives/2014/index.html","0732a05516e2581b7bce7159c8e0e243"],["/archives/2017/07/index.html","0725f3808913ac4d1b5e39f32346f073"],["/archives/2017/08/index.html","21fe5b082ef60eedef4e36fa8cfad351"],["/archives/2017/10/index.html","343e30a955d957e2608c0daca35b7a5e"],["/archives/2017/index.html","05bf448debb5d97042e4113354a0f194"],["/archives/2018/01/index.html","21e41ca91bcb8b558653b9b96ee4f91e"],["/archives/2018/02/index.html","bd4bbc7e163f321a55833bb51e7cbf78"],["/archives/2018/03/index.html","e35dd52483369742603e2d3fb5c93b5b"],["/archives/2018/04/index.html","550b4a1e260eb0664f185f8d1124fa3e"],["/archives/2018/05/index.html","9adc60e3e2f6622db0280c9aa5d3d4cb"],["/archives/2018/06/index.html","2d0e0d918df1b1ada1ef3ad9e08a1c75"],["/archives/2018/08/index.html","dffdc1cf48c797a07ed1d8f6db364a3e"],["/archives/2018/09/index.html","668adfa62a91d0459dfc3239d23defe2"],["/archives/2018/index.html","a21f9c9779ade074b1da0490bd540392"],["/archives/2018/page/2/index.html","60f12a3aef16163d1453e204ef6d527e"],["/archives/2018/page/3/index.html","78594567ff3c6f31ccd035a7beca5120"],["/archives/2019/03/index.html","b406f77429fc655085d6f0a9e8f8ded4"],["/archives/2019/04/index.html","04d9fbbdf4c8b23ed4ec8112b0be652c"],["/archives/2019/05/index.html","230cb490b098f32b9ded086de43325bf"],["/archives/2019/06/index.html","ed84fd843f33340dc2192ee179b2641f"],["/archives/2019/07/index.html","d843ad44985fcf1ade52b15c90fd85aa"],["/archives/2019/index.html","85d54770a5eca80b178c454837aff108"],["/archives/2020/03/index.html","a11a21321ffa02d495b64e96e9d99064"],["/archives/2020/10/index.html","1e980d12d4740e29cc86f90940a14810"],["/archives/2020/index.html","2fd7d110efbc3b4f0fbbf51e1804b422"],["/archives/2021/01/index.html","61f497653d52dd6370b4be9c3555f33e"],["/archives/2021/index.html","b4a8856651d5f2a253c98e848fcb7e48"],["/archives/index.html","ba337068cd8bde74dccfa60d61559fcc"],["/archives/page/2/index.html","a6df5c44d307b3dd0238c68e1e1c577b"],["/archives/page/3/index.html","ae42552d7916c9053905b7b1ca46b7fe"],["/archives/page/4/index.html","c71fea5527ecf3e1caaf40c34cb8357e"],["/archives/page/5/index.html","27564b2225baa6f124a7e9b51ee5290c"],["/categories/Diary/index.html","21b502ee7f65bf6f36887611e3a80b64"],["/categories/Linux/index.html","56bda77c991d47f942b15a5f2f0f675d"],["/categories/index.html","70f56126dbf3c21fedbb5d17992bef97"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","445ed0b163cd6fb2e0e279537fa29490"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","adc9f9cf60036aa2ba38630faca5d64b"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/lib/fastclick/README.html","39fb88bcc30adcbff36e779f18329f9e"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","c143b7a1203a6c6c2469df8aa456bf60"],["/page/3/index.html","9d9e7cad312c63f424056141c75a7ef8"],["/page/4/index.html","0f9b8836b7314c6656e93fb198a70c49"],["/page/5/index.html","e1ba0019c4945d55cb3e807685b4a3ab"],["/posts/1360d6db/index.html","cdf420fd3de43241dd9816254bd7cc25"],["/posts/15726/index.html","964c88f7694c6a2a1c181c32f13e9b8f"],["/posts/16287dd1/index.html","64099000fa602a3ae502396a1fa97ba5"],["/posts/16625/index.html","5438f5e58ec6be8040594d3e99d0045f"],["/posts/191/index.html","cc5c834412c4be77243049dc8354fd78"],["/posts/19efde9d/index.html","cf14d8862e7d553c590c441537220393"],["/posts/23846/index.html","41145642868256ae2f9c689546ee01d4"],["/posts/2e76c7c7/index.html","5af231780ce536cc05b104c10544ae05"],["/posts/2f5fa32a/index.html","96f07196d87eb01697230eec7ddad53b"],["/posts/2f6a690e/index.html","5e4f178821c1fdcedeebdea8a8d858ca"],["/posts/33570527/index.html","96080ea7d49505255718c7e48b072818"],["/posts/3392da79/index.html","e682794409b4954d8bb2dae2858ff22a"],["/posts/34b7b93d/index.html","83dd6b81282dd28a007fdb469091af52"],["/posts/3cddf8a6/index.html","e2f4dff35321b04f66375ea041981e6e"],["/posts/3fcfbf08/index.html","549a75c657913d55ab071e349d61e5b9"],["/posts/43dd7bdd/index.html","a4afe69a689991499a68132d9299789e"],["/posts/455e3332/index.html","59d925d606b0b9b35e691ec3a839f3fd"],["/posts/47778/index.html","963768b8ad5ee5f24b8a0897b71d99f4"],["/posts/4b9e079c/index.html","971465a15398c38251a84e3409515aeb"],["/posts/4d5ceeb7/index.html","ddba6e0f96cc74c162842fb717c16400"],["/posts/513217ac/index.html","6448255a7f34a4d14464c325f12e2e2f"],["/posts/53903/index.html","cde13302263620ef3d3a5df3a9b87117"],["/posts/585b595c/index.html","ecb43f23abfc4fb5248a3d0877efc944"],["/posts/60369/index.html","e68698109c513e06146787adfcbe24a7"],["/posts/60bb74e9/index.html","4b21c211732724612b6ee309e5b7d9aa"],["/posts/64812/index.html","30086a646e02a767254abaad7d43816b"],["/posts/712bbfa1/index.html","c2af018f861611332aeb4c749678b1aa"],["/posts/745e7cfa/index.html","eb4714433536114e0b05243c19e60bd0"],["/posts/745ec33e/index.html","3687d60a9039ea6e6eaac6f0fd98efd4"],["/posts/7668/index.html","3d7e2cd8fb2604f631196f60b159eecf"],["/posts/8865/index.html","917c7fbea92ad8cd8474e7170148e9a0"],["/posts/88dcdeb9/index.html","29ca8e8a7a4538f76412d342a7c1125a"],["/posts/8f0db47/index.html","a75c67a51b13eb06b1c503edefafc97d"],["/posts/91662d71/index.html","413777e62c433db43aa4a4f922ebf34a"],["/posts/9d7faf08/index.html","8252a05ceac90775104c7139cc557498"],["/posts/b7d844c0/index.html","9b560c61f678e7395688f5cf5310c6c7"],["/posts/b8a14aa/index.html","967822515a26c421c39d1c7b71c155bd"],["/posts/c432f601/index.html","eb5b372bc2b6b4389d107308f75b9771"],["/posts/c61c8774/index.html","fde8cd0d9a690b2a69b847f3febc4897"],["/posts/ca137339/index.html","c3b3c42a849802556008ba3712cb29d3"],["/posts/d0805e68/index.html","38d1c50c4b68dc7b341a5df1c9735ae8"],["/posts/dc700881/index.html","6b7dccb580da3833a3a5ddbc383b2203"],["/posts/dd157a56/index.html","58abedc6d5e28d5fc6f04e1114081824"],["/posts/df182d34/index.html","550aebeb0e5ebe590839a0f2b938f1ee"],["/posts/f74f4e4d/index.html","a8e0904112566b815486bcee2547a5f2"],["/sw-register.js","1f460225856faac5d4085d612831ed7e"],["/tags/C/index.html","38cc5d7a4d9849df41a5055bf34de8e0"],["/tags/CentOS-7/index.html","0afd21d97a82192e68696d9ee2c47028"],["/tags/DeepLearning/index.html","5ca6b3e1120c7f22253f742c9ba69380"],["/tags/Diary/index.html","00c1be6b46cbe3c8f244d59fa0364fcf"],["/tags/Diary/page/2/index.html","9561194df513fdfa69ef93b237de2e97"],["/tags/Diray/index.html","023846c88831d84b22e9409bef3e073c"],["/tags/Encrypt/index.html","c81e0c029d3ea9d54c6e58fc43d6ca65"],["/tags/Hexo/index.html","4a05275ff49079c45e612b9e13044dbb"],["/tags/Linux/index.html","b82369b588c7bdde2ca22cb1dd09690a"],["/tags/Linux/page/2/index.html","9c4f9eae4d4496f8853c8b26bdb69a92"],["/tags/MacBookPro/index.html","e9360c43cdb68c1e58880b3e1bb47fe4"],["/tags/Music/index.html","6641cbf8b7014c78453d6d2104ed0471"],["/tags/Network/index.html","bc9a9e2cbf83e37b73d7fb4f85088128"],["/tags/Python/index.html","ff41e337c35c3b73da42008a89c56b1f"],["/tags/Symphony/index.html","3cd3d793a667a39b80ce69027d7cbcbb"],["/tags/Ubuntu/index.html","baa717628e5cf694745faa8e88ad7863"],["/tags/index.html","15e6aa8e908825fe8ab3eb8c3de54b89"],["/tags/kali/index.html","d661205c49b9fb2334b519f5f5a0ad77"],["/tags/mac/index.html","d8f2ffc378bb19312e892adc3c58e871"],["/tags/virtualbox/index.html","988fd9d8ac4ddc2eaf1f466da3e9b045"]];
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
