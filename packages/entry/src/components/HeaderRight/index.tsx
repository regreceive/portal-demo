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
          const pathname =
            layout === 'vertical'
              ? location.pathname.replace('vertical', 'app')
              : location.pathname.replace('app', 'vertical');
          history.replace(pathname);
        }}
      >
        {createElement(
          layout === 'vertical'
            ? InsertRowAboveOutlined
            : InsertRowLeftOutlined,
          { style: { fontSize: 18 } },
        )}
      </a>
      <ThemeSelector whiteIcon={props.whiteIcon} />
      <a
        href="https://gitlab.kstonedata.k2/liyao/portal-monorepo-dem"
        className={styles.action}
      >
        <GitlabOutlined style={{ fontSize: 18 }} /> GitLab
      </a>
    </div>
  );
};

HeaderRight.defaultProps = {
  whiteIcon: false,
};

export default HeaderRight;
