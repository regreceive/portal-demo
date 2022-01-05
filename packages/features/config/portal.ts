import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  /** nacos 如果打开注释，会自动请求线上配置，其配置会覆盖与本地service合并 */
  nacos: {
    // url: '/nacos/v1/cs/configs?dataId=dfem.front.portal&group=default',
    default: {
      appRootPathName: '/web/demo/apps',
      service: {
        graphql: 'bcf_dev/graphql',
      },
    },
  },
};

export default portal;
