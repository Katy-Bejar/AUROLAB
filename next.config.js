/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "lh4.googleusercontent.com",
      "lh5.googleusercontent.com",
      "lh6.googleusercontent.com"
    ],
  },
  transpilePackages: ['@react-pdf/renderer'],
  webpack: (config) => {
    config.resolve.alias['@react-pdf/renderer'] = '@react-pdf/renderer/dist/react-pdf.browser.es.js';
    return config;
  }
};
module.exports = nextConfig;