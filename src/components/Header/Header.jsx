import React from 'react';

import styles from './header.module.scss';
import damirJpg from '../../files/damir.jpg';

const Header = () => (
  <header className={styles.header}>
    <img className={styles.damirImg} src={damirJpg} alt="Damir" />
    <div className={styles.headerText}>
      <h1>{'>'} Hello, my name is Damir.</h1>
      <h2>I like to create experiences.</h2>
    </div>
  </header>
);

export default Header;
