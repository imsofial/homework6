// src/pages/works.tsx

import React from "react";
import Header from "../components/Header";
import Works from "../components/Works";
import ComicFetcher from "../components/ComicFetcher";
import Footer from "../components/Footer";

const WorksPage: React.FC = () => (
  <>
    <Header />
    <main>
      <Works />
      <ComicFetcher />
    </main>
    <Footer />
  </>
);

export default WorksPage;
