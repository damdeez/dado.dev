import React from 'react';

import HelmetMeta from '../components/Meta/HelmetMeta';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Links from '../components/Links/Links';
import './global.scss';

const Main = () => (
  <main className="main-page-content">
    <HelmetMeta pageTitle="Web Development by Damir" />
    <Header />
    {/* <Links /> */}
    <Footer />
  </main>
);

export default Main;
