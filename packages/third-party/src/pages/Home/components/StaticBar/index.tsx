import { FC, useEffect } from 'react';
import useChart from 'k2-portal/lib/useChart';
import type { BarSeriesOption } from 'echarts';

type Props = {
  items?: string[];
  vertical?: boolean;
  data: BarSeriesOption['data'];
};

const StaticBar: FC<Props> = (props) => {
  const { ref, setOption } = useChart();

  useEffect(() => {
    const itemAxis = {
      type: 'category' as 'category',
      data: props.items,
      axisLine: { show: false },
      axisTick: { show: false },
    };
    setOption({
      grid: {
        right: '10%',
        top: props.vertical ? 20 : 10,
        bottom: 20,
      },
      xAxis: props.vertical
        ? itemAxis
        : { axisLabel: { show: false }, splitLine: { show: false } },
      yAxis: !props.vertical
        ? itemAxis
        : { axisLabel: { show: false }, splitLine: { show: false } },
      series: [
        {
          type: 'bar',
          realtimeSort: true,
          data: props.data,
          label: {
            show: true,
            position: props.vertical ? 'top' : 'right',
            valueAnimation: true,
          },
        },
      ],
      animationDuration: 0,
      animationDurationUpdate: 3000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
    });
  }, [props]);

  return <div style={{ height: '100%' }} ref={ref} />;
};

export default StaticBar;

StaticBar.defaultProps = {
  items: Array(6)
    .fill('item')
    .map((item, index) => `${item}${index + 1}`),
};
