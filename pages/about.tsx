import React from 'react';
import AboutMe from '../components/AboutMe';
import Layout from '../components/Layout';
import Head from 'next/head';

const AboutPage: React.FC = () => (
  <>
  <Head>
    <title>About</title>
  </Head>
    <Layout>
      <AboutMe />
    </Layout>
  </>
);

export default AboutPage;
