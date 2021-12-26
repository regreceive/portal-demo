import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  /** appKey是该应用在建模器配置的应用key，如果不准备配置到建模器，不用改就可以了 */
  appKey: 'portal',
  role: 'portal',
  declaredMessage: ['portal.theme'],
  nacos: {
    default: {
      appRootPathName: '/apps',
      // ssoAuthorityUrl: 'https://dfem.k2assets.k2/oauth2',
    },
  },
};

export default portal;
