/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","af33804bc18add8556c0b08433161d80"],["/archives/2017/07/index.html","fae4cf4cb5814c700e52382649c14630"],["/archives/2017/08/index.html","f71b06b06cf24b14729e9c074bf98287"],["/archives/2017/index.html","ea3566a56e5d2a2e9689ed4e11465816"],["/archives/2018/01/index.html","1872754378977f095f988f814045246b"],["/archives/2018/02/index.html","d948c0f3f8e3e55aed3d86f7b57d67e3"],["/archives/2018/03/index.html","89228c63e5b2c56eb53a65dcea7ff65c"],["/archives/2018/04/index.html","69974a277453d7a6fd609836fa61e355"],["/archives/2018/05/index.html","3d544fc0c0faa0ac51ef27bfd3b0caf7"],["/archives/2018/06/index.html","d2393810d0641c9dc7219033f7c33852"],["/archives/2018/08/index.html","33ce64842ef38d07e25a0e531febf99d"],["/archives/2018/index.html","5ca9d62158bc69ecce36a329118bf28b"],["/archives/2018/page/2/index.html","e43b81192665e533cbb77a62d4c42a7f"],["/archives/2018/page/3/index.html","db0231edb36a4cea51a2b45a6bf4007e"],["/archives/2019/03/index.html","cccd4e0b2e1c6a1d9c56193c2216db72"],["/archives/2019/04/index.html","d038275244cb12264a72417cfa046bc9"],["/archives/2019/05/index.html","52cea6ea7dd2efa828ea94b3ec237821"],["/archives/2019/index.html","8fb32c345728ef653201514be1d6bb62"],["/archives/2019/page/2/index.html","d42f028c59eba2e56e848b0edda330a4"],["/archives/index.html","0c6263592d3c5ee9594c4189b7e589a9"],["/archives/page/2/index.html","9e54f48097529678b6050580ac0f8feb"],["/archives/page/3/index.html","63464a3486ac9757b803404b8979bb6f"],["/archives/page/4/index.html","c0cd7e61a439ce0355779c910b8cb6c8"],["/article/2017/07/06/写在前面的话/index.html","1e9b9f7fb6a828ef3073e43c8da7eab8"],["/article/2017/07/21/那些日子你会不会舍不得/index.html","e43c609934eb7989b73f3348a001f465"],["/article/2017/08/15/vi编辑器如何对段落整体缩进/index.html","4da7f3e1aee976f9e13f63dfcf6fbe3e"],["/article/2018/01/22/感情论存在的价值/index.html","8030a966d998e993c4a17a79dc6fa811"],["/article/2018/01/31/放弃or不放弃-this-is-a-question/index.html","78287088564aaed8f5518c8b51963d07"],["/article/2018/02/08/Error-php71w-common-conflicts-with-php-common-5-4-16-43-el7-4-x86-64/index.html","d2b7f92ba4f8ad9069fd03aaff410ba9"],["/article/2018/02/14/我是一个拥有好运气的人吗？/index.html","3addaeb2263cf7e29ed0075d0fc2fd6f"],["/article/2018/02/19/论化妆的另一好处/index.html","b40cc4cd29d2897a66fd29eabb0dde58"],["/article/2018/02/27/tar-Child-returned-status-1/index.html","98f615b3d12e63abb0c72f556130ea4d"],["/article/2018/03/06/Edit-hostname-on-CentOS-7/index.html","c27a117a588b9d7c42473cf2b1de2e90"],["/article/2018/03/06/怕不是迷失了方向？/index.html","0e8afd0fbac109b7a00c9fc3d946e97a"],["/article/2018/03/13/KVM虚拟机备份与还原/index.html","41aade05c8fccba93654ddc8f2688767"],["/article/2018/03/13/vim如何撤销操作和恢复撤销/index.html","63eeb8086f65bb2a25c0589d046d2590"],["/article/2018/03/22/迟钝还是假装/index.html","2b34cd75cd249aa446da90eac748fe98"],["/article/2018/03/23/梦境与现实的纠葛/index.html","e8695b0a0619a458d7c1eb54b473a685"],["/article/2018/03/25/MacBookPro删除Steam游戏图标/index.html","7adb82116ec39b468572bae456f79b53"],["/article/2018/03/25/噩梦连连/index.html","6ee81b41390fbe04ce5378c11c3893a0"],["/article/2018/04/04/What’s-the-worst-thing-that-you-have-done/index.html","9a6b767b7821b922d7e0868fcb433908"],["/article/2018/04/09/南柯一梦/index.html","b93893521ac8d6270d88a0d3a6a93526"],["/article/2018/04/12/鼓掌之间的垂死挣扎/index.html","d02a2627d267f6df9a6aec94f2339d47"],["/article/2018/05/15/Ubuntu-root的默认密码/index.html","1b4c6b7a7452a60bf18e771e3a603b67"],["/article/2018/05/23/离开水的鱼长出翅膀了吗/index.html","5e18683e10d30eb88a94f2a329bfbcfc"],["/article/2018/06/09/Linux添加用户到组/index.html","9d797518a10253dc5cec0414e7b24441"],["/article/2018/06/10/生性自由？/index.html","35664570e106207528e84a0f77038609"],["/article/2018/08/05/安装完Kali之后的一切准备性工作/index.html","96da23d11ccac2fd12af2ecb92f8a6cd"],["/article/2018/08/30/遥不可及的/index.html","f53f30493e37f8e94a7ca2abf9551284"],["/article/2019/03/25/窗外的云像是棉花糖/index.html","d3eec4cb6ebd7b2cf41878b247aaaa5e"],["/article/2019/03/27/gpg-no-valid-OpenPGP-data-found-解决办法/index.html","c857f0c7ad11af2e99ba99f86bc5d950"],["/article/2019/04/03/Ubuntu：SSH无密码登陆/index.html","ed02202df659f167e81eeed3ca724fae"],["/article/2019/05/11/IndentationError-expected-an-indented-block/index.html","0456cd86d6569e48a7d9c8d94499c775"],["/article/2019/05/11/Linux下如何解压tar-bz2文件/index.html","c9b0f735c26d5490f821b188b1dd1db0"],["/article/2019/05/11/Python是面向过程还是面向对象？/index.html","33dbc409fb989afa16e89c58f47b7495"],["/article/2019/05/11/Ubuntu下更新sublime-text-3/index.html","9237b8a8b1d5529f974dc2c4f46278c1"],["/article/2019/05/11/untitled-c-text-0x95-：对‘pthread-create’未定义的引用/index.html","518d0e8ffcd3f5f0cb6f9d3026c2d3aa"],["/article/2019/05/11/从头开始/index.html","9fbe205a4cc1dce22158009fab4402d0"],["/article/2019/05/11/惟愿无事常相见/index.html","b5afbeaadd9064d78a4da9c30c9219b1"],["/article/2019/05/11/正在努力学习五笔打字法，写篇博文就当背字根了。/index.html","2af223fb08971cf45ae95f593fc28400"],["/article/2019/05/13/virtualbox网络配置的血泪史/index.html","16129474cf53db31a3e590c8302d8027"],["/article/2019/05/14/SSH-Tunnel隧道/index.html","683dbd1815592ace3436f6958d0cdacd"],["/categories/Diary/index.html","13da787c3391a964209551b3056e8057"],["/categories/Linux/index.html","7b8449d5de963ac7dd2e2a3665383f0a"],["/categories/index.html","e0ba1becf68629f72087ca382b405667"],["/css/main.css","a49e4715b73064e904a8a2c1d880276b"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","db6ff4b4788a8d403b909836bcab1907"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","bc4b502b6b84720f440e25d48f4ae2a3"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","09672d04586c40d7e6f918e0afc2e61d"],["/page/3/index.html","301796878cae0e6391889b63096f0338"],["/page/4/index.html","8d97ac688d40fd2f1ccc141dda5824c0"],["/sw-register.js","70af12e4e4772da6f945d97218f392dc"],["/tags/CentOS-7/index.html","4ae47e72e9900a2c297b80b4ae813b89"],["/tags/Diary/index.html","00050f832d9698b76cd20e31aa2145f9"],["/tags/Diary/page/2/index.html","332f9d756f9e0f233441f4762be88721"],["/tags/Linux/index.html","7e2ab6e7c5f840d2312ab8259f862657"],["/tags/Linux/page/2/index.html","da4e2307f5b49a035d5c3b7027f35ac3"],["/tags/MacBookPro/index.html","977021afd71a9d9059f5537dfffe2fe5"],["/tags/Network/index.html","fd086c33b0dccc35c61bde0cd457b8c6"],["/tags/Ubuntu/index.html","5f326cd8e2f14b6d42688ba448b5a226"],["/tags/index.html","622bb75c4e4f08b81835b8b0cadbe5c5"],["/tags/kali/index.html","e0324e53f036ea9db1d3751b0849d821"],["/tags/virtualbox/index.html","2764cf22b28d8096bf55e8c74726e724"]];
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
