import React from 'react';

import Header from '../components/Header/Header';
import './global.scss';

const Main = () => (
  <main>
    <Header />
    <section className="links">
      <a href="https://github.com/damdeez">Github</a>
      <a href="https://twitter.com/damdeez">Twitter</a>
      <a href="https://www.linkedin.com/in/damirharambasic/">Linkedin</a>
      <a href="/resume">Resume</a>
    </section>
    <footer>{' '}</footer>
  </main>
);

export default Main;
