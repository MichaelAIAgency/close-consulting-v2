/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist', // This changes the folder name from 'out' to 'dist'
  basePath: '/freelancerwerden',
  assetPrefix: '/freelancerwerden/', // The trailing slash is vital!
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig