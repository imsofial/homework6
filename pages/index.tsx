import React from 'react';
import MainContent from '../components/MainContent';
import BackgroundImage from '../components/BackgroundImage';
import Layout from '../components/Layout';
import Head from 'next/head';

const HomePage: React.FC = () => (
  <>
    <Head>
      <title>About</title>
    </Head>
    <Layout>
      <MainContent />
      <BackgroundImage />
    </Layout>
  </>
);

export default HomePage;
