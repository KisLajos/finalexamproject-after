/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'finalexamprojectafter-wp.lajoskis.dk',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
    domains: ['finalexamprojectafter-wp.lajoskis.dk']
  },
}

module.exports = nextConfig
