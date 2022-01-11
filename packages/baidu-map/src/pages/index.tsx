import { FC, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import '@/baidu/apiv2.0';
import '@/baidu/AreaRestriction';
import '@/baidu/modules';
import 'echarts/extension/bmap/bmap';
import BoxArea from '@/components/BoxArea';

// @ts-ignore
const BMap = window.BMap;
// @ts-ignore
const BMapLib = window.BMapLib;

const Home: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const myChart = echarts.init(ref.current!);
    myChart.setOption({
      title: {
        text: '离线地图',
      },
      bmap: {
        roam: true,
      },
    });

    const bmap = myChart.getModel().getComponent('bmap').getBMap();
    const point = new BMap.Point(118.78, 31.04);
    bmap.centerAndZoom(point, 7);
    bmap.setMaxZoom(16);
    bmap.setMinZoom(5);
    const bounds = new BMap.Bounds(
      new BMap.Point(111.64, 26.4),
      new BMap.Point(125.95, 35.28),
    );
    BMapLib.AreaRestriction.setBounds(bmap, bounds);

    return () => {
      myChart.dispose();
    }
  }, []);

  return (
    <>
      <BoxArea height={700}>
        <div ref={ref} style={{ height: '100%', position: 'relative' }} />
      </BoxArea>
    </>
  );
};

export default Home;
