export default {
  dev: {
    '/nacos/': {
      target: 'http://dfem.k2assets.k2:8082',
      changeOrigin: true,
      // pathRewrite: { '^/nacos/': '/' },
    },
    '/bcf': {
      target: 'http://dfem.k2assets.k2:8082',
      changeOrigin: true,
    },
    '/apps': {
      target: 'http://192.168.130.100:8342',
      changeOrigin: true,
    },
  },
};
