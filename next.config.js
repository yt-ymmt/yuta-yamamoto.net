const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    webpack: config => {
        config.plugins.push(
            new WorkboxPlugin.GenerateSW({
                cacheId: 'workbox',
                swDest: 'service-worker.js',
                skipWaiting: true,
                clientsClaim: false,
                runtimeCaching: [
                    {
                        urlPattern: '/',
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'page',
                            expiration: {
                                maxAgeSeconds: 60 * 60 * 24
                            }
                        }
                    },
                    {
                        urlPattern: /\/api\/.+/,
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: 'api',
                            expiration: {
                                maxAgeSeconds: 60 * 60 * 24
                            }
                        }
                    },
                    {
                        urlPattern: /\.(png|svg|woff|ttf|eot)/,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'assets',
                            expiration: {
                                maxAgeSeconds: 60 * 60 * 24 * 14
                            }
                        }
                    },
                    {
                        urlPattern: /^https:\/\/yamamoto-yuta\.me\/\.static\/.*\.(jpeg|jpg)/,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'image-thumbnail',
                            expiration: {
                                maxEntries: 80,
                                maxAgeSeconds: 60 * 60 * 24
                            }
                        }
                    }
                ]
            })
        );

        return config;
    }
};
