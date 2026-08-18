/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",

  basePath: "/tcongs",
  assetPrefix: "/tcongs/",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;