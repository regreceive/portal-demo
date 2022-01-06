export default {
  dev: {
    '/nacos': {
      target: 'http://192.167.2.11:8082',
      changeOrigin: true,
    },
    '/bcf_dev': {
      target: 'http://10.1.101.122:31070/',
      changeOrigin: true,
    },
    '/apps': {
      target: 'http://192.168.130.100:8342',
      changeOrigin: true,
    },
  },
};
