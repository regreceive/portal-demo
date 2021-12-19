import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  /** appKey是应用在建模器配置的应用key */
  appKey: 'test',
  nacos: {
    default: {
      appRootPathName: '/web/demo/apps'
    }
  }
};

export default portal;
