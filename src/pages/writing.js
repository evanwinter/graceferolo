import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"

import ArticleList from "@components/ArticleList"
import TagList from "@components/TagList"
import TagList2 from "@components/TagList2"

class WritingIndex extends React.Component {
	render() {
		const siteTitle = get(this, "props.data.site.siteMetadata.title")
		let posts = get(this, "props.data.allContentfulWritingPost.edges")
		// TODO: remove - duplicate posts for dev
		posts = [...posts, ...posts, ...posts]

		return (
			<>
				<Helmet title={"Writing - " + siteTitle} />
				<div>
					<TagList2 posts={posts} />
				</div>
			</>
		)
	}
}

export default WritingIndex

export const pageQuery = graphql`
	query WritingIndexQuery {
		site {
			siteMetadata {
				title
			}
		}
		allContentfulWritingPost(sort: { fields: [date], order: DESC }) {
			edges {
				node {
					title
					subtitle
					slug
					intro {
						intro
					}
					date(formatString: "MMMM Do, YYYY")
					mainImage {
						fluid(maxWidth: 1200, resizingBehavior: SCALE) {
							...GatsbyContentfulFluid_noBase64
						}
					}
					body {
						json
					}
					tags
				}
			}
		}
	}
`
