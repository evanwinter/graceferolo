import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"

import Carousel from "@components/Carousel"
import ArticlePreview from "@components/ArticlePreview"

class Work extends React.Component {
	render() {
		const siteTitle = get(this, "props.data.site.siteMetadata.title")
		const items = get(this, "props.data.allContentfulWorkPage.edges[0].node.workSamples")

		console.log(items)

		return (
			<>
				<Helmet title={"Work - " + siteTitle} />
				<Carousel items={items} />
			</>
		)
	}
}

export default Work

export const pageQuery = graphql`
	query WorkQuery {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulWorkPage {
			edges {
				node {
					title
					workSamples {
						... on ContentfulWorkSample {
							title
							subtitle
							slug
							intro {
								intro
							}
							mainImage {
								fluid(maxWidth: 1200, resizingBehavior: SCALE) {
									...GatsbyContentfulFluid_noBase64
								}
							}
							body {
								json
							}
						}
					}
				}
			}
		}
	}
`
