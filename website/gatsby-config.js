module.exports = {
  // Note: it must *not* have a trailing slash.
  // pathPrefix: '/~rababw',
  siteMetadata: {
    title: 'Multimedia Lab',
  },
  plugins: [
    // `gatsby-plugin-typography`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,

  ],
};
