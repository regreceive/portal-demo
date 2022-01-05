import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  role: 'portal',
  declaredMessage: ['portal.theme'],
  nacos: {
    default: {
      appRootPathName: '/apps',
      service: {
        graphql: '/bcf_dev/graphql',
      },
    },
  },
};

export default {
  portal,
};
