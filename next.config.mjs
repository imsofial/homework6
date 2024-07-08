import runtimeCaching from 'next-pwa/cache.js';
import withPWA from 'next-pwa';

const pwaConfig = {
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
};

const nextConfig = {
  // other Next.js configurations
  basePath: '/homework5',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/homework5/' : '',
  trailingSlash: true,
  output: 'export',  // Enables static exports
  images: {
    unoptimized: true,
  },
};

export default withPWA(pwaConfig)(nextConfig);
