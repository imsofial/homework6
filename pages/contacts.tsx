import React from 'react';
import Header from '../components/Header';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

const ContactsPage: React.FC = () => (
  <>
    <Layout>
      <Contacts />
    </Layout>
  </>
);

export default ContactsPage;
