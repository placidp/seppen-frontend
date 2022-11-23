const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'leonardo.osnova.io',
        port: '',
        pathname: '',
      },
    ],
    // domains: ['im.kommersant.ru', 'localhost'],
  },
}

module.exports = nextConfig
