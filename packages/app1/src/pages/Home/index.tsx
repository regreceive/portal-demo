import { FC, useCallback, useState } from 'react';
import { history } from 'umi';
import { Button, Typography } from 'antd';
import { getInstance, Widget } from 'k2-portal';
import BoxArea from '@/components/BoxArea';

const Home: FC = () => {
  const [result, setResult] = useState<any>({});

  // 获得菜单
  const handleBtnClick = useCallback(async () => {
    const res = await getInstance('bcf_front_menu', {
      param: {
        start: true,
      },
    });
    setResult(res);
  }, []);

  return (
    <>
      <BoxArea title="快速开始">
        <Typography.Paragraph>
          <pre>
            <div>$ mkdir app &amp;&amp; cd $_</div>
            <div>$ yarn create portal-app</div>
          </pre>
        </Typography.Paragraph>
      </BoxArea>

      <BoxArea title="api请求示例">
        <Button onClick={handleBtnClick}>获得菜单</Button>
        <Typography.Paragraph>
          <pre style={{ maxHeight: 200, overflow: 'hidden auto' }}>
            Response: {JSON.stringify(result, null, 4)}
          </pre>
        </Typography.Paragraph>
      </BoxArea>

      <BoxArea title="路由跳转">
        <Button
          onClick={() => {
            history.push('/home/page1');
          }}
        >
          /home/page1
        </Button>
      </BoxArea>

      <BoxArea title="子应用演示">
        <p>为方便演示，这里嵌套的是应用自身，在真实环境子应用是独立部署的</p>
        <Widget src={`//${location.host}/#/child`} appProps={{ points: ['id1', 'id2'] }} />
      </BoxArea>
    </>
  );
};

export default Home;
