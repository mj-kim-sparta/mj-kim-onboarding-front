/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: false,
    async rewrites() {
      console.log("rewrite");
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3001/:path*',
        }
      ]
    },

    webpack: (config) => {
        config.module.rules.push({
          test: /\.svg$/i,
          use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default nextConfig;