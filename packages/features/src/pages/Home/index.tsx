import { FC } from 'react';
import { Button } from 'antd';
import { useLazyQuery, Widget } from 'k2-portal';
import BoxArea from '@/components/BoxArea';
import service from '@/services/menu.gql';
import styles from './style.less';

const code = `import { FC } from 'react';
import { Button } from 'antd';
import { useLazyQuery } from 'k2-portal';
import service from './menu.gql';

const Home: FC = () => {
  const [getMenu, { data }] = useLazyQuery(service.menu.gql);

  return (
    <>
      <pre>
        Response: {JSON.stringify(data, null, 2)}
      </pre>
      <Button
        onClick={() => {
          getMenu();
        }}
      >
        获得菜单
      </Button>
    </>
  );
};

export default Home;
`;

const Home: FC = () => {
  const [getMenu, { data }] = useLazyQuery(service.menu.gql, {
    variables: { id: '2' },
  });

  return (
    <>
      <BoxArea title="建模器3.0请求示例" height={300}>
        <div className={styles.grid2}>
          <div style={{ position: 'relative' }}>
            <pre className={styles.code}>
              Response: {JSON.stringify(data, null, 2)}
            </pre>
            <Button
              onClick={() => {
                // hook方式
                getMenu();
                // promise方式
                service.menu.send({ id: '2' });
              }}
              style={{ position: 'absolute', right: 5, top: 5 }}
            >
              获得菜单
            </Button>
          </div>
          <Widget
            src="/editor"
            appProps={{ value: code }}
            style={{ height: '100%' }}
          />
        </div>
      </BoxArea>
    </>
  );
};

export default Home;
