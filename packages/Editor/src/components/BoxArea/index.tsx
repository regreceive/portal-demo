import { FC, ReactNode } from 'react';
import Title from './components/Title';
import styles from './style.less';

interface Props {
  title?: ReactNode | string;
  rightArea?: ReactNode;
  height?: number;
  style?: React.CSSProperties;
}

const BoxArea: FC<Props> = (props) => {
  return (
    // @ts-ignore
    <div className={styles.boxArea} style={props.style}>
      {props.title && <Title text={props.title}>{props.rightArea}</Title>}
      <div
        style={{ height: props.height !== undefined ? props.height : 'unset' }}
        className={styles.content}
      >
        {props.children}
      </div>
    </div>
  );
};

export default BoxArea;
