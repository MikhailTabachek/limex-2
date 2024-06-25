// pages/home.tsx
import dynamic from 'next/dynamic';
import React from 'react';
import Layout from '../app/layout';

const Overview = dynamic(() => import('../app/components/Overview'), { ssr: false });

const Home: React.FC = () => {
  return (
    <Layout>
      <Overview />
    </Layout>
  );
};

export default Home;
