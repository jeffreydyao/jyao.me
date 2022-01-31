/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  nextConfig,
})
