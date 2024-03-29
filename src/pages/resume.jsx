/* eslint-disable max-len */
import React, { useState } from 'react';

import HelmetMeta from '../components/Meta/HelmetMeta';
import styles from './resume.module.scss';
import damirJpg from '../files/damir.jpg';
import resumePdf from '../files/DamirResume2023.pdf';

const Resume = () => {
  const [cssSkillsSectionOpen, toggleCssSkills] = useState(true);
  const [jsSkillsSectionOpen, toggleJsSkills] = useState(true);
  const toggleCss = () => toggleCssSkills(!cssSkillsSectionOpen);
  const toggleJs = () => toggleJsSkills(!jsSkillsSectionOpen);

  const LinkSVG = () => (
    <svg
      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root"
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="OpenInNewIcon"
      height="20"
      width="20"
    >
      <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  );

  return (
    <section className={styles.resume}>
      <section className={styles.resumeContainer}>
        <HelmetMeta pageTitle="Resume | Web Development by Damir, Senior Software Engineer, Senior Web Developer, Senior Frontend Developer, Senior Frontend Engineer" />
        <header className={styles.header}>
          <img src={damirJpg} className={styles.resumeImg} alt="Damir" />
          <h1 className={styles.headline}>
            Damir Harambasic{' '}
            <span className={styles.hiddenText}>
              Resume | Senior Frontend Engineer
            </span>
            <span className={styles.emailLink}>
              <a href="mailto:damir.hara@gmail.com">damir.hara@gmail.com</a>
            </span>
            <span className={styles.link}>
              <a href="https://www.linkedin.com/in/damirharambasic">
                LinkedIn
                <LinkSVG />
              </a>
            </span>
          </h1>
          <div className={styles.resumeSummary}>
            <h3 className={styles.subHeadline}>SUMMARY</h3>
            <p className={styles.summaryParagraph}>
              My code is always pixel-perfect: As a
              technologist/developer/engineer with a keen eye for detail and
              design, I love making intuitive web-based client interactions that
              look as great as they function (no matter what browser or device).
              With site speed and user engagement as key factors in today&apos;s
              tech landscape, I prioritize performance alongside design,
              usability, and up-and-coming technologies.
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
                  <span className={styles.title}>
                    {cssSkillsSectionOpen ? '- CSS' : '+ CSS *'}
                  </span>
                  <div
                    className={`${styles.tooltip} ${
                      cssSkillsSectionOpen ? styles.open : styles.closed
                    }`}
                  >
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
                  <span className={styles.title}>
                    {jsSkillsSectionOpen ? '- JavaScript' : '+ JavaScript *'}
                  </span>
                  <div
                    className={`${styles.tooltip} ${
                      jsSkillsSectionOpen ? styles.open : styles.closed
                    }`}
                  >
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
              <h4>
                Sr. Frontend Engineer{' '}
                <span className={styles.spanLight}>@</span> Varo Bank
              </h4>
              <h5>January 2020 - Present</h5>
              <li>
                - Work on implementing the UX using TypeScript, React, Redux and
                GraphQL/Apollo.
              </li>
              <li>- Helped develop and launch the new bank.varomoney.com.</li>
              <li>
                - Participated in a mentorship program in collaboration with
                Hackbright Academy.
              </li>
              <li>
                - Part of a hiring commitee and helped mentor new Engineers.
              </li>
              <li>
                - Worked across multiple projects and teams including: client
                banking, internal tools and most recently working on our new
                Design System.
              </li>
            </ul>

            <ul className={styles.jobWrapper}>
              <h4>
                Sr. Frontend Developer{' '}
                <span className={styles.spanLight}>@</span> Overstock.com
              </h4>
              <h5>October 2019 - December 2019</h5>
              <li>
                - Built the Product Page in Node.js, Express, Webpack, Redux,
                and React.
              </li>
              <li>
                - Rebuilt the Webpack Server-side Rendering portion of our
                NodeJS powered app.
              </li>
            </ul>

            <ul className={styles.jobWrapper}>
              <h4>
                Sr. Frontend/Full-Stack Developer{' '}
                <span className={styles.spanLight}>@</span> tZERO
              </h4>
              <h5>September 2018 - October 2019</h5>
              <li>
                - Built the next generation Blockchain-based UI using React,
                Redux, Webpack, Express, and Node.js.
              </li>
              <li>- Filled in for multiple temporary Dev Lead roles.</li>
            </ul>

            <ul className={styles.jobWrapper}>
              <h4>
                Frontend Developer <span className={styles.spanLight}>@</span>{' '}
                Overstock.com
              </h4>
              <h5>October 2014 - September 2018</h5>
              <li>Product Page Dev Team:</li>
              <li>
                - Handled new feature implementation, A/B Tests, and bug
                squishing on product pages.
              </li>
              <li>
                - Worked on a full-stack Node.js, Express, React, Redux mobile
                web app as well as various client-side repo&apos;s.
              </li>
              <li>
                - Was involved in the design process of product with UX and
                Product teammates.
              </li>
              <li>
                - Built tools for our front-end workflow, such as implementing
                ES6 support and ReactJS into our repo.
              </li>
              <li>
                - Created reusable React components and NPM modules that are
                used by teams across Overstock.com.
              </li>
              <li>
                - During this time I was promoted to Senior Frontend Developer.
              </li>
              <li>Production Web Team:</li>
              <li>
                - Worked directly with Marketing, Product, and Back-end teams on
                various projects concerning the homepage of Overstock.com.
              </li>
              <li>
                - Handle initial front-end development, support and maintenance
                for Overstock.com microsites, homepage content, and promotional
                email/content/pages. Take part in QA and on-call when needed.
              </li>
            </ul>

            <ul className={styles.jobWrapper}>
              <h4>
                Freelance Developer and Designer{' '}
                <span className={styles.spanLight}>@</span> Damir Hara Design
              </h4>
              <h5>March 2013 - Present</h5>
              <li>
                <a className={styles.jobLink} href="https://www.damirthe.dev">
                  https://www.damirthe.dev
                </a>
              </li>
              <li>
                - Help companies/clients build websites and web apps from
                scratch or by jumping in the middle of the project. I&apos;ve
                worked on everything from simple one-page static websites to
                full web apps.
              </li>
              <li>
                <strong>Clients worked with:</strong> Infowrap.com, Cottonwood
                Electric, TheChapelMotorcycleShop.com.
              </li>
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
            <a href="mailto:yes@damir.fun">Get In Touch</a>
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
