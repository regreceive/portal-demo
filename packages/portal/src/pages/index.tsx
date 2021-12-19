import { FC, useMemo } from 'react';
import { portal, Widget } from 'k2-portal';
import { useLocation } from 'umi';

const Portal: FC = () => {
  const location = useLocation();

  const [appKey, layout] = useMemo(() => {
    return [portal.currAppKey, portal.currLayout];
  }, [location.pathname]);

  return (
    <Widget
      src={`/entry/#/${layout}`}
      appProps={{ appKey }}
      style={{ height: '100%', overflow: 'hidden auto' }}
    />
  );
};

export default Portal;
