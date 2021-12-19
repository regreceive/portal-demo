import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  /** appKey是该应用在建模器配置的应用key，如果不准备配置到建模器，不用改就可以了 */
  appKey: 'portal',
  role: 'portal',
  nacos: {
    url: '/nacos/v1/cs/configs?dataId=dfem.front.portal&group=default',
    default: {
      appRootPathName: '/web/demo/apps',
      ssoAuthorityUrl: 'https://dfem.k2assets.k2/oauth2',
    },
  },
};

export default portal;
