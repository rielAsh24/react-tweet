/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  flags: {
    PARTIAL_HYDRATION: true,
  },
  siteMetadata: {
    title: `Gatsby-App`,
    author: `rielAsh24`,
  },
  plugins: [
    `gatsby-plugin-pnpm`,
  ],
}
