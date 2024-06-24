// pages/home.tsx
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';
import Layout from '../app/layout';
import { usePageContext } from '../app/pageContext';

const Overview = dynamic(() => import('../app/components/Overview'), { ssr: false });

const Home: React.FC = () => {
  const { setCurrentPage } = usePageContext();

  useEffect(() => {
    setCurrentPage('home');
  }, [setCurrentPage]);

  return (
    <Layout>
      <Overview />
    </Layout>
  );
};

export default Home;
