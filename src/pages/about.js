import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"

import Image from "@components/Image"

import { RTR } from "@helpers/rich-text-renderer"

const About = (props) => {
	const { image } = get(props, "data.allContentfulHomePage.edges[0].node") // Extract image
	const siteTitle = get(props, "data.site.siteMetadata.title")
	const copyJson = get(props, "data.contentfulAboutPageCopyRichTextNode.json")

	return (
		<>
			<Helmet title={"About - " + siteTitle} />
			<div className="About--layout">
				<div className="About--copy">{RTR(copyJson)}</div>
			</div>
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
		allContentfulHomePage(limit: 1) {
			edges {
				node {
					image {
						fluid(maxWidth: 400, resizingBehavior: SCALE) {
							...GatsbyContentfulFluid_noBase64
						}
					}
				}
			}
		}
	}
`
