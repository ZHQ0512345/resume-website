/** @type {import('next').NextConfig} */
const nextConfig = {
  // 开启图片优化
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // 生产环境优化
  productionBrowserSourceMaps: true, // 启用源码映射便于调试
  compress: true, // 启用 gzip 压缩
  poweredByHeader: false, // 移除 X-Powered-By 头部
  
  // 优化构建
  swcMinify: true, // 使用 SWC 进行压缩
  reactStrictMode: true,
  
  // 实验性功能
  experimental: {
    optimizeCss: true, // CSS 优化
    scrollRestoration: true, // 滚动位置恢复
  },

  // 重写规则
  async rewrites() {
    return [];
  },

  // 重定向规则
  async redirects() {
    return [];
  },

  // 请求头配置
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;