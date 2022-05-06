import { FC, useState } from 'react';
import { Button, Space } from 'antd';
import { useLazyQuery, Widget, utils, portal } from 'k2-portal';
import BoxArea from '@/components/BoxArea';
import service from '@/services/index.gql';
import styles from './style.less';

const code = `import { FC } from 'react';
import { Button } from 'antd';
import { useLazyQuery } from 'k2-portal';
import service from './index.gql';

const Home: FC = () => {
  const [getApps, { data }] = useLazyQuery(service.users.gql);
  const [promiseData, setPromiseData] = useState<any>();

  return (
    <>
      <pre>
        Response: {JSON.stringify(promiseData || data, null, 2)}
      </pre>
      <Button
        onClick={() => {
          getApps();
        }}
      >
        hooks方式
      </Button>
      <Button
        onClick={() => {
          service.post
            .send({ id: 'af94bcc5-4d34-49a0-b898-c834c0bea612' })
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
  const [getPosts, { data, loading }] = useLazyQuery(service.posts.gql);
  const [promiseData, setPromiseData] = useState<any>();
  const [promiseLoading, setPromiseLoading] = useState(false);

  return (
    <>
      <BoxArea
        title="graphql 请求示例"
        height={400}
        rightArea={
          utils.isInWidget() && (
            <a
              href={`${portal.config.nacos.appRootPathName}/features/`}
              target="_blank"
            >
              打开独立应用
            </a>
          )
        }
      >
        <div className={styles.grid}>
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
                    setPromiseData(undefined);
                    getPosts();
                  }}
                  loading={loading}
                >
                  hooks方式
                </Button>
                <Button
                  onClick={() => {
                    setPromiseLoading(true);
                    service.post
                      .send({ id: 'af94bcc5-4d34-49a0-b898-c834c0bea612' })
                      .then((res) => {
                        setPromiseData(res);
                        setPromiseLoading(false);
                      });
                  }}
                  loading={promiseLoading}
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
        <div style={{ lineHeight: 2, color: 'rgba(127,127,127,0.5)' }}>
          The service of GraphQL above is provided by{' '}
          <a href="https://graphql-demo.mead.io/">mead.io</a>
        </div>
      </BoxArea>
    </>
  );
};

export default Home;
