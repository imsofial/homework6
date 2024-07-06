// components/Header.tsx
import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        <li className={styles.headerItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.headerItem}>
          <Link href="/works">Works</Link>
        </li>
        <li className={styles.headerItem}>
          <Link href="/about">About me</Link>
        </li>
        <li className={styles.headerItem}>
          <Link href="/contacts">Contacts</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
