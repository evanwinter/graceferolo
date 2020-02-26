import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"

import Hero from "@components/Hero"
import OtherWorkItems from "@components/OtherWorkItems"

import { RTR } from "@helpers/rich-text-renderer"

class WorkSampleTemplate extends React.Component {
	render() {
		const node = get(this.props, "data.contentfulWorkSample")
		const siteTitle = get(this.props, "data.site.siteMetadata.title")

		return (
			<div>
				<Helmet title={`${node.title} | ${siteTitle}`} />
				<Hero node={node} />
				<div className="wrapper">
					<h1 className="section-title">{node.title}</h1>
					<h1 className="section-subtitle">{node.subtitle}</h1>
					<p>{node.intro?.intro}</p>
					<article>{RTR(node.body.json)}</article>
					<OtherWorkItems />
				</div>
			</div>
		)
	}
}

export default WorkSampleTemplate

export const pageQuery = graphql`
	query WorkSampleBySlug($slug: String!) {
		site {
			siteMetadata {
				title
			}
		}
		contentfulWorkSample(slug: { eq: $slug }) {
			title
			subtitle
			intro {
				intro
			}
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
