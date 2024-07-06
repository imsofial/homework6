import withPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

export default withPWA({
  pwa: {
    dest: "public",
  },
  basePath: "/homework5",
  assetPrefix: isProd ? "/homework5/" : "",
  trailingSlash: true,
  // other configurations
});
