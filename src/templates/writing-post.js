import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
import Hero from "../components/hero"
import { RTR } from "../helpers/richTextRenderer"

class WritingPostTemplate extends React.Component {
	render() {
		const node = get(this.props, "data.contentfulWritingPost")
		const siteTitle = get(this.props, "data.site.siteMetadata.title")

		return (
			<div>
				<Helmet title={`${node.title} | ${siteTitle}`} />
				<Hero node={node} />
				<div className="wrapper">
					<h1 className="section-headline">{node.title}</h1>
					<p>{node.intro.intro}</p>
					<p
						style={{
							display: "block",
						}}>
						{node.date}
					</p>
					<article>{RTR(node.body.json)}</article>
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
