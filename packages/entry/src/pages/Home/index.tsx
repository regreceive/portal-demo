import { FC, useCallback, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { portal, Widget } from 'k2-portal';
import styles from './style.less';

const defaultAppKey = 'app1';

const Home: FC = () => {
  const [currAppKey, setCurrAppKey] = useState(defaultAppKey);
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

  return (
    <div className={styles.entry}>
      <Menu selectedKeys={[currAppKey]} onClick={handleClick} mode="horizontal">
        <Menu.Item key="app1">app1</Menu.Item>
        <Menu.Item key="app2">app2</Menu.Item>
      </Menu>
      <Widget
        src="/prevent-recursive-self-call"
        appRoot
        className={styles.app}
      />
    </div>
  );
};

export default Home;
