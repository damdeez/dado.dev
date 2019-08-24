import React from 'react';

import './header.scss';
import damirJpg from '../../files/damir.jpg';

const Header = () => (
  <header className="header">
    <img className="damir-img" src={damirJpg} alt="Damir" />
    <div className="header-text">
      <h1>{'>'} Hello, my name is Damir.</h1>
      <h2>I like to create experiences.</h2>
    </div>
  </header>
);

export default Header;
