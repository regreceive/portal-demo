import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  role: 'portal',
  declaredMessage: ['portal.theme'],
  nacos: {
    default: {
      appRootPathName: '/apps',
      // ssoAuthorityUrl: 'https://dfem.k2assets.k2/oauth2',
      service: {
        graphql: '/bcf_dev/graphql',
      },
    },
  },
};

export default portal;
