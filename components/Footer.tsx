import React from 'react';
import style from '../styles/Footer.module.css';

const Footer: React.FC = () => (
  <footer className={style.footer}>
    <div className={style.footer__content}>
      <p>&copy; 2024 Sofia Goryunova. All rights reserved.</p>
      <ul className={style.footer__list}>
        <li className={style.footer__item}><a href="./index">Home</a></li>
        <li className={style.footer__item}><a href="./works">Works</a></li>
        <li className={style.footer__item}><a href="./about">About me</a></li>
        <li className={style.footer__item}><a href="./contacts">Contacts</a></li>
      </ul>
    </div>
  </footer>
);

export default Footer;
