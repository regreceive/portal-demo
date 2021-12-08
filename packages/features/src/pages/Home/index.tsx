import { FC, useCallback, useState } from 'react';
import { Button, Typography } from 'antd';
import { useLazyQuery } from 'k2-portal';
import BoxArea from '@/components/BoxArea';
import query from './menu.gql';

const Home: FC = () => {
  const [getMenu, { data }] = useLazyQuery(query.menu.gql());

  return (
    <>
      <BoxArea title="api请求示例">
        <Button
          onClick={() => {
            getMenu();
          }}
        >
          获得菜单
        </Button>
        <Typography.Paragraph>
          <pre style={{ maxHeight: 200, overflow: 'hidden auto' }}>
            Response: {JSON.stringify(data, null, 2)}
          </pre>
        </Typography.Paragraph>
      </BoxArea>
    </>
  );
};

export default Home;
