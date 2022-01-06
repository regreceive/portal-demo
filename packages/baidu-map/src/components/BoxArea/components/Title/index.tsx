import React from 'react';
import cs from 'classnames/bind';
import { ReactComponent as Icon } from './icon.svg';
import styles from './index.less';

interface Props {
  text?: React.ReactNode;
  alone?: boolean;
}

const cx = cs.bind(styles);

const Title: React.FC<Props> = (props) => {
  return (
    <div className={cx(styles.title, { alone: props.alone })}>
      <div className={styles.text}>
        <Icon />
        {props.text}
      </div>
      {props.children}
    </div>
  );
};

export default Title;
