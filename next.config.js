const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
    webpack: config => {
        config.plugins.push(
            new SWPrecacheWebpackPlugin({
                navigateFallback: '/',
                verbose: true,
                staticFileGlobsIgnorePatterns: [/\.next\//],
                runtimeCaching: [
                    {
                        urlPattern: '/',
                        handler: 'networkFirst',
                        options: {
                            cacheName: 'page',
                            cacheExpiration: {
                                maxAgeSeconds: 60 * 60 * 24
                            }
                        }
                    },
                    {
                        urlPattern: /\/api\/.+/,
                        handler: 'networkFirst',
                        options: {
                            cacheName: 'api',
                            cacheExpiration: {
                                maxAgeSeconds: 60 * 60 * 24
                            }
                        }
                    },
                    {
                        urlPattern: /\.(png|svg|woff|ttf|eot)/,
                        handler: 'cacheFirst',
                        options: {
                            cacheName: 'assets',
                            cacheExpiration: {
                                maxAgeSeconds: 60 * 60 * 24 * 14
                            }
                        }
                    },
                    {
                        urlPattern: /^https:\/\/yamamoto-yuta\.me\/\.static\/.*\.(jpeg|jpg)/,
                        handler: 'cacheFirst',
                        options: {
                            cacheName: 'image-thumbnail',
                            cacheExpiration: {
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
