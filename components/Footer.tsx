import React from 'react';
import style from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className={style.footer}>
    <div className={style.footer__content}>
      <p>&copy; 2024 Sofia Goryunova. All rights reserved.</p>
      <ul className={style.footer__list}>
        <li className={style.footer__item}>
          <Link href="./index">Home</Link>
        </li>
        <li className={style.footer__item}>
          <Link href="./works">Works</Link>
        </li>
        <li className={style.footer__item}>
          <Link href="./about">About me</Link>
        </li>
        <li className={style.footer__item}>
          <Link href="./contacts">Contacts</Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
