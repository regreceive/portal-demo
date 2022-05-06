import { FC } from 'react';
import { Typography } from 'antd';
import { Widget, utils, portal } from 'k2-portal';
import BoxArea from '@/components/BoxArea';
import StaticBar from './components/StaticBar';
import PaperDemo from './components/PaperDemo';
import ThreeDemo from './components/ThreeDemo';
import ReactDndDemo from './components/ReactDnd';
import JointDemo from './components/JointDemo';
import styles from './style.less';

const Home: FC = () => {
  return (
    <>
      <BoxArea
        title="兼容性说明"
        style={{ marginBottom: 12 }}
        rightArea={utils.isInWidget() && 
          <a
            href={`${portal.config.nacos.appRootPathName}/compatibility/`}
            target="_blank"
          >
            打开独立应用
          </a>
        }
      >
        <Typography.Paragraph>
          <blockquote>
            k2-portal
            使用代理方式，制造出一个半封闭的子应用沙盒。能够适配大多数基于 dom
            事件的开源库。对于使用独特方式获得自身 doc 的主流组件
            （比如Paper.js），可以通过修改沙盒增加对这类组件的支持。
          </blockquote>
        </Typography.Paragraph>
      </BoxArea>
      <div className={styles.grid}>
        <BoxArea title="ECharts">
          <StaticBar
            items={['紧急', '重要', '注意', '一般']}
            data={[
              { value: 10, itemStyle: { color: 'rgb(192,0,23)' } },
              { value: 20, itemStyle: { color: 'rgb(184,116,26)' } },
              { value: 30, itemStyle: { color: 'rgb(246,169,68)' } },
              { value: 40, itemStyle: { color: 'rgb(165,244,41)' } },
            ]}
          />
        </BoxArea>
        <BoxArea title="Paper">
          <PaperDemo />
        </BoxArea>
        <BoxArea title="Three">
          <ThreeDemo />
        </BoxArea>
        <BoxArea title="Monaco Editor">
          <Widget
            src="/editor"
            appProps={{ value: "alert('Hello World!')" }}
            style={{ height: '100%' }}
          />
        </BoxArea>
        <BoxArea title="React-dnd">
          <ReactDndDemo />
        </BoxArea>
        <BoxArea title="Joint">
          <JointDemo />
        </BoxArea>
      </div>
    </>
  );
};

export default Home;
