require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

function getContentfulConfig() {
  const contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST,
  }

  const { spaceId, accessToken } = contentfulConfig

  if (!spaceId || !accessToken) {
    throw new Error(
      "Contentful spaceId and the access token need to be provided."
    )
  }

  return contentfulConfig
}

module.exports = {
  siteMetadata: {
    title: "Grace Ferolo",
  },
  pathPrefix: "/graceferolo",
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-layout",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-contentful",
      options: getContentfulConfig(),
    },
    "gatsby-plugin-offline",
  ],
}
