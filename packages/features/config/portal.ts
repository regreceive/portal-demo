import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  nacos: {
    default: {
      appRootPathName: '/apps',
      service: {
        graphql: 'https://graphql-demo.mead.io/',
      },
    },
  },
};

export default portal;
