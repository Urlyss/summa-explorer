/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: false,
  runtimeCaching,
});

module.exports = withPWA({
  reactStrictMode: true,
});
