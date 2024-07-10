import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import BackgroundImage from "../components/BackgroundImage";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const HomePage: React.FC = () => (
  <>
    <Layout>
      <MainContent />
      <BackgroundImage />
    </Layout>
  </>
);

export default HomePage;
