/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // 匹配所有路径，包括根路径 /
        source: '/:path*',
        // 转发到你的 Cloudflare Tunnel 域名
        destination: 'https://fns.diybeta.com/:path*',
      },
    ]
  },
}

module.exports = nextConfig
