import { FC, useMemo } from 'react';
import { portal, Widget } from 'k2-portal';
import { useLocation } from 'umi';

const Portal: FC = () => {
  const location = useLocation();

  const appKey = useMemo(() => {
    return portal.currAppKey;
  }, [location.pathname]);

  return (
    <Widget src="/entry" appProps={{ appKey }} style={{ height: '100%' }} />
  );
};

export default Portal;
