import { FC, useCallback, useState } from 'react';
import { Button, Typography } from 'antd';
import { api } from 'k2-portal';
import BoxArea from '@/components/BoxArea';

const Home: FC = () => {
  const [result, setResult] = useState<any>({});

  // 获得菜单
  const handleBtnClick = useCallback(async () => {
    const myQuery = `#graphql
      {
        bcf_front_menu {
          title
          app_key
        }
      }
    `;
    const res = await api.graphql.post({ query: myQuery });
  }, []);

  return (
    <>
      <BoxArea title="api请求示例">
        <Button onClick={handleBtnClick}>获得菜单</Button>
        <Typography.Paragraph>
          <pre style={{ maxHeight: 200, overflow: 'hidden auto' }}>
            Response: {JSON.stringify(result, null, 4)}
          </pre>
        </Typography.Paragraph>
      </BoxArea>
    </>
  );
};

export default Home;
