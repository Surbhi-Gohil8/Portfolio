/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Disable Image Optimization API for static exports
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    appDir: true,
  },
  // Enable static export for deployment
  output: 'export',
  // Optional: Add a trailing slash to all paths
  // trailingSlash: true,
  // Optional: Set base path if deploying to a subdirectory
  // basePath: '/portfolio',
  // Optional: Configure the build output directory
  // distDir: 'build',
};

module.exports = nextConfig;
