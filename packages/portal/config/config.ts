import { defineConfig } from 'umi';
import portal from './portal';
import proxy from './proxy';
import routes from './router';

export default defineConfig({
  title: 'app',
  fastRefresh: {},
  nodeModulesTransform: {
    type: 'none',
  },
  base: '/',
  history: { type: 'hash' },
  publicPath: './',
  hash: true,
  routes,
  portal,
  webpack5: {},
  dynamicImportSyntax: {},
  ignoreMomentLocale: true,
  manifest: {},
  proxy: proxy[(process.env.REACT_APP_ENV as 'dev') || 'dev'],
});
