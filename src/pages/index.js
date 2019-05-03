import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import Header from '../components/header/Header';
import './global.scss';
import favicon from '../images/favicon.ico';

const Main = () => (
  <main className="main-page-content">
    <Helmet>
      <meta
        name="description"
        content="Damir Harambasic is a Software Engineer based out of Salt Lake City, Utah, USA focused on UI/UX"
      />
      <title>Web Development by Damir</title>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    </Helmet>
    <Header />
    <section className="links">
      <a href="https://github.com/damdeez">Github</a>
      <a href="https://twitter.com/damdeez">Twitter</a>
      <a href="https://www.linkedin.com/in/damirharambasic/">Linkedin</a>
      <Link to="/resume">Resume</Link>
      <a href="mailto:damir.hara@gmail.com">Contact Me</a>
    </section>
    <footer>{' '}</footer>
  </main>
);

export default Main;
