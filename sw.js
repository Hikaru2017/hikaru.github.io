/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","787b94b58eaf01f42cf6e55065166dab"],["/archives/2014/03/index.html","ba0273ea2f7103e6521759d3ae961638"],["/archives/2014/index.html","82a17c1646b0d2554de8706518c5bccd"],["/archives/2017/07/index.html","d77c8907e706d49f9c009bb160a569c2"],["/archives/2017/08/index.html","723e564094ea4a3979b9c145f49dd06d"],["/archives/2017/10/index.html","dc0be30ee3b7b3c4155c62fa48073fad"],["/archives/2017/index.html","f4feff9a9ca5222e3644e15785dc180d"],["/archives/2018/01/index.html","0332dc01f8c782c7a342d7fc97c23367"],["/archives/2018/02/index.html","141758f6ffa2cce4dc004fdf0818689e"],["/archives/2018/03/index.html","db43ef10303ed1facdd7ca602be66370"],["/archives/2018/04/index.html","24beb73d9743bae51ebc865e0f282e36"],["/archives/2018/05/index.html","f092ddc85879e2d8d039d966ab8fc936"],["/archives/2018/06/index.html","28bf669a6537681c0dbdd369a353de5c"],["/archives/2018/08/index.html","7a43cb0b65a13b84d7f5fe3dff02f564"],["/archives/2018/09/index.html","d1f8fca2f363d1a6f2b16a73bdea9a1b"],["/archives/2018/index.html","d6c9b534b7c1334507816de711066e8e"],["/archives/2018/page/2/index.html","d63a8f0162f514e685f0945a929421e1"],["/archives/2018/page/3/index.html","560d5e62d7c8883047a5ccf2f9f86bcb"],["/archives/2019/03/index.html","386fe47b07a001cdbed26d0834d63e35"],["/archives/2019/04/index.html","da2ee95fa27474de465336dbd88cc0cb"],["/archives/2019/05/index.html","6b5c87adbd1e0cf322f3275562ee37b4"],["/archives/2019/06/index.html","8f563daac53928ede5812272595b83ec"],["/archives/2019/07/index.html","1e98b50c53f41eefc9d74d53c71fe283"],["/archives/2019/index.html","08f0f78c8487c6a7a423b57594bd1de3"],["/archives/2020/03/index.html","4ada9781adfeabb777637275bbaa16e5"],["/archives/2020/04/index.html","cb5b965f981a5db2e2d091f5511610ee"],["/archives/2020/05/index.html","d3d3266ae8f086308083be5e79e60ddf"],["/archives/2020/07/index.html","6ad23fe59c4b01ad976607ee179b8894"],["/archives/2020/index.html","1d816f2733cea5e370631f28dc3e4c45"],["/archives/index.html","8b8b3cc27f520e08af0df5ac77e24e85"],["/archives/page/2/index.html","9181fcd4df8b1074081991822b5ee539"],["/archives/page/3/index.html","38a60434b4be2f0745f58fd02a973fd0"],["/archives/page/4/index.html","1a4d29560d8c0d6adc2933927cc858be"],["/archives/page/5/index.html","23b43be8b10bd6646f3d658283e1851d"],["/categories/Diary/index.html","481d626de5738b2664efde0ef8d61a8e"],["/categories/Linux/index.html","d337de584b0b46867daa666609fed829"],["/categories/index.html","1021f0f5badf956774186ad67516e7e8"],["/css/main.css","d772c04437fe8a0cb240bb34014bbde1"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","428f2f45031a2081f461f4a5fa19ab85"],["/index.html","95eb8198b374b8e12a1fab0ac1adaa02"],["/js/affix.js","f117a3586e463c75c61fde98e5c71770"],["/js/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/js/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/js/js.cookie.js","b3c11fce5a994317ce1f7a287fe25326"],["/js/motion.js","e4ffedf8ad9f3443a28104bcf32b3cb2"],["/js/next-boot.js","f439007f5f8f0cc3b2d99e5e77150950"],["/js/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/js/schemes/muse.js","c89944302b0258593e1e6336e5b6c7ed"],["/js/schemes/pisces.js","1bd23ed75238ebf11afe2aa6b1c3a25b"],["/js/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/js/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/js/utils.js","edc02d1f66f874e96730251f2acb2b18"],["/lib/fastclick/README.html","003171ed09bc7af236229c8f815bc566"],["/lib/fastclick/lib/fastclick.js","9f5bace96aef2d482725c039551d1f61"],["/lib/fastclick/lib/fastclick.min.js","ef8402fb98f9b0e3c852c445a1a80fbd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","f758b786971405ec49ec0a7b92922e1d"],["/page/3/index.html","a3072b4832e6aaa100f45d5c84cd49eb"],["/page/4/index.html","4b8a8c656cc1d3dcc0b4dc1bcf0d53f1"],["/page/5/index.html","ee7a38aa37dcceec231a1335ed519bd1"],["/posts/10252/index.html","58399b856318cbfbcace0fd1e880a864"],["/posts/1360d6db/index.html","c7fc7a52b15a28a3d5deb9a1fbb9af48"],["/posts/15726/index.html","ab8979af57aefb862ebd90fd458398b0"],["/posts/16287dd1/index.html","304765a18615d9741a6cfb699b462750"],["/posts/191/index.html","fb93e40389f99f4fb6741a2fc4aba56a"],["/posts/19efde9d/index.html","5a0cd842441c723fe5c04cb492772df2"],["/posts/2371/index.html","732206731eef0c2a4e24e3c0aa1f5eb5"],["/posts/23846/index.html","6bcd972baa5070876087f9800566e13b"],["/posts/2e76c7c7/index.html","637474f0053a322a09846d518f0d4f98"],["/posts/2f5fa32a/index.html","6597a7cb614e780315540adbc53c6838"],["/posts/2f6a690e/index.html","661de47a681250f38ca4c5aa8325daa3"],["/posts/33570527/index.html","27eda3354fd69e43c818b596cbadeb6a"],["/posts/3392da79/index.html","121cc293cd9ca722ca728ad819325bb9"],["/posts/34b7b93d/index.html","27e9c010587d2e5bc3aec537c60a3bca"],["/posts/35596/index.html","e5f3cec16acf193878e45d85beaeba97"],["/posts/3cddf8a6/index.html","3fed0f3932dbad7e7ecb8728d260ad88"],["/posts/3fcfbf08/index.html","3639ae04b5d58ec8610918569a4618bf"],["/posts/43dd7bdd/index.html","9e77aa1f38491c8ef113d9e9b5262476"],["/posts/455e3332/index.html","1d10e95cb3a372c77836e34bed103749"],["/posts/47778/index.html","7b8a83d660bd4bdcfb2faa79e7dc2f0f"],["/posts/4b9e079c/index.html","3e1e29e052a492b50c24de5c17f7e7e0"],["/posts/4d5ceeb7/index.html","2f4f1e3f8d6be28a92584814fce44f33"],["/posts/510/index.html","222c7b21557e8bd80ee65bcf16f70d30"],["/posts/513217ac/index.html","014403a162099433027108f33d9d367f"],["/posts/585b595c/index.html","0c67687cb9fb5106b762ac7ae30a7dfc"],["/posts/60369/index.html","cc08765258d2ea60f966154e448f69c7"],["/posts/60bb74e9/index.html","601c4c12a59f52e6f30ea111de50d6af"],["/posts/64812/index.html","aa7fbe176d9b9835dffdb8c74cebf9ac"],["/posts/712bbfa1/index.html","62f65ef0fe7bdbda1a929f69417a31b0"],["/posts/745e7cfa/index.html","0571120c83a1335d684d5fe7c6926162"],["/posts/745ec33e/index.html","2504f1dd3392f21306bad24d0dbbe995"],["/posts/88dcdeb9/index.html","ebf080f9bdac0699d8d6234515b59e08"],["/posts/8f0db47/index.html","25d0660463b181b0fb434f63a85387d1"],["/posts/91662d71/index.html","51cfaa50ff6027da6cd5f68443282c40"],["/posts/9d7faf08/index.html","d2a4e531c5a14e69ae4cb74995864acc"],["/posts/b7d844c0/index.html","3eb210e0dd28e755562af107fa27c849"],["/posts/b8a14aa/index.html","f591e1bbb1057cbf3c4964b995abc493"],["/posts/c432f601/index.html","ac0d36b177eb92f3213b4cd5d346c869"],["/posts/c61c8774/index.html","0e7be5120eb3ceae8fa17d4741f127ee"],["/posts/ca137339/index.html","241738ebe5539d96c07a8f9939231033"],["/posts/d0805e68/index.html","08462ede4d30ac47ae09ee6e491f7e7d"],["/posts/dc700881/index.html","5f2f5ef0c4f450c80b2589aa30454ba4"],["/posts/dd157a56/index.html","5e19dde6f02ad98d9d7a6507c2da9904"],["/posts/df182d34/index.html","268a2777bedbf612dcd9e2cb191de025"],["/posts/f74f4e4d/index.html","98db8ca96684b6ec76ccfa2739bee160"],["/sw-register.js","18f45542a490fed0de5584437321d218"],["/tags/C/index.html","632fe0c7ecb4a222cde63b389ff6dc3a"],["/tags/CentOS-7/index.html","56e97771766a9271d3901bf51d109dbf"],["/tags/Diary/index.html","e5cc72cec01ad6193d025a8cdd8419ae"],["/tags/Diary/page/2/index.html","5b81b110d627a2b3152f6b4dba5783e5"],["/tags/Diray/index.html","25f0c5dfc0c467dbf76c34379a6db663"],["/tags/Linux/index.html","3eeab99a99d85af8bae230fd800462c4"],["/tags/Linux/page/2/index.html","45cec23cfc587731c8774b1b1a7e03e5"],["/tags/MacBookPro/index.html","1eb5f67f9862e7ccb8ba8ceea6fb33f5"],["/tags/Network/index.html","6cf29bb143341eb447973fe6f571da3e"],["/tags/Python/index.html","be0f31b141e7d1717735c565e17054fd"],["/tags/Ubuntu/index.html","e788af45dc7a95a60c3fbff26172a788"],["/tags/index.html","884814060bbf903a8918c53db6105fb7"],["/tags/kali/index.html","e79dc329f7cf2bc2643c6c2915e66fc8"],["/tags/mac/index.html","19dec9411eaf494568bb234d114f1c4c"],["/tags/virtualbox/index.html","4be7c30525e1b09557c686f37753d382"]];
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
