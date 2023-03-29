import React from 'react';
import { Helmet } from 'react-helmet';
import { string, node } from 'prop-types';

import favicon from '../../files/favicon.ico';

const HelmetMeta = ({
  children,
  pageTitle,
}) => (
  <Helmet>
    <meta
      name="description"
      content="Damir Harambasic is a Software Engineer based out of Salt Lake City, Utah, focused on UI/UX"
    />
    <title>{pageTitle} | damirthe.dev damirhara.dev dado.dev damir.fun</title>
    <link rel="shortcut icon" href={favicon} type="image/x-icon" />
    {children}
  </Helmet>
);

HelmetMeta.propTypes = {
  pageTitle: string.isRequired,
  children: node,
};

HelmetMeta.defaultProps = {
  children: null,
};

export default HelmetMeta;
