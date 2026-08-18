/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/tcongs",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;