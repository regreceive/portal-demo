import React from 'react';
import { Typography } from 'antd';
import cs from 'classnames/bind';
import styles from './index.less';

interface Props {
  text?: React.ReactNode;
  alone?: boolean;
}

const cx = cs.bind(styles);

const Title: React.FC<Props> = (props) => {
  return (
    <div className={cx(styles.title, { alone: props.alone })}>
      <Typography.Title level={5} className={styles.text}>
        {props.text}
      </Typography.Title>
      {props.children}
    </div>
  );
};

export default Title;
