import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"

import Image from "@components/Image"
import Article from "@components/Article"
import OtherWritingItems from "@components/OtherWritingItems"

import { RTR } from "@helpers/rich-text-renderer"

class WritingPostTemplate extends React.Component {
	render() {
		const post = get(this.props, "data.contentfulWritingPost")
		const siteTitle = get(this.props, "data.site.siteMetadata.title")

		return (
			<div className="WritingPostTemplate">
				<Helmet title={`${post.title} | ${siteTitle}`} />
				<div className="wrapper">
					<div className="cols">
						<div className="col col-left">
							<Image fluid={post.mainImage.fluid} />
						</div>
						<div className="col col-right">
							<Article item={post} />
						</div>
					</div>
				</div>
				<OtherWritingItems />
			</div>
		)
	}
}

export default WritingPostTemplate

export const pageQuery = graphql`
	query WritingPostBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		contentfulWritingPost(slug: { eq: $slug }) {
			title
			subtitle
			date(formatString: "MMMM Do, YYYY")
			mainImage {
				fluid(maxWidth: 1180, background: "rgb:000000") {
					...GatsbyContentfulFluid_noBase64
				}
			}
			body {
				json
			}
		}
	}
`
