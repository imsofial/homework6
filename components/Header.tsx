// components/Header.tsx
import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        <li className={styles.headerItem}><a href="/">Home</a></li>
        <li className={styles.headerItem}><a href="/works">Works</a></li>
        <li className={styles.headerItem}><a href="/about">About me</a></li>
        <li className={styles.headerItem}><a href="/contacts">Contacts</a></li>
      </ul>
    </header>
  );
};

export default Header;
