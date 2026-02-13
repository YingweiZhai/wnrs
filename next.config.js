/** @type {import('next').NextConfig} */
const nextConfig = {
  // Replace 'wnrs' with your repository name if it's different
  basePath: '/wnrs',
  assetPrefix: '/wnrs',
  images: {
    unoptimized: true,
  },
  // This helps with the 'broken' interactive parts
  trailingSlash: true,
}

module.exports = nextConfig
