import { IConfigFromPlugins } from '@@/core/pluginConfig';

const portal: IConfigFromPlugins['portal'] = {
  /** appKey是该应用在建模器配置的应用key，如果不准备配置到建模器，不用改就可以了 */
  appKey: 'test',
  // nacos: '/nacos/v1/cs/configs?dataId=dfem.front.portal&group=default',
  service: {
    influxdb: '/repo/repo-data/dfem_point_test_influxdb',
    repo: '/repo/repos/dfem_point_test_influxdb',
  },
  mainApp: {
    appPath: '/apps',
  },
};

export default portal;
