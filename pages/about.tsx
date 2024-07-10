import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const AboutPage: React.FC = () => (
  <>
    <Layout>
      <AboutMe />
    </Layout>
  </>
);

export default AboutPage;
