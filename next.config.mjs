/** @type {import('next').NextConfig} */
const nextConfig = {};

const isProd = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  basePath: '/homework5',
  assetPrefix: isProd ? '/homework5/' : '',
  trailingSlash: true,
});


export default nextConfig;
