import React from "react";
import Header from "../components/Header";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

const ContactsPage: React.FC = () => (
  <>
    <Header />
    <main>
      <Contacts />
    </main>
    <Footer />
  </>
);

export default ContactsPage;
