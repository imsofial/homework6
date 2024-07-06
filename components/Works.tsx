// src/components/Works.tsx

import React from 'react';
import styles from '../styles/Works.module.css';

const Works: React.FC = () => {
    return(
  <section className={styles.me}>
    <h1 className={styles.me__note}>Works</h1>
    <hr className={styles.he} />
    <ul className={styles.works__list}>
      <li>
        <figure className={styles.works__pictures}>
          <figcaption className={styles.caption}>study projects</figcaption>
          <img src="/img/фрейм 1.png" alt="study projects" height="300px" />
        </figure>
      </li>
      <li>
        <figure className={styles.works__pictures}>
          <figcaption className={styles.caption}>2D game on python</figcaption>
          <img src="/img/2dgame.png" alt="2D game on python" height="300px" />
        </figure>
      </li>
      <li>
        <figure className={styles.works__pictures}>
          <figcaption className={styles.caption}>console calculator on pyhton</figcaption>
          <img src="/img/calc.png" alt="console calculator on pyhton" height="300px" />
        </figure>
      </li>
    </ul>
  </section>
)
};

export default Works;