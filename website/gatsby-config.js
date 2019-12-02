module.exports = {
  // Note: it must *not* have a trailing slash.
  // pathPrefix: '/something',
  siteMetadata: {
    title: "Multimedia Lab"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `research_small`,
        path: `${__dirname}/src/images/research_small/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `students_images`,
        path: `${__dirname}/src/images/students/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `faculty_images`,
        path: `${__dirname}/src/images/faculty/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `logos`,
        path: `${__dirname}/src/images/logos/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `datasets`,
        path: `${__dirname}/src/images/datasets/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
};
