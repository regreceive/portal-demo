import { IConfigFromPlugins } from '@/.umi/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  appDefaultProps: {
    value: '// Sending value to me.\n',
  },
};

export default portal;
