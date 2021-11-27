import { FC, useCallback } from 'react';
import { Menu } from 'antd';
import { portal, Widget, useAppProps } from 'k2-portal';
import styles from './style.less';

const Home: FC = () => {
  const appProps = useAppProps<{ appKey: string }>();

  const handleClick = useCallback((e) => {
    portal.openApp(e.key, '');
  }, []);

  return (
    <div className={styles.entry}>
      <Menu
        selectedKeys={[appProps.appKey]}
        onClick={handleClick}
        mode="horizontal"
      >
        <Menu.Item key="app1">app1</Menu.Item>
        <Menu.Item key="app2">app2</Menu.Item>
      </Menu>
      <Widget src="" appRoot className={styles.app} />
    </div>
  );
};

export default Home;
