export default {
  dev: {
    '/apps/antd-ui/': {
      target: 'http://localhost:3101',
      changeOrigin: true,
      pathRewrite: { '^/apps/antd-ui/': '/' },
    },
    '/apps': {
      target: 'https://k2-portal-demo.vercel.app',
      changeOrigin: true,
    },
  },
};
