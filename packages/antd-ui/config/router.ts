import { IBestAFSRoute } from '@umijs/plugin-layout/src/types/interface';

const routes: IBestAFSRoute[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        title: 'home',
        path: './home',
        component: '@/pages/Home',
      },
      {
        title: 'page',
        path: './page',
        component: '@/pages/Page1',
      },
    ],
  },
];

export default routes;
