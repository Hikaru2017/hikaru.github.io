/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","0960d0be2a0deb7afd38d07aea68d7fa"],["/archives/2014/03/index.html","0e6ad52958994f5fe2003d2ec3455328"],["/archives/2014/index.html","930969acd8c8d534abf1d5e338fb6c51"],["/archives/2017/07/index.html","117e0ca304eb3eb70400dcd16ff51278"],["/archives/2017/08/index.html","3d69fbd8100a530e9c1e4f9fab521565"],["/archives/2017/10/index.html","43015200f8698edf318ef58227b33738"],["/archives/2017/index.html","afdf6abff0cc4ef8f890011692ed2985"],["/archives/2018/01/index.html","9e1b63252460021692e6970dac6a0691"],["/archives/2018/02/index.html","46fc88352af52844c27c15411e121bcc"],["/archives/2018/03/index.html","1c675b4afaa727fd1003d62c8351b67f"],["/archives/2018/04/index.html","1b278c1ba64f69d6aaf55a6469341e8f"],["/archives/2018/05/index.html","e0f6b51f228c315fb6f22910bf93c25b"],["/archives/2018/06/index.html","52cd0ceb08f6782c7f8b56b30655098c"],["/archives/2018/08/index.html","9acec9d9b44760830ada18bf9d439ae2"],["/archives/2018/09/index.html","ed6a0b504be4be35b9a712142a8313c8"],["/archives/2018/index.html","0726b5916ec1b3a9c921a8b4e8b6eefc"],["/archives/2018/page/2/index.html","e9561bba9d0fc0ad620ed787d5f4d924"],["/archives/2018/page/3/index.html","3117d7a542cd935f33b73a04fd3c442c"],["/archives/2019/03/index.html","e9954a6121d6c0e064152d87715c7a82"],["/archives/2019/04/index.html","1d28b61ae8e2423bfef897d532712be4"],["/archives/2019/05/index.html","62278187f230fa1544252f922a0f37bc"],["/archives/2019/06/index.html","3e6a30550ca40793d67decbdafe9c489"],["/archives/2019/07/index.html","cf48dba64c23550110368839120fc1d4"],["/archives/2019/index.html","5e810aca5b0138b07b9e7112dd0accc8"],["/archives/2020/03/index.html","ba9fbb0956ffa53a333669e0033b37de"],["/archives/2020/10/index.html","09a2dd99a0c5888ca8ebfc6df40da303"],["/archives/2020/index.html","65a8fee24d399a8a6ccfdecc294690c4"],["/archives/2021/01/index.html","c92886767c4b64fb7fced27f23f8252b"],["/archives/2021/04/index.html","45831277f8c085ee519c030d2629f4de"],["/archives/2021/index.html","4a4dfde709ab4c88c113623c7cd47575"],["/archives/index.html","7254e396b7a97a5ea094e277cf5e4e98"],["/archives/page/2/index.html","fa56e01f1287682ac09db73dfae49b73"],["/archives/page/3/index.html","e0d0787b0bc46ae6d94b80e0b75cdba1"],["/archives/page/4/index.html","2ad682da35cc0f45067911926fa4271b"],["/archives/page/5/index.html","bbf9c4a4f2bcd6ddc571041aec216cc2"],["/categories/Diary/index.html","e803b68012643251b6c2efeef2b671b5"],["/categories/Linux/index.html","fd65bc97a2df77efdf87d249a8fd1ec0"],["/categories/index.html","4c84fdac4cdd464eef872170e110b4ee"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","64ad9ef75a96d870f66a9661504ca48c"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","b484e2558e5143d0528ebc2498d60957"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/lib/fastclick/README.html","69ab3672358a2965aa448beb81f6a749"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","b454e80536b759452f1ae5c4e0ace22c"],["/page/3/index.html","05e9b6aabbcd88a613926652e2197e9f"],["/page/4/index.html","4bce3b873112157b732e2a86ada67c0e"],["/page/5/index.html","c0b1a30be4e2a56dec7bf127c0f4bb7b"],["/posts/13130/index.html","e7e8c615f1c50e943527f7bdbb46e473"],["/posts/1360d6db/index.html","b44f1863693aafd22afa033ac8e4224f"],["/posts/15726/index.html","697ef0bf2f6b3fa9a69536de4609bc06"],["/posts/16287dd1/index.html","4cdbf394cb498d15a992209ec3083df8"],["/posts/16625/index.html","95d865f2a3e1e29612a3cd26215ed39c"],["/posts/191/index.html","b7bd8b92d45b6061c54503206338c37f"],["/posts/19efde9d/index.html","1438d7841b27cd49d2077a01e11773d8"],["/posts/23846/index.html","251842c2c14114caa0c4126f2e6552a5"],["/posts/2e76c7c7/index.html","6ea110c1a37f6068c20515f56ae62d6f"],["/posts/2f5fa32a/index.html","1e6b2e3a973f0b1e03748aabfc16cbd2"],["/posts/2f6a690e/index.html","2e602a4a1e6782e32c9a06500e87956c"],["/posts/33570527/index.html","701568ef6a90908d483d7e8b8b97d39a"],["/posts/3392da79/index.html","a4c182b301378daf8c8d0a1c1ec678db"],["/posts/34b7b93d/index.html","f1939f188792dc65e75f26f21cca29b7"],["/posts/3cddf8a6/index.html","c7ca18bdbbc99deff71d587fe301de13"],["/posts/3fcfbf08/index.html","13130d7e163ce993f22183beaabe4190"],["/posts/43dd7bdd/index.html","aef63a97d223383e66d3ae9d7c5237f6"],["/posts/455e3332/index.html","49fc988f5ee9fd6fc91fd944a0531b68"],["/posts/47778/index.html","61258398ba3bbc7674cb126a19e3f6bf"],["/posts/47863/index.html","46037361f41e14e40a2c08942e8ef63f"],["/posts/4b9e079c/index.html","e0fd86d8f7906b4a136dc7291cc74fff"],["/posts/4d5ceeb7/index.html","30a8a46bc5469ee0356ba0f99e514182"],["/posts/513217ac/index.html","ecdb917f98da4d4e5242e93d1f157b8f"],["/posts/585b595c/index.html","151c5c3c1932204074e20f992199e2c6"],["/posts/60369/index.html","81b87f5fba353229a9c3c3e6f6280afe"],["/posts/60bb74e9/index.html","d3a9e2e52a6c8be28f728d66b442e458"],["/posts/64812/index.html","bf59220e6fea01a379b3505900e5c6e0"],["/posts/712bbfa1/index.html","b69b0817552c27531e88c9ca4b881905"],["/posts/745e7cfa/index.html","5015fcba04edf74c9edba49b9ea7411c"],["/posts/745ec33e/index.html","b5c35602d6674010a023c7543ccf259d"],["/posts/7668/index.html","6f54c224af810bfaa1242760a0414a01"],["/posts/8865/index.html","e964e51a1e437a5a956997cef8521bad"],["/posts/88dcdeb9/index.html","40cef9ba7753ffe2b20f9c8ca0cb40c7"],["/posts/8f0db47/index.html","7ea694cc4a0f411772d4f566cac68216"],["/posts/91662d71/index.html","70ac46ba86748f9fc888c623722aa6e9"],["/posts/9d7faf08/index.html","605b7f1b196de7c4b7eeabb4c6c8d198"],["/posts/b7d844c0/index.html","d7229dceeded0b8b6be0a9a0716ead83"],["/posts/b8a14aa/index.html","1506397b4608fde747f2cdd458648bca"],["/posts/c432f601/index.html","55c332c6a6139e1747e802927b8352b7"],["/posts/c61c8774/index.html","40476fa2c3f57d5a667a57f20db98b88"],["/posts/ca137339/index.html","bbfa6b8f0d311b1e152d91957091bdd1"],["/posts/d0805e68/index.html","748dcfb34507c16759b3ec36472aba81"],["/posts/dc700881/index.html","8b8a61a19988df389053694257735c0e"],["/posts/dd157a56/index.html","518e13f57cb1f6886dd28fd54a0854d4"],["/posts/df182d34/index.html","397fc0e6786eba60a1b3702f61cd1fc2"],["/posts/f74f4e4d/index.html","50a3365302e5bb0e48796146037f688c"],["/sw-register.js","ad7ffd7434c20c3549c685a794003129"],["/tags/C/index.html","e7c096e51ec009d95d55b85767e7d41f"],["/tags/CentOS-7/index.html","bf606657defd07da20c0ee736c01a427"],["/tags/DeepLearning/index.html","9ea37048faa3994d07ea3d38741f0c8e"],["/tags/Diary/index.html","c3b4d3b07ab32466698e7d77e2c7df17"],["/tags/Diary/page/2/index.html","9585913bb1e87f9e89b289a7f43ed12d"],["/tags/Diary/page/3/index.html","e8f8089a8d75d70e691dd4cf14fdd467"],["/tags/Diray/index.html","147d8c59d6fa202dc42c03d0fb492f34"],["/tags/Encrypt/index.html","405a66c444b5ecb63d8d75fce45d5fa2"],["/tags/Hexo/index.html","42cf9cfc58d63e4043bbc1685e0c222c"],["/tags/Linux/index.html","04d6ae362fb6f7c6a8539b3314c986a6"],["/tags/Linux/page/2/index.html","74958ee2e324621dc709d6bef5ea78f5"],["/tags/MacBookPro/index.html","7f5e88c9d1056f881bf36e4e5f0d7d75"],["/tags/Music/index.html","b813d6a5eae027282df4f173314bce27"],["/tags/Network/index.html","8c83cbe00fbb7431f6056fb910f65202"],["/tags/Python/index.html","1638e21fde561e5ad63378ce4ab5486a"],["/tags/Symphony/index.html","2d1e69ba3de5bcd4b03093392060f4fe"],["/tags/Ubuntu/index.html","350097b9f0c2c5c3ae7612d73184e1e9"],["/tags/index.html","9b33cea4b9da6e49d0df2db5813de33d"],["/tags/kali/index.html","19d163e2096251c3052890ce1e2bf099"],["/tags/mac/index.html","d7ebbc3cbcddef5f690eda72a66ce0b0"],["/tags/virtualbox/index.html","cf68ea5b05a1be0457f807de97b3919d"]];
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
