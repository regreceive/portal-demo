import { FC, useCallback, useEffect, useState, createElement } from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  GitlabOutlined,
} from '@ant-design/icons';
import { portal, Widget, useAppProps } from 'k2-portal';
import HeaderRight from '@/components/HeaderRight';
import styles from './style.less';

const defaultAppKey = 'antd-ui';

const Home: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [currAppKey, setCurrAppKey] = useState(defaultAppKey);
  const appProps = useAppProps<{ appKey: string; theme?: { name: string } }>();

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

  const toggle = useCallback(() => {
    setCollapsed((state) => !state);
  }, []);

  return (
    <Layout style={{ height: '100%' }}>
      <Layout.Sider collapsed={collapsed} width={230}>
        <div className={`${styles.logo} ${collapsed ? styles.collapsed : ''}`}>
          <img
            src={
              collapsed
                ? require('@/assets/logo2.png')
                : require('@/assets/logo.png')
            }
          />
          <h1>k2-portal demo</h1>
        </div>
        <Menu selectedKeys={[currAppKey]} onClick={handleClick} theme="dark">
          <Menu.Item key="antd-ui" icon={<UserOutlined />}>
            antd-ui
          </Menu.Item>
          <Menu.Item key="compatibility" icon={<VideoCameraOutlined />}>
            兼容性
          </Menu.Item>
          <Menu.Item key="features" icon={<UploadOutlined />}>
            新特性
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header className={styles.header}>
          {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            style: { fontSize: 18 },
            onClick: toggle,
          })}

          <HeaderRight />
        </Layout.Header>
        <Layout.Content style={{ overflow: 'auto' }}>
          <Widget src="" appRoot />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Home;
