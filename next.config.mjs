/** @type {import('next').NextConfig} */
const nextConfig = {};

const isProd = process.env.NODE_ENV === 'production';

const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  basePath: '/your-repo-name',
  assetPrefix: isProd ? '/your-repo-name/' : '',
  trailingSlash: true,
});


export default nextConfig;
