import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  /** appKey是应用在建模器配置的应用key */
  appKey: 'entry',
  role: 'portal',
  declaredMessage: ['portal.theme'],
  nacos: {
    default: {
      appRootPathName: '/apps',
    },
  },
};

export default {
  portal,
};
