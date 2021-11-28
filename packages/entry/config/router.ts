import { IBestAFSRoute } from '@umijs/plugin-layout/src/types/interface';

const routes: IBestAFSRoute[] = [
  {
    path: '/prevent-recursive-self-call'
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      {
        component: '@/pages/Home',
        title: 'Entry Demo',
      },
    ],
  },
];

export default routes;
