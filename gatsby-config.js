/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Breaking News of the Day`,
  },
 
  plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/articleData/`,
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-react-helmet`,
  ]
}
