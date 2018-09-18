module.exports = {
  // Note: it must *not* have a trailing slash.
  // pathPrefix: '/~rababw',
  siteMetadata: {
    title: 'Multimedia Lab',
  },
  plugins: [
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
