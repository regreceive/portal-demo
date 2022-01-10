import { FC, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import '@/baidu/apiv2.0';
import '@/baidu/AreaRestriction';
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
        text: '全国主要城市空气质量',
      },
      bmap: {
        roam: true,
      },
    });

    const bmap = myChart.getModel().getComponent('bmap').getBMap();
    const point = new BMap.Point(115.836446, 39.069879);
    bmap.centerAndZoom(point, 12);
    //liangshanheng 取消图片框定范围。
//    bmap.setMaxZoom(21);
//    bmap.setMinZoom(1);
//    const bounds = new BMap.Bounds(
//      new BMap.Point(111.64, 26.4),
//      new BMap.Point(125.95, 35.28),
//    );
//    BMapLib.AreaRestriction.setBounds(bmap, bounds);

    //liangshanheng 设定地图图片所需要的样式，可更具需要进行修改。
    bmap.enableScrollWheelZoom(true);
    bmap.setMapStyle({
      styleJson: [{
          "featureType": "water",
          "elementType": "all",
          "stylers": {
              "color": "#044161"
          }
      }, {
          "featureType": "land",
          "elementType": "all",
          "stylers": {
              "color": "#091934"
          }
      }, {
          "featureType": "boundary",
          "elementType": "geometry",
          "stylers": {
              "color": "#064f85"
          }
      }, {
          "featureType": "railway",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "highway",
          "elementType": "geometry",
          "stylers": {
              "color": "#004981"
          }
      }, {
          "featureType": "highway",
          "elementType": "geometry.fill",
          "stylers": {
              "color": "#005b96",
              "lightness": 1
          }
      }, {
          "featureType": "highway",
          "elementType": "labels",
          "stylers": {
              "visibility": "on"
          }
      }, {
          "featureType": "arterial",
          "elementType": "geometry",
          "stylers": {
              "color": "#004981",
              "lightness": -39
          }
      }, {
          "featureType": "arterial",
          "elementType": "geometry.fill",
          "stylers": {
              "color": "#00508b"
          }
      }, {
          "featureType": "poi",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "green",
          "elementType": "all",
          "stylers": {
              "color": "#056197",
              "visibility": "off"
          }
      }, {
          "featureType": "subway",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "manmade",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "local",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "arterial",
          "elementType": "labels",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "boundary",
          "elementType": "geometry.fill",
          "stylers": {
              "color": "#029fd4"
          }
      }, {
          "featureType": "building",
          "elementType": "all",
          "stylers": {
              "color": "#1a5787"
          }
      }, {
          "featureType": "label",
          "elementType": "all",
          "stylers": {
              "visibility": "off"
          }
      }, {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": {
              "color": "#ffffff"
          }
      }, {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": {
              "color": "#1e1c1c"
          }
      }, {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": {
              "visibility": "off"
          }
      },{
          "featureType": "road",
          "elementType": "labels",
          "stylers": {
              "visibility": "off"
          }
      }]
  });

    return () => {
      myChart.dispose();
    }
  }, []);

  return (
    <>
      <BoxArea height={3000}>
        <div ref={ref} style={{ height: '100%', position: 'relative' }} />
      </BoxArea>
    </>
  );
};

export default Home;
