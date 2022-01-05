import { FC, useState } from 'react';
import { Button, Space } from 'antd';
import { useLazyQuery, Widget } from 'k2-portal';
import BoxArea from '@/components/BoxArea';
import service from '@/services/index.gql';
import styles from './style.less';

const code = `import { FC } from 'react';
import { Button } from 'antd';
import { useLazyQuery } from 'k2-portal';
import service from './index.gql';

const Home: FC = () => {
  const [getApps, { data }] = useLazyQuery(service.apps.gql);
  const [promiseData, setPromiseData] = useState<any>();

  return (
    <>
      <pre>
        Response: {JSON.stringify(promiseData || data, null, 2)}
      </pre>
      <Button
        onClick={() => {
          getApps();
          setPromiseData(undefined);
        }}
      >
        hooks方式
      </Button>
      <Button
        onClick={() => {
          service.menu
            .send({ title: '应用配置' })
            .then((res) => setPromiseData(res));
        }}
      >
        promise方式
      </Button>
    </>
  );
};

export default Home;
`;

const Home: FC = () => {
  const [getApps, { data }] = useLazyQuery(service.apps.gql);
  const [promiseData, setPromiseData] = useState<any>();

  return (
    <>
      <BoxArea title="建模器3.0请求示例" height={300}>
        <div className={styles.grid2}>
          <div
            style={{ position: 'relative', height: '100%', overflow: 'auto' }}
          >
            <pre className={styles.code}>
              Response: {JSON.stringify(promiseData || data, null, 2)}
            </pre>
            <div style={{ position: 'absolute', right: 5, top: 5 }}>
              <Space>
                <Button
                  onClick={() => {
                    getApps();
                    setPromiseData(undefined);
                  }}
                >
                  hooks方式
                </Button>
                <Button
                  onClick={() => {
                    service.menu
                      .send({ title: '应用配置' })
                      .then((res) => setPromiseData(res));
                  }}
                >
                  promise方式
                </Button>
              </Space>
            </div>
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
