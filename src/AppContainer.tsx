import React from 'react';
import useFetchCreateSession from 'services/hooks/useFetchCreateSession';
import { Layout, Loading } from 'components';
import { ProductList } from 'pages';

const AppContainer: React.FC = () => {
  const isCreateSession = localStorage.getItem('sessionID') !== null;

  if (!isCreateSession) {
    useFetchCreateSession({
      onSuccess: (data) => {
        localStorage.setItem('sessionID', data);
      },
    });
  }
  if(!isCreateSession) return <Loading />;
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default AppContainer;
