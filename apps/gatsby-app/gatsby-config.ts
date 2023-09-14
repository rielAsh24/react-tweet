import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  flags: {
    PARTIAL_HYDRATION: true,
  },
  siteMetadata: {
    title: `Gatsby-App`,
    author: `rielAsh24`,
  },
  plugins: [`gatsby-plugin-pnpm`],
}

export default config
