import React from 'react';
import Contacts from '../components/Contacts';
import Layout from '../components/Layout';
import Head from 'next/head';

const ContactsPage: React.FC = () => (
  <>
    <Head>
      <title>About</title>
    </Head>
    <Layout>
      <Contacts />
    </Layout>
  </>
);

export default ContactsPage;
