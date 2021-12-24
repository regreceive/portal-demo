import { IBestAFSRoute } from '@umijs/plugin-layout/src/types/interface';

const routes: IBestAFSRoute[] = [
  {
    path: '/',
    redirect: '/app',
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: './app', exact: false, component: '@/pages/Home' },
      { path: './vertical', exact: false, component: '@/pages/Vertical' },
      { path: './blank', exact: false, component: '@/pages/Blank' },
      {
        redirect: '/app',
      },
    ],
  },
];

export default routes;
