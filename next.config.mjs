import withPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

const config = {
  basePath: "/homework5",
  assetPrefix: isProd ? "/homework5/" : "",
  trailingSlash: true,
  // other configurations
};

export default withPWA({
  pwa: {
    dest: "public",
  },
  ...config,
});
