/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","cbcbd83ae684a4ab3d14188f7d52a242"],["/archives/2014/03/index.html","7a582f1e4e3c9775aabc902efc343f6b"],["/archives/2014/index.html","aef380af12799a99af406461eb9abbc3"],["/archives/2017/07/index.html","8f3d1bd49ebb161ef53eb1ca760b9231"],["/archives/2017/08/index.html","30e4ed29f310675988e169dcaa8417ee"],["/archives/2017/10/index.html","571ee0c8970554988c1cc02d43fc9656"],["/archives/2017/index.html","f1f7563e0fc375a0e333a438e3549d54"],["/archives/2018/01/index.html","a4b3dd2963eb89e5e41432f0efe16599"],["/archives/2018/02/index.html","a675bc32c55eb2e9eba3877ba0aa8898"],["/archives/2018/03/index.html","dda1d45933aab61fc7130b8055ae9152"],["/archives/2018/04/index.html","2885d27c8c6074875635854d8b1c3d71"],["/archives/2018/05/index.html","1518c213cadc9a786ce9d332c2e44d8a"],["/archives/2018/06/index.html","48167819ceda58fecb64eec091a232a3"],["/archives/2018/08/index.html","2b1afd1f6ab7c77db0feb119ee062a2d"],["/archives/2018/09/index.html","86f5b4f098cdad512587d0c1d6c0d0fd"],["/archives/2018/index.html","53f800e0be80bfc1f79da45faa0eec81"],["/archives/2018/page/2/index.html","cb9287df2d1cfc02f1e4433d8614829c"],["/archives/2018/page/3/index.html","5c473b305de7964c786322b3377194ad"],["/archives/2019/03/index.html","882ab83a5b4b68bd1078bef21ff42d66"],["/archives/2019/04/index.html","e3d3a5a1b71612a4ac73cea66b0a671a"],["/archives/2019/05/index.html","347b03f77da6dce20a3eac45b30293d4"],["/archives/2019/06/index.html","daabca0737393b1261e90e205e57a346"],["/archives/2019/07/index.html","65e30e0822820d84527bf1af76a9f542"],["/archives/2019/index.html","bd6ecbc116a11276e05a5d4b7153d2ef"],["/archives/2020/03/index.html","13382ff01f62e5bafce3e94e44437818"],["/archives/2020/04/index.html","12e4da3d076c249d97a08e36b08cca7c"],["/archives/2020/05/index.html","dd1f705beae34455642a899b7e3845af"],["/archives/2020/07/index.html","667605e507eb351b6ba39ae051addfaf"],["/archives/2020/08/index.html","44cbe38d1db1d1014877cb2426a447ad"],["/archives/2020/09/index.html","97842e9263a95409b7b7fcdb40cd01dd"],["/archives/2020/10/index.html","a4acb6a9d9ea4d1366ed7a7afdd1a749"],["/archives/2020/index.html","c4a7c56984cbed8a4420919818b160be"],["/archives/2020/page/2/index.html","1ed013d160eb4eb2fa41677e9c933bdb"],["/archives/index.html","178622e092934c9033c04ecb13fe7744"],["/archives/page/2/index.html","7a42b01a1fa3dd874a30d86c6613b5a7"],["/archives/page/3/index.html","c3c701ffdaa73f9656877d79dd3a1889"],["/archives/page/4/index.html","9fb6eaab087eac927f4ef54fa8d20961"],["/archives/page/5/index.html","e505f85f7d30c7699f73c985590cbe6a"],["/archives/page/6/index.html","cebb3570f128d29fd29b39860baf8d86"],["/categories/Diary/index.html","d85374b4190845937bbba19f508097d1"],["/categories/Linux/index.html","318070a50fbedbecb63e386430abbca0"],["/categories/index.html","2be1f4b13f30a264ea0577bcb5f62786"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","8ad25101d1cdde2bd3b20de8bfaad2a0"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","318144a3e318e002e4f2dcb2e3039ab0"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/lib/fastclick/README.html","a000d080c08549f663cda9ba99be381f"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","7843e439d0b6cd41efec9e794d11d195"],["/page/3/index.html","25ac54bb76cb156a70343a385eb78617"],["/page/4/index.html","d105adb52843066e39f3843b514e2837"],["/page/5/index.html","d18c06115a7f0b4316b021034b91d752"],["/page/6/index.html","8b39c17c81786a3f2093d0c814c1efba"],["/posts/10252/index.html","f8dc26791cc90766be8ac37be868e8bf"],["/posts/12241/index.html","14c98a076b8ea9a04781937999a67f8d"],["/posts/1360d6db/index.html","894aa47ce00a05ddd5f01e905a994e72"],["/posts/15726/index.html","4ecabf4e874a28b0cba4a1ae2d99fa99"],["/posts/15753/index.html","af18aa8fd76316def8f0a9ea3d60c9cb"],["/posts/16287dd1/index.html","b4a86af03b0dbffdfbab31ce87394d2b"],["/posts/16625/index.html","7e933fd217a95bc6c715614c85f77deb"],["/posts/191/index.html","080d77e3c0f1f530adadf6870f29ac45"],["/posts/19efde9d/index.html","31c78e69a2cf2053435edb33bda2301a"],["/posts/22049/index.html","148f5b7bca7a3b4eab62ae003864b390"],["/posts/2371/index.html","4ecd1d368193a1309d5fcbd9a5d38db3"],["/posts/23846/index.html","07f684af6a2055c83d81bc13cab30b15"],["/posts/23847/index.html","7883e0cdaa75ec097bbc3530a78b4630"],["/posts/25480/index.html","ce4fab935d5a7c5fc19b7d7aff9b4ffc"],["/posts/2e76c7c7/index.html","6afe5a8f5f811cec6cb66d75e5148fa2"],["/posts/2f5fa32a/index.html","9fcbae196fe65bd820a380a3f0248048"],["/posts/2f6a690e/index.html","64a2f6a3f0a7e9c2ff9992aabbeab737"],["/posts/33570527/index.html","d5d76f4cd828c7d60a74454069e3c21c"],["/posts/3392da79/index.html","9416d5ac7c4b7c78f206f1bf9119ba14"],["/posts/34839/index.html","5da642fcbc72747edad6d6812c3d4760"],["/posts/34b7b93d/index.html","e5abb6dd4c3be882d06d1a3aabbdb18e"],["/posts/35596/index.html","f2a4e23f9af5c6428f1d750c6a21c421"],["/posts/3cddf8a6/index.html","c9203ce9f34c31994796a5918d287977"],["/posts/3fcfbf08/index.html","b169cb95e5a0d9d1268baec951011ad8"],["/posts/43dd7bdd/index.html","89ae6c77756067e94825daaf377c1f21"],["/posts/455e3332/index.html","a957cf04577aec5f48e1afa7eaac3c08"],["/posts/47778/index.html","2a45ef36714b8c80c047ff5a4bb4e818"],["/posts/48435/index.html","09f39927fba09005a97177ae1fbcf7ed"],["/posts/4b9e079c/index.html","6045d13138d8e79a7b9d28ff166b52d3"],["/posts/4d5ceeb7/index.html","a7ae97e2107d4889af75730c3751aed1"],["/posts/510/index.html","29b6694149e0c5f6327a26fbd42ad0cb"],["/posts/513217ac/index.html","36fc7f96b1f2f82ee0fee4f7140a2c44"],["/posts/585b595c/index.html","6980c246eae4e297f36f56ef1c317bb7"],["/posts/60369/index.html","e73df7677f869334d4bb58055791f83f"],["/posts/60bb74e9/index.html","0d0c2b39ccdc67d11425c6cad74267cb"],["/posts/61961/index.html","dad76fc5a87115b46096c84330c07e63"],["/posts/64812/index.html","a1979187dc6d9baa9e6159f125c82693"],["/posts/712bbfa1/index.html","37e51bb6051f54de678ac3c10645cc29"],["/posts/745e7cfa/index.html","c16adfa012014962428c23b77606eadf"],["/posts/745ec33e/index.html","61a9df703950895d2f453465c536f3ef"],["/posts/7668/index.html","629973d3eea56a937e54d156ddaa8c5b"],["/posts/8865/index.html","356b812bee1825fd67fddee1a5893e3e"],["/posts/88dcdeb9/index.html","d8371ca83be0f07ae1186864d86e146d"],["/posts/8f0db47/index.html","88c5e6de5ef354fe90f7d15a38ea618a"],["/posts/91662d71/index.html","5b4fe8759feb5a84fac84be8dbc9d259"],["/posts/9d7faf08/index.html","fe83b56226f3c22f294b779a4d6f3785"],["/posts/b7d844c0/index.html","b84235b197d23214fe3d01b5daf3a67b"],["/posts/b8a14aa/index.html","dafe5c8777368f2a785e754c26186b28"],["/posts/c432f601/index.html","4dd517bc15b72aff72bf2cc3d6e7f261"],["/posts/c61c8774/index.html","b7638be9de0d68bded7cd1e9eb081ccf"],["/posts/ca137339/index.html","3860035932f2e779d5886a9bcfbf63ef"],["/posts/d0805e68/index.html","b03481ca7bb09e217a18d8dec1924ffd"],["/posts/dc700881/index.html","6edddf2fc6887eb38fc4bbf5d1372644"],["/posts/dd157a56/index.html","33e544fa926376b0b4a2b43c0ef6b02e"],["/posts/df182d34/index.html","5a906f86e7cd98ff7991a3d09a20be04"],["/posts/f74f4e4d/index.html","6ca44f4021a992c56a1d7f412a8ea7a0"],["/sw-register.js","7ae22babe3821f1901797d6479144aee"],["/tags/C/index.html","329fc0e8092b4de5e3a96d9f0e10233d"],["/tags/CentOS-7/index.html","b4843cf4db24c87720cabeb62afe9606"],["/tags/DeepLearning/index.html","4de7d9222f625db5a5b65743723c39da"],["/tags/Diary/index.html","d57d10a1682227cc9ff4e2ac61399885"],["/tags/Diary/page/2/index.html","2c74f2b27c6692298b17070f070f7e72"],["/tags/Diary/page/3/index.html","8e4ed938c72f595a8ee6b560e90815d8"],["/tags/Diray/index.html","02995104124b590468c31d02d79d80b1"],["/tags/Encrypt/index.html","fc7c8e200213180d93309a545aaba402"],["/tags/Hexo/index.html","2e802b9d9145c1ba3c4b3e7bec07e238"],["/tags/Linux/index.html","694f935b0869d5668fdac161b523e421"],["/tags/Linux/page/2/index.html","961fadb6a6d7d4ba4686326260870211"],["/tags/MacBookPro/index.html","b3f468e7e55cc7578bca8b62bf36de9a"],["/tags/Music/index.html","c660d1dec0b25ea43558935dab2754e5"],["/tags/Network/index.html","f1a79525b34cc130da4ca48c93d435f2"],["/tags/Python/index.html","5e093456f44ed807279daabc69f3c976"],["/tags/Symphony/index.html","a690d09f492d07440f503017d0e6f489"],["/tags/Ubuntu/index.html","5cf729df75403165681756fb6f4914ea"],["/tags/index.html","7d930766606499872fa693a5a3fda1aa"],["/tags/kali/index.html","7d2ad1b337a96985a570d15b9ec99f3b"],["/tags/mac/index.html","b153bd7ab5295846e6e27e7853e0cfb9"],["/tags/virtualbox/index.html","b4ba11bcb462e60f5a72b41481b4e06a"]];
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
