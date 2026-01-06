import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Flexled',
  assetPrefix: '/Flexled/',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
