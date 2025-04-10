/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "lh4.googleusercontent.com", 
      "lh5.googleusercontent.com", 
      "lh6.googleusercontent.com", 
      "lh3.googleusercontent.com", 
      "lh4.googleusercontent.com"
    ],
  },
  transpilePackages: ['@react-pdf/renderer'],
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['@react-pdf/renderer']
  },
  webpack: (config) => {
    // Configuración para resolver problemas con react-pdf
    config.resolve.alias = {
      ...config.resolve.alias,
      'canvas': false,
      'encoding': false,
      '@react-pdf/renderer': path.resolve(__dirname, 'node_modules/@react-pdf/renderer')
    };

    // Soporte para archivos WASM (puede ser necesario para algunas dependencias)
    config.experiments = { 
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  }
};

// Necesitarás importar el módulo 'path' al inicio del archivo
const path = require('path');

module.exports = nextConfig;