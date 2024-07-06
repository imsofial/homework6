// components/MainContent.tsx
import React from "react";
import styles from "../styles/MainContent.module.css";

const MainContent: React.FC = () => {
  return (
    <main className={styles.main}>
      <section className={styles.me}>
        <p className={styles.meNote}>Sofia Goryunova</p>
      </section>
    </main>
  );
};

export default MainContent;
