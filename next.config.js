/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false,
  },
  images: {
    domains: ['localhost', 'quran.com', 'sunnah.com'],
  },
  output: 'standalone',
  trailingSlash: false,
}

module.exports = nextConfig
