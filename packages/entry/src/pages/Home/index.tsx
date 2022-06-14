import { FC, useCallback, useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { portal, Widget, useAppProps } from 'k2-portal';
import HeaderRight from '@/components/HeaderRight';
import logo from '@/assets/logo.png';
import styles from './style.less';

const defaultAppKey = 'antd-ui';

const Home: FC = () => {
  const [currAppKey, setCurrAppKey] = useState(defaultAppKey);
  const appProps = useAppProps<{ appKey: string }>();

  const handleClick = useCallback((e) => {
    portal.openApp(e.key, '', { replace: true });
    setCurrAppKey(e.key);
  }, []);

  useEffect(() => {
    // 浏览器刷新进入后，默认呈现的应用
    const appKey = portal.currAppKey;
    if (appKey) {
      // 优先地址栏
      portal.openApp(appKey, portal.currAppPath, { replace: true });
      setCurrAppKey(appKey);
    } else {
      // 默认app
      portal.openApp(defaultAppKey, '', { replace: true });
    }
  }, []);

  useEffect(() => {
    if (appProps.appKey) {
      setCurrAppKey(appProps.appKey);
    }
  }, [appProps.appKey]);

  return (
    <Layout className={styles.layout}>
      <Layout.Header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} />
          <h1>k2-portal demo</h1>
        </div>
        <Menu
          selectedKeys={[currAppKey]}
          onClick={handleClick}
          mode="horizontal"
          theme="dark"
          items={[
            { key: 'antd-ui', icon: <UserOutlined />, label: 'antd-ui' },
            {
              key: 'compatibility',
              icon: <VideoCameraOutlined />,
              label: '兼容性',
            },
            { key: 'features', icon: <UploadOutlined />, label: '新特性' },
          ]}
        />
        <HeaderRight whiteIcon />
      </Layout.Header>
      <Layout.Content className={styles.content}>
        <Widget src="" appRoot style={{ height: '100%' }} />
      </Layout.Content>
    </Layout>
  );
};

export default Home;
