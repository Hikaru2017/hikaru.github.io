/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","9ad79199f518ac6a5c1d4568801449e4"],["/archives/2014/03/index.html","6c4444fa7b163e6d95201323c40afee6"],["/archives/2014/index.html","1cdc1121878b51c4791da4c787356d56"],["/archives/2017/07/index.html","4b14e4ddf0fc03055a0d33655e4a9dbd"],["/archives/2017/08/index.html","8b2466c99c2162f3c0b1a0b3db03aa52"],["/archives/2017/10/index.html","211c91bf49e0eda3ba0b0b26c0f96955"],["/archives/2017/index.html","d40005a495b04f9f3126accd756a4a7a"],["/archives/2018/01/index.html","beab5509a738527eab86752763a32287"],["/archives/2018/02/index.html","7c1fc5d541ea5aebba5415babd2a2010"],["/archives/2018/03/index.html","653c4a121ac5f86d0587f414e859ecdf"],["/archives/2018/04/index.html","bfb4a6f4a7ea6144ddcfe57bda0657f8"],["/archives/2018/05/index.html","1d6f062d55de31f322e13993aa6019ee"],["/archives/2018/06/index.html","0ac3ded916a73dc27afbd8ab8638855f"],["/archives/2018/08/index.html","f32ce6241fea3e35cb761f15d05d3f83"],["/archives/2018/09/index.html","8539ca6274ecdc123face96fdf02c86e"],["/archives/2018/index.html","4abfd8377d319237a52194fbca3c64b6"],["/archives/2018/page/2/index.html","b40332350682a835ab97dad703a4fb3f"],["/archives/2018/page/3/index.html","8d4cebbea24622d88be161b1a083bdcc"],["/archives/2019/03/index.html","5565bddf9866a1e2b0f0e31893a84a68"],["/archives/2019/04/index.html","f97e10960e4c8cd5096baf75e04cdfff"],["/archives/2019/05/index.html","b409ca605ff8c02f3bfabdead916ab14"],["/archives/2019/06/index.html","4d36e09d62f1fd3c2534b7485bde07e9"],["/archives/2019/07/index.html","f151c532dc01bb931fa0932fcc73df6a"],["/archives/2019/index.html","6aefd65aec939d9d1d996e809c82f10b"],["/archives/2020/03/index.html","9b485dec90e2bda4fe700a4c2a0410eb"],["/archives/2020/04/index.html","cbb6723a849aadf4344491f8dad0c27a"],["/archives/2020/05/index.html","105365ddaa8e9bf622faa16f17735ed2"],["/archives/2020/07/index.html","08a7d975068cfd73df5e2a1d87b12af3"],["/archives/2020/08/index.html","7ec2bd74bd42340ed8dc15b4347109ad"],["/archives/2020/09/index.html","bf5db93d34f759bf81d95f2a5801cdf0"],["/archives/2020/index.html","8a12060af5467c88a1ea12898864a818"],["/archives/index.html","d4b24e29c5f6c9c136f9607f074b2af9"],["/archives/page/2/index.html","6a0da84fb9b45a38b26e4ba0b22beefd"],["/archives/page/3/index.html","87d8668532c805a1cb61f4d79aac4b33"],["/archives/page/4/index.html","2bbcb7874af7d2bcfc04549ff3dd5b9d"],["/archives/page/5/index.html","c55c75e21a8d7c7f5dd3df06a4d2f01a"],["/categories/Diary/index.html","81fd9c989c4f3538484bd8529b775264"],["/categories/Linux/index.html","4211b0c7b690d0d715c73e2a7b2f1359"],["/categories/index.html","f9fc03861d5e54dc02d95e6e81e790a7"],["/css/main.css","564912b142eff36a6844de24bd7cdd69"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","fff8ce7a9fa31f879d93962d4a7e76ec"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","79e739ce4f64123bf4f638b9a537ccc9"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","7fd0627d46640dfef8f01e65fd0fec1f"],["/page/3/index.html","76f5bed22062cf7e22eef7266eff0b45"],["/page/4/index.html","2a396e574f4e44546ff538dac35a7704"],["/page/5/index.html","766936a679b2f6a63b74d914dc01438a"],["/posts/10252/index.html","ff2f04c733a367d50050512478225620"],["/posts/12241/index.html","bdeeff2dc28aa4380211fd8c141c7f51"],["/posts/1360d6db/index.html","4cf593a0b111d6513c730a0e3b56e794"],["/posts/15726/index.html","73e140d07f3421d23304e14362ba171a"],["/posts/16287dd1/index.html","219fb48949f07b644558b045300ddddb"],["/posts/191/index.html","c127a3efe8f3cc68f0fe55161b4a9217"],["/posts/19efde9d/index.html","62b2336dc49c3b22d162042e22c923f7"],["/posts/2371/index.html","00e597cf41a48fe9caaefdc2689fada2"],["/posts/23846/index.html","303a2bd0309cafece7240b279beda87e"],["/posts/2e76c7c7/index.html","7a4546dd74cf005f990dd9cf1b3a6a7c"],["/posts/2f5fa32a/index.html","8ddb375275e5564210ba2ca6e158dbe4"],["/posts/2f6a690e/index.html","e5e6c4af89b5ac44eb581c5c58a009b6"],["/posts/33570527/index.html","1026bb5f09377d1c3cb7b64c6cbf62da"],["/posts/3392da79/index.html","e61cf986b0b3567f9c066aeb0db9ce5e"],["/posts/34b7b93d/index.html","ac98359641bbbf8ebdafb012d1cdd199"],["/posts/35596/index.html","d64e2073366bc2dc5fcea51c39dce9ed"],["/posts/3cddf8a6/index.html","97a67d70808729f6f13183fa54b9be58"],["/posts/3fcfbf08/index.html","ff4d691f94613cb504bf809c91aeb809"],["/posts/43dd7bdd/index.html","3ced6932d5004072fa66cfdc874b81e0"],["/posts/455e3332/index.html","5157b3b5bc73988948f2069863f81da6"],["/posts/47778/index.html","7582efec0a9e4ce0b951de331ffc89ce"],["/posts/4b9e079c/index.html","8cfe2d528e0505cd29ffe34da7f39ee9"],["/posts/4d5ceeb7/index.html","a424f83c18eae3a3f3d518d81ebc9edd"],["/posts/510/index.html","7987786f8d122570c3060228bce72a39"],["/posts/513217ac/index.html","d394ad805db1b60e4016303b39f71ead"],["/posts/585b595c/index.html","7f37546a4bc17dcedc2e48643e1c31e4"],["/posts/60369/index.html","860d72500d29b46ec2c0bdd069074da5"],["/posts/60bb74e9/index.html","5760878cea9b8cb42ee6c36e2b97d972"],["/posts/61961/index.html","87c6b15530d357c186c929fbfdd8396e"],["/posts/64812/index.html","3e7de8a94cd46f8cc597e299485b5343"],["/posts/712bbfa1/index.html","f3f096cd7c9ad2f50c429ead0ea94401"],["/posts/745e7cfa/index.html","e858d4c879c47314c25b7edb6624028c"],["/posts/745ec33e/index.html","1c67b623323a80c8fee19c7156454f7d"],["/posts/88dcdeb9/index.html","19019e60cc5abd56371e1b5544380395"],["/posts/8f0db47/index.html","36b20ed9cf8476ebfe3327c59203cd3c"],["/posts/91662d71/index.html","b7116bf671bbeef04af084668d43b6e2"],["/posts/9d7faf08/index.html","4502a48037109619f3754a44c7936490"],["/posts/b7d844c0/index.html","74dd0a4873f7555d22ba51e419deb5f1"],["/posts/b8a14aa/index.html","d499fb043def79b24c4de382ae078a5d"],["/posts/c432f601/index.html","7cf1680d7303c696b79ec5956a261328"],["/posts/c61c8774/index.html","a98d1bdcec1c819ac08a116cb2ea1728"],["/posts/ca137339/index.html","e96948929fc59d176dd75316528eaff0"],["/posts/d0805e68/index.html","629f58ac3a79e4ecbce1d7236a5e31f1"],["/posts/dc700881/index.html","3dcbf07fe818b80c34b8a0aa86a925e7"],["/posts/dd157a56/index.html","9ccdbea41533c655467f050687644db9"],["/posts/df182d34/index.html","33be4e7f4e89ec48498e8c1286b3dc3b"],["/posts/f74f4e4d/index.html","06851ee642eccb70725d61e583ecdb70"],["/sw-register.js","b053990c5476abe5afc641d8e96ca736"],["/tags/C/index.html","61419958ae3a512fe90f853716360643"],["/tags/CentOS-7/index.html","b95ee0f1a763fa71d6fa2278ab52006e"],["/tags/Diary/index.html","7e5ee97ed9a7464bc7a3bf7e1746069b"],["/tags/Diary/page/2/index.html","1412c60254e5031bb467202da8e4dd10"],["/tags/Diray/index.html","47fd2af470388b8d39c02b3672835a33"],["/tags/Linux/index.html","f062e1ada30f1040096b0c819bb4ad6f"],["/tags/Linux/page/2/index.html","1c76a44221cba554eec84b8ea18d172d"],["/tags/MacBookPro/index.html","51f9e6619d2e8fee8221ae0cdd3fb892"],["/tags/Network/index.html","9ecb325750cdacd5f864c871f299f366"],["/tags/Python/index.html","0055a91d94041657c2a44706e156e5c5"],["/tags/Ubuntu/index.html","fabb030258b68b4ac4d0b2595fa49465"],["/tags/index.html","390580a5f875209dd9e4c27e2529daef"],["/tags/kali/index.html","c9cfa7e41f8a2dc2ed7bfcdb14e60953"],["/tags/mac/index.html","a529f3669104a580f2f4a21fc3071843"],["/tags/virtualbox/index.html","4274e5ad6d7a2af9306a23e1f70e54d8"]];
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
