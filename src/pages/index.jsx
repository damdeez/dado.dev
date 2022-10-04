import React from 'react';

import HelmetMeta from '../components/Meta/HelmetMeta';
import Main from '../components/Main/Main';
import './global.scss';

const App = () => (
  <main className="main-page-content">
    <HelmetMeta pageTitle="Web Development by Damir" />
    {/* TODO: refactor the Header since its not really a header */}
    <Main />
  </main>
);

export default App;
