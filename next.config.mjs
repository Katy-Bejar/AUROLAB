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
  // Elimina toda la sección experimental y webpack
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'canvas': false,
      'encoding': false
    };
    return config;
  }
};

export default nextConfig;