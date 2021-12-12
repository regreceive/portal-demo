import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  /** appKey是应用在建模器配置的应用key */
  appKey: 'test',
  appDefaultProps: {
    appKey: 'app1',
  },
};

export default portal;
