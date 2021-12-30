import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  nacos: {
    default: {
      appRootPathName: '/apps',
    }
  }
};

export default portal;
