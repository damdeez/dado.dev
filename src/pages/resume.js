/* eslint-disable max-len */
import React, { useState } from 'react';

import HelmetMeta from '../components/Meta/HelmetMeta';

import './resume.scss';
import damirJpg from '../files/damir.jpg';
import resumePdf from '../files/DamirResume2019.pdf';

const Resume = () => {
  const [cssSkillsSectionOpen, toggleCssSkills] = useState(true);
  const [jsSkillsSectionOpen, toggleJsSkills] = useState(true);
  const toggleCss = () => toggleCssSkills(!cssSkillsSectionOpen);
  const toggleJs = () => toggleJsSkills(!jsSkillsSectionOpen);

  return (
    <section id="resume-container">
      <HelmetMeta pageTitle="Damir Resume" />
      <header>
        <img src={damirJpg} id="resume-img" alt="Damir" />
        <h1>Damir Harambasic
          <span className="email-link"><a href="mailto:damir.hara@gmail.com">damir.hara@gmail.com</a></span>
          <span className="tel-link"><a href="tel:1-801-865-4342">(801) 865-4342</a></span>
        </h1>
        <div className="resume-summary">
          <h3>SUMMARY</h3>
          <p className="summary-paragraph">
          I love many aspects of technology and the web. I consider myself to be a technologist (developer/engineer) with a keen eye for detail and design. I love making intuitive web-based client interactions that look great and function properly across many browsers and devices. I care about performance as much as I do about design, usability, and up-and-coming technologies. My code is always pixel-perfect.
          </p>
        </div>
      </header>
      <main>
        <section className="skills-container">
          <div className="skills-title">
            <h3>SKILLS</h3>
          </div>
          <ul className="skills-wrapper">
            <li>- Semantic HTML</li>
            <li>
              <button type="button" className="tooltip-target-css" onClick={() => toggleCss()}>
                <span className="title">{cssSkillsSectionOpen ? '- CSS' : '+ CSS *'}</span>
                <div className={`tooltip ${cssSkillsSectionOpen}`}>
                  <ul>
                    <li>PostCSS</li>
                    <li>LESS</li>
                    <li>SASS</li>
                    <li>CSS Modules</li>
                  </ul>
                </div>
              </button>
            </li>
            <li>
              <button type="button" className="tooltip-target-javascript" onClick={() => toggleJs()}>
                <span className="title">{jsSkillsSectionOpen ? '- JavaScript' : '+ JavaScript *'}</span>
                <div className={`tooltip ${jsSkillsSectionOpen}`}>
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>ES6/ES7</li>
                    <li>JSON</li>
                    <li>RESTful API&apos;s</li>
                    <li>GruntJS &amp; Webpack</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>GatsbyJS</li>
                  </ul>
                </div>
              </button>
            </li>
          </ul>
          <ul className="skills-wrapper">
            <li>- Git &amp; CLI chops</li>
            <li>- Troubleshooting </li>
            <li>- Responsive Web Design</li>
            <li>- Wireframing &amp; Prototyping</li>
            <li>- Cross-browser compatibility</li>
            <li>- Communication &amp; Liaison</li>
          </ul>
        </section>

        <section className="experience-container">
          <h3>EXPERIENCE</h3>
          <ul className="job-wrapper">
            <h4>Frontend Developer <span className="span-light">@</span> tZERO</h4>
            <h5>September 2018 - Present</h5>
            <li>- Building the next generation Blockchain-based UI using React, Redux, Webpack, Express, and Node.js.</li>
          </ul>

          <ul className="job-wrapper">
            <h4>Frontend Developer - Product Page Dev <span className="span-light">@</span> Overstock.com</h4>
            <h5>October 2015 - September 2018</h5>
            <li>Product Page Dev Team:</li>
            <li>- Currently handling new feature implementation, A/B Tests, and squishing bugs on product pages.</li>
            <li>- Work on a full-stack Node.js, Express, React, Redux mobile web app as well as various client-side repo&apos;s.</li>
            <li>- Involved in the design process of product with UX and Product teammates.</li>
            <li>- Build tools for our Front-end workflow. Such as implementing ES6 and ReactJS tooling to our repo a few years ago.</li>
            <li>- Create reusable React components and NPM modules that are used by teams across Overstock.com.</li>
            <li>- Tech used: LESS (PostCSS), JavaScript (ES6, ES7), ReactJS, Redux, Webpack, JSON, and AJAX making calls to various APIs. I also use Git on the command line for version control.</li>
            <li>- Recently Promoted to Senior Frontend Developer.</li>
            <li><strong>Previous Teams:</strong> ShopEx Dev, Production Marketing Dev.</li>
          </ul>

          <ul className="job-wrapper">
            <h4>Front End Developer - Production <span className="span-light">@</span> Overstock.com</h4>
            <h5>October 2014 - October 2015</h5>
            <li>Production Web Team:</li>
            <li>- Working directly with Marketing, Product, and Back-end teams on various projects concerning the
                homepage of Overstock.com.
            </li>
            <li>- Handle initial front-end development, support and maintenance for Overstock.com microsites, homepage content, and promotional email/content/pages. And take part in QA and on-call when needed.
            </li>
          </ul>

          <ul className="job-wrapper">
            <h4>Freelance Developer and Designer <span className="span-light">@</span> Damir Hara Design</h4>
            <h5>March 2013 - Present</h5>
            <li>http://www.damirhara.com</li>
            <li>- Helping companies/clients build websites and web apps from scratch or by jumping in the middle of the project. I&apos;ve worked on everything from simple one-page static websites to full web apps built in AngularJS.</li>
            <li><strong>Clients worked with:</strong> Infowrap.com, Cottonwood Electric, TheChapelMotorcycleShop.com.</li>
          </ul>

          <ul className="job-wrapper">
            <h4>Integration Specialist/eCommerce Coordinator <span className="span-light">@</span> Experticity</h4>
            <h5>December 2012 - October 2014</h5>
            <li>- Work with clients, Project Managers and Account Coordinators to handle builds, updates, integration, and
              technical support on 3point5.com and Promotive.com stores by creating pipe delimited files using Excel.
            </li>
            <li>- Handle multiple technical e-commerce projects with clients alongside PM&apos;s and AM&apos;s through the staging
              phase into production.
            </li>
            <li>- Communicate with client from the kick-off call through the completion of project, if needed.</li>
            <li>- Manage workflow through JIRA, create tickets as needed and assign to appropriate individuals.</li>
            <li>- Work with Software Engineers to develop more efficient tools. Test and implement them into workflow.</li>
            <li>- Work with technologies and programs such as: HTML, inline CSS, MySQL, XML, EDI, Photoshop, Excel,
              Salesforce.com, etc.
            </li>
            <li><strong>Clients include:</strong> Zeal Optics, yurbuds, Stan&apos;s No Tubes, Carhartt, ArmourBite, One Industries, etc.</li>
          </ul>
        </section>
      </main>
      <footer>
        <section>
          <div className="footer-button"><a href="mailto:damir.hara@gmail.com">Get In Touch</a></div>
          <div className="footer-button"><a href={resumePdf}>Download PDF</a></div>
        </section>
      </footer>
    </section>
  );
};

export default Resume;
