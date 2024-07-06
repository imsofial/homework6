// components/Layout.tsx
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import BackgroundImage from "./BackgroundImage";
import styles from "@styles/global.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <MainContent />
      <BackgroundImage />
    </div>
  );
};

export default Layout;
