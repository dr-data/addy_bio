const WindiCSS = require("windicss-webpack-plugin");
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const config = {
  webpack: (config) => {
    config.plugins.push(new WindiCSS());
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["pbs.twimg.com"],
  },
  swcMinify: true,
  pageExtensions: ["tsx", "ts", "js", "jsx", "md", "mdx"],
};

module.exports = withMDX(config);
