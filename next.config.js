/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false, // Disable to avoid critters issue
  },
  images: {
    domains: ['localhost'],
  },
  // Skip prerendering for now to avoid 404 errors
  output: 'standalone',
  trailingSlash: false,
}

module.exports = nextConfig
