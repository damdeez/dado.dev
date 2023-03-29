import React from 'react';

import HelmetMeta from '../components/Meta/HelmetMeta';
import Main from '../components/Main/Main';
import './global.scss';

const App = () => (
  <main className="main-page-content">
    <HelmetMeta pageTitle="Frontend Engineer and Developer" />
    <Main />
  </main>
);

export default App;
