import React, { useEffect, useState } from 'react';
import useFetchCreateSession from 'services/hooks/useFetchCreateSession';
import { Layout, Loading } from 'components';
import { ProductList } from 'pages';

const AppContainer: React.FC = () => {
  const [sessionID, setSessionID] = useState<string | null>(
    sessionStorage.getItem('sessionID')
  );
  const { triggerQuery:createSession } = useFetchCreateSession();

  useEffect(() => {
    if (sessionID === null) {
      createSession({
        onSuccess:(data) => {
          setSessionID(data);
          sessionStorage.setItem('sessionID', data);
        }
      })
    }
  }, [sessionID]);

  if (sessionID === null) return <Loading />;
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default AppContainer;
