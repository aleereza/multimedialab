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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `research_images`,
        path: `${__dirname}/src/images/research/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `students_images`,
        path: `${__dirname}/src/images/students/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
};
