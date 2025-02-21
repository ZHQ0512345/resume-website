module.exports = {
  // 生产环境配置
  production: {
    // 环境变量
    env: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_SITE_URL: 'https://your-domain.com',
      NEXT_PUBLIC_GA_ID: 'G-XXXXXXXXXX', // Google Analytics ID
    },
    
    // 构建配置
    build: {
      generateSourceMaps: true,
      optimizeFonts: true,
      optimizeImages: true,
      compress: true,
    },

    // 缓存配置
    cache: {
      strategy: 'stale-while-revalidate',
      duration: 60 * 60 * 24, // 24小时
    },

    // CDN配置
    cdn: {
      domain: 'cdn.your-domain.com',
      enabled: true,
    },

    // 安全配置
    security: {
      headers: {
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Content-Security-Policy': "default-src 'self'",
      },
    },
  },

  // 预发布环境配置
  staging: {
    env: {
      NODE_ENV: 'staging',
      NEXT_PUBLIC_SITE_URL: 'https://staging.your-domain.com',
    },
    build: {
      generateSourceMaps: true,
      optimizeFonts: true,
      optimizeImages: true,
      compress: true,
    },
  },

  // 开发环境配置
  development: {
    env: {
      NODE_ENV: 'development',
      NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
    },
    build: {
      generateSourceMaps: true,
      optimizeFonts: false,
      optimizeImages: false,
      compress: false,
    },
  },
}; 