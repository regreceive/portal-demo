import { FC, useMemo, useEffect } from 'react';
import { portal, Widget, useLazyQuery } from 'k2-portal';
import { useLocation } from 'umi';
import { api } from 'k2-portal';
import service from './index.gql';

const Portal: FC = () => {
  const location = useLocation();
  const [getApps, { data }] = useLazyQuery(service.apps.gql);

  useEffect(() => {
    console.log('hello');
    
    getApps();
  }, []);

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
