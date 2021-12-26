import { FC, useMemo } from 'react';
import { Menu, Dropdown } from 'antd';
import { FormatPainterOutlined } from '@ant-design/icons';
import { portal, useAppProps, useMessage } from 'k2-portal';
import styles from './style.less';

type Props = {
  whiteIcon?: boolean;
};

const ThemeSelector: FC<Props> = (props) => {
  const message = useMessage();

  const menu = useMemo(() => {
    console.log('hello');
    
    return (
      <Menu
        onClick={(e) => {
          portal.setTheme(e.key);
        }}
        selectedKeys={[message['portal.theme']?.name ?? '']}
      >
        {portal.config.antdThemes.map((theme) => (
          <Menu.Item key={theme.name}>{theme.name}</Menu.Item>
        ))}
      </Menu>
    );
  }, [message['portal.theme']]);

  return (
    <Dropdown overlay={menu} className={`${styles.action} ${styles.icon}`}>
      <FormatPainterOutlined
        style={props.whiteIcon ? { color: 'white' } : {}}
      />
    </Dropdown>
  );
};

export default ThemeSelector;
