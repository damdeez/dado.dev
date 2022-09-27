import React from 'react';

import HelmetMeta from '../components/Meta/HelmetMeta';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './global.scss';

const Main = () => (
  <main className="main-page-content">
    <HelmetMeta pageTitle="Web Development by Damir" />
    {/* TODO: refactor the Header since its not really a header */}
    <Header />
    <Footer />
  </main>
);

export default Main;
