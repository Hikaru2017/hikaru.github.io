/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","0fcfe980d249daa191be2fbe54c657de"],["/archives/2014/03/index.html","3433e9f42557e8341e28e778fc5b7e96"],["/archives/2014/index.html","89f2ce5f2fb7b3172427a7b248a57ad0"],["/archives/2017/07/index.html","9f562e4bcdb1aad85112f16ec90b16d2"],["/archives/2017/08/index.html","85e06af2458a5fca5fbd2fa6d51d4d08"],["/archives/2017/10/index.html","8b5a5edf60b3456e2175a6af69796631"],["/archives/2017/index.html","f03f3af45b2638cf2e11edc2c49aaa14"],["/archives/2018/01/index.html","5c70213830222f3d8563295c85ed4a08"],["/archives/2018/02/index.html","39c8a1ac5124a10700d5a406491b6450"],["/archives/2018/03/index.html","04aed002057eb2d71ce04e29b3f99c2a"],["/archives/2018/04/index.html","1aae52a2cce09e1e9bfbbd05a1cc30f6"],["/archives/2018/05/index.html","79de10115cfa6f648f39f7fb0193717a"],["/archives/2018/06/index.html","fcf2bf39705e3d254921773f735e3bec"],["/archives/2018/08/index.html","9216dc8477a863dfa2ec8d8b8d24c075"],["/archives/2018/index.html","70c3dd857509d2a81abd38697109efb9"],["/archives/2018/page/2/index.html","db029ba487c82ce6ef346447b8225e3b"],["/archives/2018/page/3/index.html","1025245341cbd0b06ef775c93d765277"],["/archives/2019/03/index.html","dd1dcc01ccf269da9da170ca0a8afcc3"],["/archives/2019/04/index.html","76950fd8b771070434e4d0f1b9e44ccb"],["/archives/2019/05/index.html","9cffac6f068607903e4abe0d9338226d"],["/archives/2019/index.html","ce5fd8a7dd046ee1f1519a395534c454"],["/archives/index.html","168404bd9a25bc1497edec550f8bb0a1"],["/archives/page/2/index.html","a89ab8ca582d1ea911b1b230f32dd40c"],["/archives/page/3/index.html","50c42332f37b37d2c0887f30a613ce38"],["/archives/page/4/index.html","2db06477f36c4746ef0bce9ac284ff24"],["/article/2014/03/01/从头开始/index.html","d111b2e2d0d4fa1084fb84c7e1450676"],["/article/2014/03/07/惟愿无事常相见/index.html","05b8581533a13ab11b98fd714949f265"],["/article/2017/07/06/写在前面的话/index.html","8e412c0ccfee0c4e0ed6d8a09b817e6b"],["/article/2017/07/21/那些日子你会不会舍不得/index.html","87085540cde709ddb5b82ba25ceb6df9"],["/article/2017/08/15/vi编辑器如何对段落整体缩进/index.html","30eeab2f3eca7da4d210bab47498873f"],["/article/2017/08/25/IndentationError-expected-an-indented-block/index.html","5b26bc0f13cd7af6628dada1ed650e63"],["/article/2017/10/18/Linux下如何解压tar-bz2文件/index.html","99099603039272060c9a92a60b65484d"],["/article/2017/10/18/Ubuntu下更新sublime-text-3/index.html","bbfb5eeb5cf30945947980448eeba2bb"],["/article/2018/01/22/感情论存在的价值/index.html","c56b1533a49b0b1c2bf9d4848dd57870"],["/article/2018/01/31/放弃or不放弃-this-is-a-question/index.html","60e86032b206b1d34055163aa81d04d8"],["/article/2018/02/08/Error-php71w-common-conflicts-with-php-common-5-4-16-43-el7-4-x86-64/index.html","fbb2ff62d05b2a6db4ffabda161acde5"],["/article/2018/02/14/我是一个拥有好运气的人吗？/index.html","81b6072a7a24976041a846aa6672b67f"],["/article/2018/02/19/论化妆的另一好处/index.html","2adca75f5fe026447a4aaffa09cf2362"],["/article/2018/02/27/tar-Child-returned-status-1/index.html","4a079f56c62b91bd15282d01f0436b4f"],["/article/2018/03/06/Edit-hostname-on-CentOS-7/index.html","375d706bba628b85647779f267899864"],["/article/2018/03/06/怕不是迷失了方向？/index.html","078e342b154d96d5b2d7d048da0603a5"],["/article/2018/03/13/KVM虚拟机备份与还原/index.html","9034f71848a97f12596bfc7f8e540a18"],["/article/2018/03/13/vim如何撤销操作和恢复撤销/index.html","1d9cb0a1cc57f74f1f6e36b5fa1bfcc2"],["/article/2018/03/22/迟钝还是假装/index.html","ef8f0bedcf070fcf61e683f079dd1f05"],["/article/2018/03/23/梦境与现实的纠葛/index.html","b225bcd347b7639efcfddb7ec9c4bf4a"],["/article/2018/03/25/MacBookPro删除Steam游戏图标/index.html","5ddb1b080879bb4f55ecb9695036c1fe"],["/article/2018/03/25/噩梦连连/index.html","d4733d5eceb5ea7f25c1f556da7ba431"],["/article/2018/04/04/What’s-the-worst-thing-that-you-have-done/index.html","acf96c0824a683799df4b739a5638e19"],["/article/2018/04/09/南柯一梦/index.html","17d82d330652198ff6163d6689422e01"],["/article/2018/04/12/鼓掌之间的垂死挣扎/index.html","0fea39e0c849f4443b288184bd31b2d0"],["/article/2018/05/15/Ubuntu-root的默认密码/index.html","5b15be591105274a61ccd24a1bea8613"],["/article/2018/05/23/离开水的鱼长出翅膀了吗/index.html","a1e244f0bb4e7f7caacc872a7f07af14"],["/article/2018/06/09/Linux添加用户到组/index.html","4c9054c0e92c46f201dc566761d07dd8"],["/article/2018/06/10/生性自由？/index.html","8c1967fd7fcd1f40aa27e32cd13e47ac"],["/article/2018/08/05/安装完Kali之后的一切准备性工作/index.html","8b0cfcf4e3bda8a5d5dbf53674d3e5d6"],["/article/2018/08/30/遥不可及的/index.html","ea27ccafe19b1c4ddfe3cc9ea5a6a470"],["/article/2019/03/25/窗外的云像是棉花糖/index.html","daad1b542f88f0039eaa4cefc14073fe"],["/article/2019/03/27/gpg-no-valid-OpenPGP-data-found-解决办法/index.html","eb3d79fedc34be450d9017afaaf51fa4"],["/article/2019/04/03/Ubuntu：SSH无密码登陆/index.html","6520b3139721586939394cadda873113"],["/article/2019/05/11/Python是面向过程还是面向对象？/index.html","a1c3985003c784822d66e360a1520426"],["/article/2019/05/11/untitled-c-text-0x95-：对‘pthread-create’未定义的引用/index.html","dfdcbbef5d18455be691ce39f500df44"],["/article/2019/05/11/正在努力学习五笔打字法，写篇博文就当背字根了。/index.html","dfd0832c138ac3b22fd959964be57880"],["/article/2019/05/13/virtualbox网络配置的血泪史/index.html","83f9eb4a7875fb4762bbf21cc5959945"],["/article/2019/05/14/SSH-Tunnel隧道/index.html","525cd7b096ac0ad9876e2dbe23996f24"],["/categories/Diary/index.html","f643c9fe0ced552a218451499362c5a1"],["/categories/Linux/index.html","1fe45eede7fb095c5f80c84371f4ca39"],["/categories/index.html","d22ec5322faf8168f8489c76bd084b6f"],["/css/main.css","64c7159de7ec7ea8249ba8c0721e567e"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","01a99860181988fc1b49029bc2972f10"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","eaabe1cc51e18fc10a1478429f0c46b9"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","7c1bad3c4843cad0cfb2b5566b4c231f"],["/page/3/index.html","f7696b18a35e46a96a04c24a23c2b195"],["/page/4/index.html","58ec459f36d60e950d6d7fffaf889ba6"],["/sw-register.js","5c797ca92a8e9fdcf0ca47ca9d4e5e9e"],["/tags/CentOS-7/index.html","bc3060742111c2f57fcc8c64758eff7b"],["/tags/Diary/index.html","55439bed6b58cb10e971f080258b8c57"],["/tags/Diary/page/2/index.html","eeeb173e492f328ffb7c08606b7f5aee"],["/tags/Linux/index.html","17b1f4368fcaa646e8cb1a4533bb33e3"],["/tags/Linux/page/2/index.html","318ffc561966944932521b253a8e92cd"],["/tags/MacBookPro/index.html","3b8ba033feecefd12e03c1febb88fa5d"],["/tags/Network/index.html","e02352d1227687ba4dba7daa953dc8c4"],["/tags/Python/index.html","5485ed0714b11de6ba023ffcb3a20bc9"],["/tags/Ubuntu/index.html","36eb46aeaf07c5e31e09e19fb0ccc656"],["/tags/index.html","add62990ab1581b7262667c9e3cdcb12"],["/tags/kali/index.html","5669641793953a09956580ac4a739127"],["/tags/virtualbox/index.html","fa78b4d5469dffad81388b2a271e33e3"]];
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
