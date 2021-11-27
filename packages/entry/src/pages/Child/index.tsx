import { useContext } from 'react';
import { Typography } from 'antd';
import { AppContext } from 'k2-portal';
import styles from './style.less';

type AppProps = {
  points: string[];
}

const Child = () => {
  const appProps = useContext<AppProps>(AppContext);
  return (
    <div className={styles.child}>
      <Typography.Title level={5}>我是子应用，接收到的应用传参</Typography.Title>
        <Typography.Paragraph>
          <pre>
            {JSON.stringify(appProps, null, 2)}
          </pre>
        </Typography.Paragraph>
    </div>
  )
}

export default Child;