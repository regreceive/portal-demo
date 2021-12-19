import { FC, useEffect } from 'react';
import { Widget, portal } from 'k2-portal';

const Blank: FC = () => {
  useEffect(() => {
    // 浏览器刷新进入后，默认呈现的应用
    const appKey = portal.currAppKey;
    if (appKey) {
      // 优先地址栏
      portal.openApp(appKey, portal.currAppPath);
    } else {
      // 默认app
      portal.openApp('antd-ui');
    }
  }, []);
  return <Widget src="" appRoot style={{ height: '100%' }} />;
};

export default Blank;
