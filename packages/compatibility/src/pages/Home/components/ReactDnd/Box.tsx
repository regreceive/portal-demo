import { FC } from 'react';
import { useDrag } from 'react-dnd';

const Box: FC = (props) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'knight',
      item: {name: props.children},
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [],
  );

  return (
    <div ref={dragRef} style={{ cursor: 'move', opacity }}>
      {props.children}
    </div>
  );
};

export default Box;
