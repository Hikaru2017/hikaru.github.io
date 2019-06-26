/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a4fc88124a447833763346020208d11f"],["/archives/2014/03/index.html","cbb98f4ccef4dd47b75021664cc947b2"],["/archives/2014/index.html","3421a30ef23673b59d61fc17a57b24c7"],["/archives/2017/07/index.html","8acd0fa5021de0c2db89b28dff630809"],["/archives/2017/08/index.html","2e82c9b394dd4ac470881a2a3d20f44b"],["/archives/2017/10/index.html","96d57ac613a90cbab872429d9fafeb76"],["/archives/2017/index.html","6de456f296bc2795cdbacc0c71e0e6c8"],["/archives/2018/01/index.html","5343e28df7bad38890a39d5ffc7ab1e0"],["/archives/2018/02/index.html","250f563acd332ca627ecc415bd7d70b2"],["/archives/2018/03/index.html","f7066cd32c0e7e303b39def1263fb571"],["/archives/2018/04/index.html","2fc96f4828e4d9c9813ad3bfe8f4c94e"],["/archives/2018/05/index.html","b16ecbb78f4e6258e5b090d09fb821eb"],["/archives/2018/06/index.html","0d6f0a4f98cbccce6259cdfaea3cbc50"],["/archives/2018/08/index.html","f5e8c799285f2dca5df244cf9b126714"],["/archives/2018/09/index.html","4c5fcd029473a27219e0118063909cd2"],["/archives/2018/index.html","07c52a16cfdb01660dba74758064bee3"],["/archives/2018/page/2/index.html","a927430b27fc2f2240d644e1d3d894e5"],["/archives/2018/page/3/index.html","95354b62d3b8ce2e73b26702e081b825"],["/archives/2019/03/index.html","df12ba95b66f69dd1222d4676a30cb8a"],["/archives/2019/04/index.html","364a89569c9ca392a944d0d70a6bb3ea"],["/archives/2019/05/index.html","aac9a654fbb4046964735ed087de659e"],["/archives/2019/index.html","a9dffad92a778f31bacfc20fb54414e5"],["/archives/index.html","eb64a65742dffee45f13b0c178708792"],["/archives/page/2/index.html","0712f1f1b518c73d941be1b62e76b0ba"],["/archives/page/3/index.html","55e0a1d7ae1b92f2b1ebdb9c7a5f06e0"],["/archives/page/4/index.html","d960aaa9151f10941bc1f5903e48518d"],["/article/2014/03/01/从头开始/index.html","7d84a32aa6d24178decc8a6fbd99c653"],["/article/2014/03/07/惟愿无事常相见/index.html","10af5add710d30a7f3530688b49de3e2"],["/article/2017/07/06/写在前面的话/index.html","7d1a9da7058b227aa7c2604b1edf52af"],["/article/2017/07/21/那些日子你会不会舍不得/index.html","3c1bb0a1a7bebd84a82e437dae626776"],["/article/2017/08/15/vi编辑器如何对段落整体缩进/index.html","cce1dff98d236ef89db3eff82b570397"],["/article/2017/08/25/IndentationError-expected-an-indented-block/index.html","fed85604af26948c6bf775b9b3e3f1a2"],["/article/2017/08/25/Python是面向过程还是面向对象？/index.html","b4dcd4127e12256cba7c2a9499c65c5d"],["/article/2017/10/18/Linux下如何解压tar-bz2文件/index.html","18dad67f24fc97884cba69735af4de86"],["/article/2017/10/18/Ubuntu下更新sublime-text-3/index.html","db65e9e4a969bf82bad1e6d1595623d4"],["/article/2017/10/18/untitled-c-text-0x95-：对‘pthread-create’未定义的引用/index.html","c6d938a3b1a2df04ec4bdf6d2771eccf"],["/article/2018/01/22/感情论存在的价值/index.html","b7715240e53480fba55ad6beb7a97644"],["/article/2018/01/31/放弃or不放弃-this-is-a-question/index.html","7b785a63ed27e47ccadd1188d031ee79"],["/article/2018/02/08/Error-php71w-common-conflicts-with-php-common-5-4-16-43-el7-4-x86-64/index.html","1a761a55249fd6d377a77051d1b40c15"],["/article/2018/02/14/我是一个拥有好运气的人吗？/index.html","3bbc4f5126520dedef447f44a4fa8c25"],["/article/2018/02/19/论化妆的另一好处/index.html","39862e3cf0c18116e58b118906167448"],["/article/2018/02/27/tar-Child-returned-status-1/index.html","00877d24635f6d23714b0f36ec74f3b0"],["/article/2018/03/06/Edit-hostname-on-CentOS-7/index.html","2e38d9e7be5de3db8ae40172dd15f7b8"],["/article/2018/03/06/怕不是迷失了方向？/index.html","5e43105db8c753d2fd5614451be30175"],["/article/2018/03/13/KVM虚拟机备份与还原/index.html","c9ced92012927aed96ed66e20254acc0"],["/article/2018/03/13/vim如何撤销操作和恢复撤销/index.html","b519143f79bd3d69eb0601d174bde34a"],["/article/2018/03/22/迟钝还是假装/index.html","921aaf0eda145dc21ae95d2b6ca62f83"],["/article/2018/03/23/梦境与现实的纠葛/index.html","39dc4db4ecd66b232b5acef951e239b9"],["/article/2018/03/25/MacBookPro删除Steam游戏图标/index.html","8bd5444f1d4afe6e7202433b6a69668f"],["/article/2018/03/25/噩梦连连/index.html","c6eae8cdc968e70484d269d9793a7781"],["/article/2018/04/04/What’s-the-worst-thing-that-you-have-done/index.html","3b4a206180eb7486c8af324e27f905da"],["/article/2018/04/09/南柯一梦/index.html","c9d0ab9579b43fbc20ba8d4886759095"],["/article/2018/04/12/鼓掌之间的垂死挣扎/index.html","5c6684a8c3b9644a116effae87e4fa14"],["/article/2018/05/15/Ubuntu-root的默认密码/index.html","fbc26c7779e35dc481e2e34f0a7f5a3e"],["/article/2018/05/23/离开水的鱼长出翅膀了吗/index.html","4f077208357b2086d8632e918ef39ce8"],["/article/2018/06/09/Linux添加用户到组/index.html","302be9ac3da6516f481731975229c311"],["/article/2018/06/10/生性自由？/index.html","d732304898aea0e341b1c3d32357213b"],["/article/2018/08/05/安装完Kali之后的一切准备性工作/index.html","eda9c825349bca9c4d7b7d0b78d1a3d4"],["/article/2018/08/30/遥不可及的/index.html","2a2300d972981bb74670f54339160d27"],["/article/2018/09/25/窗外的云像是棉花糖/index.html","4f19e62daadf526f7c8f19f37a94e3ae"],["/article/2019/03/27/gpg-no-valid-OpenPGP-data-found-解决办法/index.html","97fff73e021db1504d87571810cb480f"],["/article/2019/04/03/Ubuntu：SSH无密码登陆/index.html","81db1feb365ecc3ad0c67f5ff58ebd65"],["/article/2019/05/13/virtualbox网络配置的血泪史/index.html","91edca7b4adfa81161a01157a361f054"],["/article/2019/05/14/SSH-Tunnel隧道/index.html","49084a2f9624c0fa0584d2c399fe013c"],["/categories/Diary/index.html","10aaa0939f538d60565389a1ab01e94d"],["/categories/Linux/index.html","42d17d71da5d39fffa7d71ff463415a0"],["/categories/index.html","c1f2d032a0039433a156c8faaa015182"],["/css/main.css","0b6c56801294cfa3a4d2a140b2fd5abd"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","40be287ff34993bcc90ff1356018eb30"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","b139e7d961f09d53dd76401f7f245ee1"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","846464c95b38142bce9a127309abaa9a"],["/page/3/index.html","d9a84534590f3ed1749f9020a68812a3"],["/page/4/index.html","8e76598bb256163dc48ff62565d74ac7"],["/sw-register.js","b6b2a178c4f1001a31186be9df8c6553"],["/tags/C/index.html","b59f815ccbe210d61949c03c53fe584f"],["/tags/CentOS-7/index.html","3d6cf5bedfabf76c454cbdde9a9a9a90"],["/tags/Diary/index.html","63bec559be0edc0638366bdb777dc41e"],["/tags/Diary/page/2/index.html","e19cf12b943a1c691e90f50beba7c3e4"],["/tags/Linux/index.html","491f0f250ba29d10b962aed4c5c73046"],["/tags/Linux/page/2/index.html","3328ebdd3bd36f579699b06ded9a31c6"],["/tags/MacBookPro/index.html","13d76c1f90c0930ada9433ca3d03a858"],["/tags/Network/index.html","0acf7ba734d18519bf08175694105b83"],["/tags/Python/index.html","30aab5e5ef72c888abba5d094d2ed01a"],["/tags/Ubuntu/index.html","5f5e7aa33bfcf6af32274002611b8782"],["/tags/index.html","67c34b8ed356d0998d6a0666dd0d0636"],["/tags/kali/index.html","b93780e6e17cdae956e490d7d3c94aec"],["/tags/virtualbox/index.html","07b5ed90960c13499d72dec3725cf8c6"]];
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
