/* eslint-disable indent */
module.exports = {
  siteMetadata: {
    title: 'damirthe.dev',
    url: 'http://www.damirthe.dev',
    description: 'Web Development by Damir.',
    twitterUsername: '@damdeez',
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-sharp',
    },
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-44100425-2',
      },
    },
  ],
};
