/* eslint-disable max-len */
import React, { useState } from 'react';

import HelmetMeta from '../components/Meta/HelmetMeta';
import styles from './resume.module.scss';
import damirJpg from '../files/damir.jpg';
import resumePdf from '../files/DamirResume2021.pdf';

const Resume = () => {
  const [cssSkillsSectionOpen, toggleCssSkills] = useState(true);
  const [jsSkillsSectionOpen, toggleJsSkills] = useState(true);
  const toggleCss = () => toggleCssSkills(!cssSkillsSectionOpen);
  const toggleJs = () => toggleJsSkills(!jsSkillsSectionOpen);

  return (
    <section className={styles.resume}>
      <section className={styles.resumeContainer}>
        <HelmetMeta pageTitle="Resume | Web Development by Damir, Senior Software Engineer, Senior Web Developer, Senior Frontend Developer, Senior Frontend Engineer" />
        <header className={styles.header}>
          <img src={damirJpg} className={styles.resumeImg} alt="Damir" />
          <h1 className={styles.headline}>
            Damir Harambasic <span className={styles.hiddenText}>Resume | Senior Frontend Engineer</span>
            <span className={styles.emailLink}><a href="mailto:damir.hara@gmail.com">damir.hara@gmail.com</a></span>
            <span className={styles.telLink}><a href="tel:1-801-865-4342">1(801)865-4342</a></span>
          </h1>
          <div className={styles.resumeSummary}>
            <h3 className={styles.subHeadline}>SUMMARY</h3>
            <p className={styles.summaryParagraph}>
              I love many aspects of technology and the web. I consider myself to be a technologist (developer/engineer) with a keen eye for detail and design. I love making intuitive web-based client interactions that look great and function properly across many browsers and devices. I care about performance as much as I do about design, usability, and up-and-coming technologies. My code is always pixel-perfect.
            </p>
          </div>
        </header>
        <main className={styles.mainSection}>
          <section className={styles.skillsContainer}>
            <div className={styles.skillsTitle}>
              <h3 className={styles.subHeadline}>SKILLS</h3>
            </div>
            <ul className={styles.skillsWrapper}>
              <li>- Semantic HTML</li>
              <li>
                <button
                  type="button"
                  className={styles.tooltipTargetCss}
                  onClick={toggleCss}
                >
                  <span className={styles.title}>{cssSkillsSectionOpen ? '- CSS' : '+ CSS *'}</span>
                  <div className={`${styles.tooltip} ${cssSkillsSectionOpen ? styles.open : styles.closed}`}>
                    <ul>
                      <li>PostCSS</li>
                      <li>LESS</li>
                      <li>SASS</li>
                      <li>CSS Modules</li>
                      <li>Styled Components</li>
                    </ul>
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={styles.tooltipTargetJavascript}
                  onClick={toggleJs}
                >
                  <span className={styles.title}>{jsSkillsSectionOpen ? '- JavaScript' : '+ JavaScript *'}</span>
                  <div className={`${styles.tooltip} ${jsSkillsSectionOpen ? styles.open : styles.closed}`}>
                    <ul>
                      <li>React</li>
                      <li>Redux</li>
                      <li>TypeScript</li>
                      <li>GraphQL</li>
                      <li>RESTful API&apos;s</li>
                      <li>Webpack</li>
                      <li>Node.js</li>
                      <li>Express</li>
                      <li>GatsbyJS</li>
                    </ul>
                  </div>
                </button>
              </li>
            </ul>
            <ul className={styles.skillsWrapper}>
              <li>- Git &amp; CLI chops</li>
              <li>- Troubleshooting </li>
              <li>- Responsive Web Design</li>
              <li>- Wireframing &amp; Prototyping</li>
              <li>- Cross-browser compatibility</li>
              <li>- Communication &amp; Liaison</li>
            </ul>
          </section>
          <section className={styles.experienceContainer}>
            <h3 className={styles.subHeadline}>EXPERIENCE</h3>
            <ul className={styles.jobWrapper}>
              <h4>Sr. Frontend Engineer <span className={styles.spanLight}>@</span> Varo Bank</h4>
              <h5>January 2020 - Present</h5>
              <li>- Building the first digital banking platform using TypeScript, React, Apollo, and GraphQL.</li>
            </ul>

            <ul className={styles.jobWrapper}>
              <h4>Sr. Frontend Developer <span className={styles.spanLight}>@</span> Overstock.com</h4>
              <h5>October 2019 - December 2019</h5>
              <li>- Built the Product Page in Node.js, Express, Webpack, Redux, and React.</li>
              <li>- Rebuilt the Webpack Server-side Rendering portion of our NodeJS powered app before seeking a new oppertunity.</li>
            </ul>

            <ul className={styles.jobWrapper}>
              <h4>Sr. Frontend Developer <span className={styles.spanLight}>@</span> tZERO</h4>
              <h5>September 2018 - October 2019</h5>
              <li>- Built the next generation Blockchain-based UI using React, Redux, Webpack, Express, and Node.js.</li>
              <li>- Filled in for multiple temporary Dev Lead roles.</li>
            </ul>

            <ul className={styles.jobWrapper}>
              <h4>Frontend Developer - Product Page Dev <span className={styles.spanLight}>@</span> Overstock.com</h4>
              <h5>October 2015 - September 2018</h5>
              <li>Product Page Dev Team:</li>
              <li>- Handled new feature implementation, A/B Tests, and bug squishing on product pages.</li>
              <li>- Worked on a full-stack Node.js, Express, React, Redux mobile web app as well as various client-side repo&apos;s.</li>
              <li>- Was involved in the design process of product with UX and Product teammates.</li>
              <li>- Built tools for our Front-end workflow. Such as implementing ES6 support and ReactJS into our repo.</li>
              <li>- Created reusable React components and NPM modules that are used by teams across Overstock.com.</li>
              <li>- During this time I was promoted to Senior Frontend Developer.</li>
              <li><strong>Previous Teams:</strong> ShopEx Dev, Production Marketing Dev.</li>
            </ul>

            <ul className={styles.jobWrapper}>
              <h4>Front End Developer - Production <span className={styles.spanLight}>@</span> Overstock.com</h4>
              <h5>October 2014 - October 2015</h5>
              <li>Production Web Team:</li>
              <li>- Worked directly with Marketing, Product, and Back-end teams on various projects concerning the homepage of Overstock.com.
              </li>
              <li>- Handle initial front-end development, support and maintenance for Overstock.com microsites, homepage content, and promotional email/content/pages. Take part in QA and on-call when needed.
              </li>
            </ul>

            <ul className={styles.jobWrapper}>
              <h4>Freelance Developer and Designer <span className={styles.spanLight}>@</span> Damir Hara Design</h4>
              <h5>March 2013 - Present</h5>
              <li><a className={styles.jobLink} href="https://www.damirthe.dev">https://www.damirthe.dev</a></li>
              <li>- Help companies/clients build websites and web apps from scratch or by jumping in the middle of the project. I&apos;ve worked on everything from simple one-page static websites to full web apps.</li>
              <li><strong>Clients worked with:</strong> Infowrap.com, Cottonwood Electric, TheChapelMotorcycleShop.com.</li>
            </ul>

          </section>
          <section className={styles.educationContainer}>
            <h3 className={styles.subHeadline}>EDUCATION</h3>
            <ul className={styles.jobWrapper}>
              <h4>University of Utah</h4>
              <h5>Class of 2014</h5>
              <li>BS, Mass Communication</li>
            </ul>
          </section>
        </main>
        <footer className={styles.footer}>
          <div className={styles.footerButton}>
            <a href="mailto:damir.hara@gmail.com">Get In Touch</a>
          </div>
          <div className={styles.footerButton}>
            <a href={resumePdf}>Download PDF</a>
          </div>
        </footer>
      </section>
    </section>
  );
};

export default Resume;
