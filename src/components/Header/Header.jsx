import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.scss';
import damirJpg from '../../files/damir.jpg';

const Header = () => (
  <header className={styles.header}>
    <img className={styles.damirImg} src={damirJpg} alt="Damir" />
    <div className={styles.headerText}>
      <h1>{'>'} Hi, my name is Damir.</h1>
      <h3>I am a Software Engineer focused on the the Web. You can check out my resume <Link to="/resume">here</Link>. You can also find me on these social mediums: <a href="https://github.com/damdeez">Github</a>, <a href="https://twitter.com/damdeez">Twitter</a>, <a href="https://www.linkedin.com/in/damirharambasic">LinkedIn</a>, or feel free to send me a good ol&apos; <a href="mailto:damir.hara@gmail.com">email</a>. ☕️</h3>
    </div>
  </header>
);

export default Header;
