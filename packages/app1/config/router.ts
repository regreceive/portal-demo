import { IBestAFSRoute } from '@umijs/plugin-layout/src/types/interface';

const routes: IBestAFSRoute[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '.',
        component: '@/pages/Home',
        title: 'App3.0',
      },
      {
        path: './page1',
        component: '@/pages/Page1',
        title: 'page1',
      },
    ],
  },
  {
    path: '/child',
    component: '@/pages/Child',
  }
];

export default routes;
