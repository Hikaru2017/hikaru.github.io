/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","836fc313a7bf40e105d70dcb58d03fbe"],["/archives/2014/03/index.html","c6ee9cb8d42332c4f8caa9c500b8b913"],["/archives/2014/index.html","99277935b709b2107ab2046d64fc362d"],["/archives/2017/07/index.html","ab0578cd4603f49c184706ca1b4b6378"],["/archives/2017/08/index.html","8181c56f685d80d0ba6d6c95c5c3605f"],["/archives/2017/10/index.html","464a41951b84cb20c30be00d873c668e"],["/archives/2017/index.html","ed8da72763b624359130d34c3d588f8e"],["/archives/2018/01/index.html","72a87bdea90a5488ce210f61477fb802"],["/archives/2018/02/index.html","58095124c461fcf6a06dba7d0a808013"],["/archives/2018/03/index.html","2fd3ca54cee839bffad7ca7dd4f49453"],["/archives/2018/04/index.html","938756df1c311ad6db0fe5448c796bfa"],["/archives/2018/05/index.html","8e580e1e7b960bd313d5ba3f3e75ca2e"],["/archives/2018/06/index.html","573db5c5731e601c26c7e344ee3423bd"],["/archives/2018/08/index.html","3b60b5964407fd01ef3fe4271e1dc9ab"],["/archives/2018/09/index.html","f014aa53e2eafccdeb7c5e988d6fd662"],["/archives/2018/index.html","1ca9c14301af34b045f7ee072ea950a1"],["/archives/2018/page/2/index.html","6d829f2419c9f70663525ebe612daf3d"],["/archives/2018/page/3/index.html","540e7f3094e5603fc4ea03751f751288"],["/archives/2019/03/index.html","09faabc67b10bc9952cee73b45af93c9"],["/archives/2019/04/index.html","b1264202548aeaab255080aecdc32f86"],["/archives/2019/05/index.html","73616f374fc49a952b163c68f5c27e22"],["/archives/2019/06/index.html","5428c66c1fba0e5bc49c15b194ba80b8"],["/archives/2019/07/index.html","562ff5cdc5aa73c0f979071491a0c6e9"],["/archives/2019/index.html","8374b739b1abe2ad8b6f04544b6b15e3"],["/archives/2020/03/index.html","d0a114a512a5aa6001632455503607c5"],["/archives/2020/10/index.html","ea721b85555ecb67503accd4ff21975a"],["/archives/2020/index.html","e723d2650f8a769cac7b8349c759a52b"],["/archives/2021/01/index.html","19dcf287eb3e92e1556c016eeca9627f"],["/archives/2021/04/index.html","00f9a7c91a0985a6f447a1e1b5fd7845"],["/archives/2021/06/index.html","423cadafe94e8230c08c54e84142f298"],["/archives/2021/index.html","f1dc21e9ef325186901ba15bf32afe06"],["/archives/index.html","45842e63e4ee056034796a82920d0641"],["/archives/page/2/index.html","a09cce80cf473bc6aabe1564686b7562"],["/archives/page/3/index.html","c4bad17cf04fd7dceedbc9fb07147b12"],["/archives/page/4/index.html","20c44b6a885384f4ce21a68e3f964d24"],["/archives/page/5/index.html","5857cdde0de19b5f7e8871d68dd3ec4e"],["/categories/Diary/index.html","3b182b1b7060fe0c1637ebda3309b43b"],["/categories/Linux/index.html","b15a56ea05413f331f8707676367025d"],["/categories/index.html","d45c5cb4eebc41d90112408cd52ca7b1"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","4657e54a43520319ab8d114c3e970e27"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","10e008f9439d452a380badb80fa3e342"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/lib/fastclick/README.html","4ec1759809c72e6aae64c37722fecaa2"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","ccf5b6bad7561b45499f823113fdd614"],["/page/3/index.html","aa1cf9b0974d7c7f2f1c8436990c7e9f"],["/page/4/index.html","ebd5f1aac086c2bb8eed411392b8eecf"],["/page/5/index.html","e1b154ee5f0ed3b4f0c7bb0e702fd3a1"],["/posts/13130/index.html","717e5a55e3fc77ec6f6ac53ac71ed4a0"],["/posts/1360d6db/index.html","bd90e907f67a0a399c5a0a46eb159970"],["/posts/15726/index.html","a5b1d224415a15405dc605190644f685"],["/posts/16287dd1/index.html","4f893b38052ba41b0655c2612d9fd3bb"],["/posts/16625/index.html","31b79c70f062e7619c989fc6d97cd3a1"],["/posts/191/index.html","079f3fcd494d00b0769f056bad09498c"],["/posts/19efde9d/index.html","3d76804c7557cf516a0539703d3336bf"],["/posts/23846/index.html","01a020cac6086b7958638286299283fc"],["/posts/2e76c7c7/index.html","26a869dc4f09ac7e5fd162bb68df27b1"],["/posts/2f5fa32a/index.html","936ec76951bb6d7f4fde05bb32455088"],["/posts/2f6a690e/index.html","9f8477ff8a489c273b0ef56037a5cfce"],["/posts/33570527/index.html","e70aa3e3a2abe5224b70b7254205f209"],["/posts/3392da79/index.html","50cda1e003356ab4db4c088c368c38d0"],["/posts/34b7b93d/index.html","f670120f0ebcee1a99851ba27c832dee"],["/posts/3cddf8a6/index.html","c6bc53ec3146ec6ce37a431463bd5c8e"],["/posts/3fcfbf08/index.html","88988c85698159a3c12cb7ef50fe7dfc"],["/posts/43dd7bdd/index.html","abe48abeeebb5a00f91b9683691b0c33"],["/posts/45315/index.html","b79efed9cc964ac6207bc1a61660fa51"],["/posts/455e3332/index.html","0ab23d96f8ad8b2a7497607887fc3376"],["/posts/47778/index.html","acc174e948138ab3e9dc8c94722b536b"],["/posts/47863/index.html","e850f4b524268889c79816cfd3dcfe5e"],["/posts/4b9e079c/index.html","1073dcdf47268924203d2763e4855861"],["/posts/4d5ceeb7/index.html","9f9bd5064e7f45b08eccd7213a106ab9"],["/posts/513217ac/index.html","da372e6b06daa873f0e24fccb1a85f7f"],["/posts/57204/index.html","831594032d42d6b9ca72f26a348f8937"],["/posts/585b595c/index.html","f19d8b280fd5e67a04301c3a21dc7e07"],["/posts/60369/index.html","d18c9b68ae6a3317c09f82991075ae91"],["/posts/60bb74e9/index.html","9d35d138b527537d5393adfd0403a12f"],["/posts/64812/index.html","410e398ecd9be00e5a3b9de077248898"],["/posts/712bbfa1/index.html","01c9912eb27471e97430715193901d21"],["/posts/745e7cfa/index.html","f9f0224a7d14b1f4712e41e91ad02822"],["/posts/745ec33e/index.html","b9d5cd9fae1fbeed88b004d1f37abb86"],["/posts/7668/index.html","ae7937064188a99cc4dcb8891d91a236"],["/posts/8865/index.html","65991a6f3ad1e5747245c99a8f39c9d4"],["/posts/88dcdeb9/index.html","94cd8693ce14134e792451c4551ee7c0"],["/posts/8f0db47/index.html","86d894d0e6598ba9ff4b58b54d9aa426"],["/posts/91662d71/index.html","26c7073804166ece04b1e9d3413a1fbb"],["/posts/9d7faf08/index.html","c2dc3cb809e0606c0bb38172011bb16c"],["/posts/b7d844c0/index.html","7ee362b7ee3493d68546ae9cbbe4e687"],["/posts/b8a14aa/index.html","a425036800e0a452827d62da62b13aeb"],["/posts/c432f601/index.html","80b5d9709e9c31d4d40a40ea855a8e96"],["/posts/c61c8774/index.html","8395c73f9db903012994bd32880f980a"],["/posts/ca137339/index.html","21635937dee1c45828de768297276383"],["/posts/d0805e68/index.html","79f4f9f41743929c1eaa72b36deaa85d"],["/posts/dc700881/index.html","6f3ed893c6eddbd26877cb8166dd4542"],["/posts/dd157a56/index.html","5aa2da405edfcfb0d42a8bca447c43c9"],["/posts/df182d34/index.html","8d7896c03075cedfb343a4cc19921c8a"],["/posts/f74f4e4d/index.html","25993e5787c9cdf87b3a0695eff4acab"],["/sw-register.js","5e090ccadc893c5c9da5700d9fb0fb81"],["/tags/C/index.html","5ebd27a01cecfd0d3d516616ab6c23f9"],["/tags/CentOS-7/index.html","845dde35993f0eb3ae4fc171b353e28a"],["/tags/DeepLearning/index.html","fa8d65337872d7916b78955c9eb3a06d"],["/tags/Diary/index.html","85f3503a3b9ca7c80b14fb5598659f82"],["/tags/Diary/page/2/index.html","dcef141ed5f461ff9a72ffd27a1d7875"],["/tags/Diary/page/3/index.html","84fc273c8465c7444a55832d871fbd0c"],["/tags/Diray/index.html","89e1683ffd2e8fe483ef1d45e16cf5b7"],["/tags/Encrypt/index.html","d98915011ae89800abc327ac4c9d7e7e"],["/tags/Hexo/index.html","32cdae6030e509c0260a2b8f13620e94"],["/tags/Linux/index.html","78f7fa6907a40b58c647ec257857ffa3"],["/tags/Linux/page/2/index.html","96afd6b29fb2225526ea5d3aa4136cea"],["/tags/MacBookPro/index.html","bf0e8036c994a1e8a68ff33733351d93"],["/tags/Music/index.html","400457aea657ae50b026a31ac70f6f4e"],["/tags/Network/index.html","df46d585bc85e8f8d60f40371d4dfe07"],["/tags/Python/index.html","b4ef61077dbb3e812fed4dd0711d4882"],["/tags/Symphony/index.html","7ac11b8c773132956075986902f9cb9d"],["/tags/Ubuntu/index.html","c58c8ca59a1ba6b47781a0f66bdd4b17"],["/tags/index.html","db36afdb323f24d88a95952815c59c4a"],["/tags/kali/index.html","2667b7e990ae17aea6a2478fe558a465"],["/tags/mac/index.html","562642de239b05aece73765dbdaa9d6c"],["/tags/virtualbox/index.html","81cf6df7072c02d30403ab0340225777"]];
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
