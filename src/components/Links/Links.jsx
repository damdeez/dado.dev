import React from 'react';
import { Link } from 'gatsby';

import styles from './links.module.scss';

const Links = () => (
  <section className={styles.links}>
    <Link to="/resume">Resume</Link>
    <a href="https://github.com/damdeez">Github</a>
    <a href="https://twitter.com/damdeez">Twitter</a>
    <a href="https://www.linkedin.com/in/damirharambasic">LinkedIn</a>
    <a href="mailto:damir.hara@gmail.com">Contact Me</a>
  </section>
);

export default Links;
