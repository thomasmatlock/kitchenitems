/** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: false,
//     swcMinify: true,
// };

// module.exports = nextConfig;
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader', 'glslify-loader'],
        });

        return config;
    },
};