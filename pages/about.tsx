import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";

const AboutPage: React.FC = () => (
  <>
    <Header />
    <main>
      <AboutMe />
    </main>
    <Footer />
  </>
);

export default AboutPage;
