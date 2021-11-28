export default {
  dev: {
    '/nacos/': {
      target: 'http://192.167.2.11:8082',
      changeOrigin: true,
    },
    '/web': {
      target: 'http://192.167.2.11:8082',
      changeOrigin: true,
    },
  },
};
