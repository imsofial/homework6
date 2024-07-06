import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";

const HomePage: React.FC = () => (
  <>
    <Header />
    <main>
      <MainContent />
      <BackgroundImage />
    </main>
    <Footer />
  </>
);

export default HomePage;
