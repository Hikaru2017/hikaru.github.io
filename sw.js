/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c6f06232352aeb818de651e0f4324d7e"],["/archives/2014/03/index.html","a3eec694efef15b8136cbe83c61f96a8"],["/archives/2014/index.html","4994e57f8c17f7c05653605f7fd10d60"],["/archives/2017/07/index.html","d34605fe9b253eba27c5862d0a3dc110"],["/archives/2017/08/index.html","defde95fab75c1e3bb239867358f80d9"],["/archives/2017/10/index.html","d18216bfbd069dd93c21858387dd2f4a"],["/archives/2017/index.html","4e63a4e7e254b10e7919158f3afdbd19"],["/archives/2018/01/index.html","77e49176a0b1bf5b3b183e3109fbfa4e"],["/archives/2018/02/index.html","a0a09e05f6345e67ddcb379e5dcf1986"],["/archives/2018/03/index.html","c6263d4a7e13d914913865ac32cbbae1"],["/archives/2018/04/index.html","bd13f01c11f5c6612f4a0e1ec2938317"],["/archives/2018/05/index.html","8f6a6766f355ace026132a41f2bdb138"],["/archives/2018/06/index.html","dae045af854e71fb66bf357b3b924521"],["/archives/2018/08/index.html","e245351b5d4977438968d5579ae66a09"],["/archives/2018/09/index.html","ef631301d5ecca23e97d6bd42612630a"],["/archives/2018/index.html","2ac06298871af63ac2d453a7846454f2"],["/archives/2018/page/2/index.html","eef947d48f75ca052730a6973a875b1c"],["/archives/2018/page/3/index.html","2ed3217b0d2c0de974823385e83b8525"],["/archives/2019/03/index.html","59f78212c29cad513b9c6a4b98f012be"],["/archives/2019/04/index.html","8e1d2d8ce3f473b5bef14bf530ab10cc"],["/archives/2019/05/index.html","6563ae8d0c847b303a656cd61bacef21"],["/archives/2019/06/index.html","3696afdf1a901579a751e4b909d35c84"],["/archives/2019/07/index.html","fbad57ad28e92b1694d09621cf6ae583"],["/archives/2019/index.html","47a8dfab05c6f1dca03d9b56e9940e45"],["/archives/2020/03/index.html","71bbf75ed29fbde2f2d1a1afe50c9d65"],["/archives/2020/10/index.html","787059a27246e8c25d84d93d668f0087"],["/archives/2020/index.html","6a2ae10459abd9aecf380663ae08c11d"],["/archives/2021/01/index.html","e4e07f2849a26cc6e83c8e6cba7605db"],["/archives/2021/04/index.html","8a169a09091df9b794afa7b63286eac4"],["/archives/2021/06/index.html","49d9a0e62c1f1c2e3b65a5cc7e7ea516"],["/archives/2021/index.html","486059312ebd9c37c03aa0869baf0bb6"],["/archives/index.html","d517caf749da1fc771f77b62f8d02a05"],["/archives/page/2/index.html","5d21de76aa835c4e7f1b7f5392ab9a03"],["/archives/page/3/index.html","9ce5ab1071a225745f3dd766f7fa6d1f"],["/archives/page/4/index.html","5acc91df49974334253ff216507db9ee"],["/archives/page/5/index.html","e07ea0e7ca51edcd9ed0e983402d48ba"],["/categories/Diary/index.html","a50b7bbb8e4c71ed689733c7dd72d2eb"],["/categories/Linux/index.html","3ce6cf9e5de968a6be10fd0ca6d18d6a"],["/categories/index.html","e94fe894c66d5827b444bbe260749901"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","996a1542b0a921630b3d97d459d2958f"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","0a6061c9fb56e38ae73ca78160f1e1f8"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/lib/fastclick/README.html","9aa7783ef507b459132d34975b2e8287"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f783a35fc020b8e52dd10a1e43c9344b"],["/page/3/index.html","6941a5cc4e170774e8bb235de7e9de3c"],["/page/4/index.html","c007453a6e6d60922987ed53f9bc5160"],["/page/5/index.html","45062f628f642d42744b297f024eb80f"],["/posts/13130/index.html","1ee2e3756a89acfebaaff8178a8cfc09"],["/posts/1360d6db/index.html","2951b7904c64ab15a8b402f1d8e138f7"],["/posts/15726/index.html","a2e42343b1995f870a90da8483e7537a"],["/posts/16287dd1/index.html","88bf2f900a6e3613ff8071f38c983252"],["/posts/16625/index.html","c7b732a526d2443d664402cdb8459b25"],["/posts/191/index.html","032736a05e1cba765c9e6f1f6b556790"],["/posts/19efde9d/index.html","1eb69421a8abb2ba4b70c80ef03f2d7c"],["/posts/23846/index.html","07527c413882790cf6c7c95048e82c05"],["/posts/2e76c7c7/index.html","b45198525f0ea87773ffc5892f6f11ff"],["/posts/2f5fa32a/index.html","f12a206d319efd96bd86bd3f61ffe2f7"],["/posts/2f6a690e/index.html","1012dbc994d9c67649570fc3100d89d4"],["/posts/33570527/index.html","102c6d6ccdb234c94ad63a2e63d09337"],["/posts/3392da79/index.html","11f51eb05e3a2e3aae3a734c3e325439"],["/posts/34b7b93d/index.html","638a4865fc2828d66e9524acd66bc87d"],["/posts/3cddf8a6/index.html","7e817644e3781038858b2e300114e06a"],["/posts/3fcfbf08/index.html","456ae23bfdc2b0800c0810cbd27593fe"],["/posts/43dd7bdd/index.html","666f818254a4385a338738d8f206d3f4"],["/posts/45315/index.html","829c89be9404ed87446092e94208993b"],["/posts/455e3332/index.html","bed3a9cd811ef7c9f0b0fb07db6a61ea"],["/posts/47778/index.html","a28febb8e840420d8b2384a4e026c48a"],["/posts/47863/index.html","ce78b6ec7ed65c83a1c93fc746e16ce9"],["/posts/4b9e079c/index.html","3afefc0493083be72d9927428ec0734f"],["/posts/4d5ceeb7/index.html","c21c8121080d749bb0512a391a4ba33d"],["/posts/513217ac/index.html","f7d9126ff706f7866d80f50ede842fbb"],["/posts/57204/index.html","6d8d7729c61ad6c77c65b7c27d25c3e1"],["/posts/585b595c/index.html","2c30fa8b81ba6d52a72a572d0ef80720"],["/posts/60369/index.html","f3044bcfdbdbedf43f6a4f68492316ff"],["/posts/60bb74e9/index.html","88ef2771aae746545a7e6dfe23b6d644"],["/posts/64812/index.html","08b6da4b772a86ce8ef7fc5ed39985b3"],["/posts/712bbfa1/index.html","5db37812b0642fc7393a0447296d3bac"],["/posts/745e7cfa/index.html","3a3caa45d12e29e504056ef79c376967"],["/posts/745ec33e/index.html","665fa09e16a51e4423ae4b10bc14e9df"],["/posts/7668/index.html","e36c15f393d55ffa93b725e7fcc3c300"],["/posts/8865/index.html","f4ac0a247420b7e57d6e1a1a3fa0f138"],["/posts/88dcdeb9/index.html","c1cafb5d97491ec53ac74d313443d5ac"],["/posts/8f0db47/index.html","1740eb78328bfb46228c472993081d50"],["/posts/91662d71/index.html","a53c94d081c8912e5f232e40ae43b3b5"],["/posts/9d7faf08/index.html","2ff01e46b697394b9093d0599912daed"],["/posts/b7d844c0/index.html","8045dc9ab6c0beddd4e382c0a1a01b12"],["/posts/b8a14aa/index.html","09af762710b888bc1c77c8227f2cde83"],["/posts/c432f601/index.html","7638e30298b33b28714db3fe36a6e1dd"],["/posts/c61c8774/index.html","f71c7c76b4713e0126f89603f75745e1"],["/posts/ca137339/index.html","67c0fa3f839da36efdff6e61e44f089a"],["/posts/d0805e68/index.html","55b99a9107447db7f339fc3b778b5290"],["/posts/dc700881/index.html","a43e2d0db62488961f0f170c6cfc5f13"],["/posts/dd157a56/index.html","8cbd02661d163ecbf171f062f771cd7b"],["/posts/df182d34/index.html","2a8de4d66d05f093f247c4d697ba7a08"],["/posts/f74f4e4d/index.html","361573272c6d1ac2991b725218c72492"],["/sw-register.js","6d5c6b1055e1de6583da4e7be9694350"],["/tags/C/index.html","0322fb8b3fd788bc505678444eedb3b8"],["/tags/CentOS-7/index.html","8d6ae9e724a97544a16e5789ac26391c"],["/tags/DeepLearning/index.html","678aeea335686fb2cce2f94b1be10e45"],["/tags/Diary/index.html","c455e6e232d3626dfd71c458620a11a3"],["/tags/Diary/page/2/index.html","e97fb8d369d6c31cf6833972c920d220"],["/tags/Diary/page/3/index.html","6045b60493b4600fb10d775be2845250"],["/tags/Diray/index.html","04a883a02c56d39e5efa00f2ab786eaa"],["/tags/Encrypt/index.html","5272a9c37628e4871c023d336870fc1b"],["/tags/Hexo/index.html","77dfd12f0ba241746f704b49a87babf6"],["/tags/Linux/index.html","5f7d403f88b3f8eea37eeb65593c26ef"],["/tags/Linux/page/2/index.html","aa4ee0faf6ac745d06ecf36713775932"],["/tags/MacBookPro/index.html","eb2461ba976685a4501d33a527eb27dd"],["/tags/Music/index.html","d030a3d57dfa77d6d23bac6c705aaf83"],["/tags/Network/index.html","6cb415dbbb5060a6567607ac6dcb26e0"],["/tags/Python/index.html","8e49c7bc277a062e00cb9147bfdf9c47"],["/tags/Symphony/index.html","fe68c48f30fb68d90608e78a92111189"],["/tags/Ubuntu/index.html","74edb9c1fd7e1c707773f6c93efdde0b"],["/tags/index.html","af300e58e8e6210d327711388758f561"],["/tags/kali/index.html","1482104b27743ef3f6e15eaaa35c70d3"],["/tags/mac/index.html","0f5fe25b87bce8983c16061cc3e005e1"],["/tags/virtualbox/index.html","176967feb66f3df88d9155be11f00689"]];
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
