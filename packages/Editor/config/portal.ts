import { IConfigFromPlugins } from '@/.umi/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  appDefaultProps: {
    value: "console.log('hello world')\n",
  },
};

export default portal;
