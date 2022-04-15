import { FC } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Box from './Box';
import Dustbin from './Dustbin';
import styles from './style.less';

const Demo: FC = (props) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.flex}>
        <div className={styles.drag}>
          <Box>item1</Box>
          <Box>item2</Box>
          <Box>item3</Box>
          <Box>item4</Box>
          <Box>item5</Box>
          <Box>item6</Box>
          <Box>item7</Box>
          <Box>item8</Box>
        </div>
        <Dustbin />
      </div>
    </DndProvider>
  );
};

export default Demo;
