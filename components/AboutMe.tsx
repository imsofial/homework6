import React from 'react';
import styles from '../styles/AboutMe.module.css'

const AboutMe: React.FC = () => (
  <section className={styles.me}>
    <img src="/img/photo_2024-06-08_17-06-14.jpg" alt="Sofia Goryunova" className={styles.me__img} />
    <h1 className={styles.me__note}>About me</h1>
    <hr className={styles.he} />
    <p className={styles.text}>
      My name is Sofia Goryunova. I am 19 y.o. I study at Innopolis University from 2023 year.
      I became interested in programming in 3rd grade when started attending a programming club.
      The first programming language that I was lucky enough to learn was QBasic.
      Then at 9 grade I decided to become a professional programmer and started to prepare for exams.
      That was the moment when I learned Python. I also take a lot of courses such as 2D games on python,
      data science on python, web development courses, etc.
    </p>
  </section>
);

export default AboutMe;
