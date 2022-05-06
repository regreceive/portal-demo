import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  role: 'portal',
  declaredMessage: ['portal.theme'],
  nacos: {
    default: {
      appRootPathName: '/apps',
      service: {
        graphql: 'https://graphql-demo.mead.io/',
      },
    },
  },
};

export default {
  portal,
};
