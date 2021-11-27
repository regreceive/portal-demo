import { FC, useState } from 'react';
import { history } from 'umi';
import { Button } from 'antd';
import BoxArea from '@/components/BoxArea';

const Home: FC = () => {
  return (
    <>
      <BoxArea title="路由跳转">
        <Button
          onClick={() => {
            history.push('/home/page1');
          }}
        >
          /home/page1
        </Button>
      </BoxArea>
    </>
  );
};

export default Home;
