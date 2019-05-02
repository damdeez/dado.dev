import React from 'react';

import './header.scss';
import damirJpg from '../../images/damir.jpg';

const Header = () => (
  <header>
    <img className="damir-img" src={damirJpg} alt="Damir" />
    <h1>Hello, my name is Damir.</h1>
    <h2>I like to create experiences.</h2>
  </header>
);

export default Header;
