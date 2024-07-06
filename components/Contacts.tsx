import React from 'react';
import Image from 'next/image';
import githubIcon from '../../public/images/github.png';
import telegramIcon from '../../public/images/Telegram_alternative_logo.svg.png';
import emailIcon from '../../public/images/email.png';
import style from '../styles/Contacts.module.css';

const Contacts: React.FC = () => (
  <section className={style.me}>
    <h1 className={style.me__note}>Contacts</h1>
    <hr className={style.he} />
    <ul className={style.works__list}>
      <li>
        <figure className={style.works__pictures}>
          <a href="https://github.com/imsofial">
          <img src="/img/github.png" alt="GitHub" height={100}/>
          </a>
        </figure>
      </li>
      <li>
        <figure className="works__pictures">
          <a href="https://t.me/ssffffqq">
          <img src="/img/Telegram_alternative_logo.svg.png" alt="Telegram" height={100}/>
          </a>
        </figure>
      </li>
      <li>
        <figure className="works__pictures">
          <a href="mailto:s.goryunova@innopolis.university">
          <img src="/img/email.png" alt="Email" height={100}/>
          </a>
        </figure>
      </li>
    </ul>
  </section>
);

export default Contacts;
