/* eslint-disable indent */
module.exports = {
  siteMetadata: {
    title: 'Dado.dev',
    siteUrl: 'http://www.dado.dev',
    description: 'Dado is the best!',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
    },
    {
      resolve: 'gatsby-plugin-sass',
    },
    {
      resolve: '@danbruegge/gatsby-plugin-stylelint',
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
  ],
};
