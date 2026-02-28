/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // 显式匹配 /webgui 路径
        source: '/webgui/:path*',
        destination: 'https://fns.diybeta.com/webgui/:path*',
      },
      {
        // 匹配剩余所有路径
        source: '/:path((?!webgui).*)', 
        destination: 'https://fns.diybeta.com/:path*',
      },
    ]
  },
}

module.exports = nextConfig
