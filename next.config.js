/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
});

const nextConfig = {
  // Built-in image optimization (no next-images needed)
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  // Environment variables are automatically loaded from .env.local
  env: {
    GA_KEY: process.env.GA_KEY,
  },
  // SCSS is now built-in, no configuration needed

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Turbopack configuration (Next.js 16+ uses Turbopack by default)
  turbopack: {},
};

module.exports = withPWA(nextConfig);
