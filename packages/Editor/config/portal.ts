import { IConfigFromPlugins } from '@/.umi/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  /** appKey是应用在建模器配置的应用key */
  appKey: 'editor',
  appDefaultProps: {
    value: '// Sending value to me.\n',
  },
};

export default portal;
