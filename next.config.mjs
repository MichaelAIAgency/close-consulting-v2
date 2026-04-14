/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/freelancerwerden',
  assetPrefix: '/freelancerwerden',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig