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
        name: `research_small`,
        path: `${__dirname}/src/images/research_small/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `research_large`,
        path: `${__dirname}/src/images/research_large/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `students_images`,
        path: `${__dirname}/src/images/students/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faculty_images`,
        path: `${__dirname}/src/images/faculty/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
