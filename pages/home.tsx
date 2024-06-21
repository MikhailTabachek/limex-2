import React, { useEffect } from 'react';
import Layout from '../app/layout';
import Overview from '../app/components/Overview';
import { usePageContext } from '../app/pageContext';

const Home: React.FC = () => {
  const { setCurrentPage } = usePageContext();

  useEffect(() => {
    setCurrentPage('home');
  }, [setCurrentPage]);

  return (
    <Layout>
      <Overview />
      {/* <Stocks /> */}
      {/* <Watchlist /> */}
      {/* <Subscriptions /> */}
    </Layout>
  );
};

export default Home;
