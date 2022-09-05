/** @type {import('next').NextConfig} */
const path = require("node:path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: ['./**/*.css'],
  },
}

module.exports = nextConfig
