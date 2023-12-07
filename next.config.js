/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // basePath: '/build',
  // distDir:'/build',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
}

module.exports = nextConfig
