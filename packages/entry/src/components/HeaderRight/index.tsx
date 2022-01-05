import { FC, useMemo, createElement } from 'react';
import {
  GitlabOutlined,
  InsertRowAboveOutlined,
  InsertRowLeftOutlined,
} from '@ant-design/icons';
import { useLocation, history } from 'umi';
import { portal } from 'k2-portal';
import ThemeSelector from './ThemeSelector';
import styles from './style.less';

type Props = {
  whiteIcon?: boolean;
};

const HeaderRight: FC<Props> = (props) => {
  const location = useLocation();

  const layout = useMemo(() => {
    return location.pathname.startsWith('/vertical')
      ? 'vertical'
      : 'horizontal';
  }, [location.pathname]);

  return (
    <div className={styles.right}>
      <a
        className={styles.action}
        onClick={() => {
          if (layout === 'vertical') {
            portal.openApp(portal.currAppKey, '', {
              replace: true,
              layout: 'app',
            });
          } else {
            portal.openApp(portal.currAppKey, '', {
              replace: true,
              layout: 'vertical',
            });
          }
        }}
      >
        {createElement(
          layout === 'vertical'
            ? InsertRowAboveOutlined
            : InsertRowLeftOutlined,
          { style: { fontSize: 18 } },
        )}
      </a>
      <a
        href="https://gitlab.kstonedata.k2/liyao/portal-monorepo-dem"
        className={styles.action}
      >
        <GitlabOutlined style={{ fontSize: 18 }} /> GitLab
      </a>
      <ThemeSelector whiteIcon={props.whiteIcon} />
    </div>
  );
};

HeaderRight.defaultProps = {
  whiteIcon: false,
};

export default HeaderRight;
