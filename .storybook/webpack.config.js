module.exports = {
    plugins: [],
    module: {
        rules: [
            {
                test: /\.stories\.jsx?$/,
                loaders: [
                    require.resolve('@storybook/addon-storysource/loader')
                ],
                enforce: 'pre'
            }
        ]
    }
};

// if use TypeScript

// const path = require("path");
//
// module.exports = (baseConfig, env, defaultConfig) => {
//     defaultConfig.module.rules.push({
//         test: /\.(ts|tsx)$/,
//         include: path.resolve(__dirname, "../src"),
//         loader: require.resolve("awesome-typescript-loader")
//     });
//
//     defaultConfig.module.rules.push({
//         test: /\.stories\.jsx?$/,
//         loaders: [
//             {
//                 loader: require.resolve("@storybook/addon-storysource/loader"),
//                 options: { parser: "typescript" }
//             }
//         ],
//         enforce: "pre"
//     });
//
//     defaultConfig.resolve.extensions.push(".ts", ".tsx");
//
//     return defaultConfig;
// };
