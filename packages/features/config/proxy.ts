export default {
  dev: {
    '/nacos/': {
      target: 'http://dfem.k2assets.k2:8082',
      changeOrigin: true,
      // pathRewrite: { '^/nacos/': '/' },
    },
    '/bcf': {
      target: 'http://10.1.10.224:31070/',
      changeOrigin: true,
    },
    '/web': {
      target: 'http://192.167.2.11:8082',
      changeOrigin: true,
    },
  },
};
