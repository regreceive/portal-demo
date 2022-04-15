import { FC, memo, useState } from 'react';
import { useDrop } from 'react-dnd';
import { Tag } from 'antd';
import styles from './style.less';

const Dustbin: FC = (props) => {
  const [state, setState] = useState<any[]>([]);

  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: 'knight',
    drop: (item) => {
      setState((state) => {
        return Array.from(new Set([...state, item]));
      });
    },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      };
    },
  }));

  return (
    <div
      className={`${styles.dustbin} ${
        isOver && canDrop ? styles.dragOver : ''
      }`}
      ref={dropRef}
    >
      {state.map((item) => (
        <Tag key={item.name}>{item.name}</Tag>
      ))}
    </div>
  );
};

export default memo(Dustbin);
