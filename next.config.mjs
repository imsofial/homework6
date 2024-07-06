import withPWA from 'next-pwa';

const isProd = process.env.NODE_ENV === 'production';

export default withPWA({
  pwa: {
    dest: 'public',
  },
  basePath: '/your-repo-name',
  assetPrefix: isProd ? '/your-repo-name/' : '',
  trailingSlash: true,
  // other configurations
});
