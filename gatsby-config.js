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
			"Contentful spaceId and the access token need to be provided.",
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
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					"@components": "src/components",
					"@layouts": "src/layouts",
					"@pages": "src/pages",
					"@styles": "src/styles",
					"@templates": "src/templates",
					"@helpers": "src/helpers",
					"@hooks": "src/hooks",
					"@static": "static",
				},
				extensions: ["js", "scss"],
			},
		},
		{
			resolve: "gatsby-source-contentful",
			options: getContentfulConfig(),
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /icons/,
				},
			},
		},
		{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Grace Ferolo`,
        short_name: `grace-ferolo`,
        start_url: `/`,
        background_color: `#8cb9c6`,
        theme_color: `#8cb9c6`,
        display: `minimal-ui`,
        icon: `static/favicon.png`, // This path is relative to the root of the site.
      },
    },
		// "gatsby-plugin-offline",
	],
}
