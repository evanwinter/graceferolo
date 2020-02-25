import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
import { RTR } from "@helpers/rich-text-renderer"

const About = (props) => {
	const siteTitle = get(props, "data.site.siteMetadata.title")
	const copyJson = get(props, "data.contentfulAboutPageCopyRichTextNode.json")

	return (
		<>
			<Helmet title={"About - " + siteTitle} />
			{RTR(copyJson)}
		</>
	)
}

export default About

export const pageQuery = graphql`
	query AboutQuery {
		site {
			siteMetadata {
				title
			}
		}
		contentfulAboutPageCopyRichTextNode {
			json
		}
	}
`
