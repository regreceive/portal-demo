import { FC, useState } from 'react';
import BoxArea from '@/components/BoxArea';
import StaticBar from './components/StaticBar';
import PaperDemo from './components/PaperDemo';
import ThreeDemo from './components/ThreeDemo';
import styles from './style.less';

const Home: FC = () => {
  return (
    <div className={styles.grid1}>
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
      <BoxArea title="Three" height={0} style={{ gridColumnStart: 'span 2' }}>
        <ThreeDemo />
      </BoxArea>
    </div>
  );
};

export default Home;
