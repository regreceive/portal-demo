export default {
  dev: {
    '/nacos/': {
      target: 'http://dfem.k2assets.k2:8082',
      changeOrigin: true,
      // pathRewrite: { '^/nacos/': '/' },
    },
    '/repo/': {
      target: 'https://dfem.k2assets.k2/console/api/v2',
      changeOrigin: true,
      pathRewrite: { '^/repo/': '/' },
      secure: false,
    },
    '/data-service': {
      target: 'http://dfem.k2assets.k2:8082',
      changeOrigin: true,
    },
    '/bcf': {
      target: 'http://dfem.k2assets.k2:8082',
      changeOrigin: true,
    },
  },
};
