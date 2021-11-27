import { FC } from 'react';
import { Widget } from 'k2-portal';

const Portal: FC = (props) => {
  return <Widget src="/apps/lancang" style={{ height: '100%' }} appRoot />;
};

export default Portal;
