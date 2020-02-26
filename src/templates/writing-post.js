import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"

import Hero from "@components/Hero"

import { RTR } from "@helpers/rich-text-renderer"

class WritingPostTemplate extends React.Component {
	render() {
		const post = get(this.props, "data.contentfulWritingPost")
		const siteTitle = get(this.props, "data.site.siteMetadata.title")

		return (
			<div>
				<Helmet title={`${post.title} | ${siteTitle}`} />
				<Hero node={post} />
				<div className="wrapper">
					<h1 className="section-headline">{post.title}</h1>
					<p>{post.intro.intro}</p>
					<p
						style={{
							display: "block",
						}}>
						{post.date}
					</p>
					<article>{RTR(post.body.json)}</article>
				</div>
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
			intro {
				intro
			}
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
