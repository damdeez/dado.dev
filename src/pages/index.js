import React from 'react';
import { Link } from 'gatsby';

import HelmetMeta from '../components/Header/HelmetMeta';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './global.scss';

const Main = () => (
  <main className="main-page-content">
    <HelmetMeta pageTitle="Web Development by Damir" />
    <Header />
    <section className="links">
      <Link to="/resume">Resume</Link>
      <a href="https://github.com/damdeez">Github</a>
      <a href="https://twitter.com/damdeez">Twitter</a>
      <a href="https://www.linkedin.com/in/damirharambasic/">LinkedIn</a>
      <a href="mailto:damir.hara@gmail.com">Contact Me</a>
    </section>
    <Footer />
  </main>
);

export default Main;
