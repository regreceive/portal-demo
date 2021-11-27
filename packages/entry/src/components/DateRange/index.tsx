import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DatePicker, message } from 'antd';
import { RangeValue } from 'rc-picker/lib/interface';
import moment, { Moment } from 'moment';
import { usePrevious } from 'ahooks';

interface Props {
  show?: boolean;
  defaultValue?: [number, number];
  /**
   * 时间范围限制天数，默认不限制
   */
  limitDays?: number;
  /**
   * 显示最近几天
   */
  preset?: {
    recentDays?: number;
    recentHours?: number;
    recentMinutes?: number;
  };
  /** 是否展示时间，默认展示 */
  showTime?: boolean;
  onChange?: (range: Moment[]) => void;
}

const DateRange: FC<Props> = (props) => {
  const [range, setRange] = useState<[Moment | null, Moment | null]>([
    null,
    null,
  ]);
  const previous = usePrevious(range);

  // 默认时间范围
  useEffect(() => {
    let range: RangeValue<Moment> = null;

    if (Array.isArray(props.defaultValue)) {
      range = [moment(props.defaultValue[0]), moment(props.defaultValue[1])];
    }
    if (props.preset?.recentDays) {
      range = [
        moment().startOf('second').subtract(props.preset.recentDays, 'day'),
        moment().startOf('second'),
      ];
    } else if (props.preset?.recentHours) {
      range = [
        moment().startOf('second').subtract(props.preset.recentHours, 'hour'),
        moment().startOf('second'),
      ];
    } else if (props.preset?.recentMinutes) {
      range = [
        moment()
          .startOf('second')
          .subtract(props.preset.recentMinutes, 'minute'),
        moment().startOf('second'),
      ];
    }
    if (range !== null) {
      setRange(range);
    }
  }, [
    props.preset?.recentDays,
    props.preset?.recentHours,
    props.preset?.recentMinutes,
    props.defaultValue,
  ]);

  //  默认起止时间
  const defaultTimeRange = useMemo(() => {
    return [moment().startOf('day').add(8, 'hour'), moment().startOf('hour')];
  }, []);

  useEffect(() => {
    if (range) {
      if (range[0] && range[1]) {
        if (range[0].isSame(previous?.[0]) && range[1].isSame(previous?.[1])) {
          return;
        }
        if (
          props.limitDays &&
          range[1]?.diff(range[0], 'days') > props.limitDays
        ) {
          message.error(`时间范围不能超过${props.limitDays}天`);
          return;
        }
        props.onChange?.(range as Moment[]);
      }
    }
  }, [range, props.limitDays]);

  // 响应时间范围组件
  const handleChange = useCallback(
    (range: RangeValue<Moment>) => {
      if (range && range[0] && range[1]) {
        if (!props.showTime) {
          range[0].startOf('day');
          range[1].endOf('day');
        }
        setRange([...range]);
      } else {
        setRange([null, null]);
      }
    },
    [range, props.showTime],
  );

  // 昨天白班的时间范围
  const shortcut = useMemo<any>(() => {
    if (range[0] !== null && range[1]) {
      return {
        前1分钟: [
          range[0].clone().startOf('minute').subtract(1, 'minute'),
          range[0].clone().startOf('minute'),
        ],
        后1分钟: [
          range[1].clone().startOf('minute'),
          range[1].clone().startOf('minute').add(1, 'minute'),
        ],
        前1小时: [
          range[0].clone().startOf('hour').subtract(1, 'h'),
          range[0].clone().startOf('hour'),
        ],
        后1小时: [
          range[1].clone().startOf('hour'),
          range[1].clone().startOf('hour').add(1, 'hour'),
        ],
      };

      // return {
      //   前1天: [
      //     range[0].clone().startOf('day').subtract(1, 'day'),
      //     range[0].clone().startOf('day'),
      //   ],
      //   后1天: [
      //     range[1].clone().startOf('day'),
      //     range[1].clone().startOf('day').add(1, 'day'),
      //   ],
      // };
    }
    return {};
  }, [range, props.preset]);

  return props.show ? (
    <DatePicker.RangePicker
      value={range}
      onChange={handleChange}
      showTime={{
        format: 'HH:mm:ss',
        defaultValue: defaultTimeRange,
      }}
      ranges={shortcut}
      allowClear={false}
    />
  ) : null;
};

DateRange.defaultProps = {
  showTime: true,
};

export default DateRange;
