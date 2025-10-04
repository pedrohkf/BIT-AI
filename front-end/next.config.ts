import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  env: {
    API_URL_LOCAL: process.env.API_URL_LOCAL
  },

  images: {
    domains: ['images.pexels.com'],
  },
};

export default nextConfig;