import { FC, useCallback, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { portal, Widget, useAppProps } from 'k2-portal';
import styles from './style.less';

const defaultAppKey = 'antd-ui';

const Home: FC = () => {
  const [currAppKey, setCurrAppKey] = useState(defaultAppKey);
  const appProps = useAppProps<{ appKey: string }>();

  const handleClick = useCallback((e) => {
    portal.openApp(e.key, '');
    setCurrAppKey(e.key);
  }, []);

  useEffect(() => {
    // 浏览器刷新进入后，默认呈现的应用
    const appKey = portal.currAppKey;
    if (appKey) {
      // 优先地址栏
      portal.openApp(appKey, portal.currAppPath);
      setCurrAppKey(appKey);
    } else {
      // 默认app
      portal.openApp(defaultAppKey);
    }
  }, []);

  useEffect(() => {
    if (appProps.appKey) {
      setCurrAppKey(appProps.appKey);
    }
  }, [appProps.appKey]);

  return (
    <div className={styles.entry}>
      <Menu selectedKeys={[currAppKey]} onClick={handleClick} mode="horizontal">
        <Menu.Item key="antd-ui">antd-ui</Menu.Item>
        <Menu.Item key="compatibility">兼容性</Menu.Item>
        <Menu.Item key="features">新特性</Menu.Item>
      </Menu>
      <Widget src="" appRoot className={styles.app} />
    </div>
  );
};

export default Home;
