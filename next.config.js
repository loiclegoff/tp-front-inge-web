/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination:
          'http://tp.yosko.net/battleship-backend/api/:path*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
