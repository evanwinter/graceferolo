import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"

import SquigglyLine from "@components/SquigglyLine"
import OtherWorkItems from "@components/OtherWorkItems"

import { RTR } from "@helpers/rich-text-renderer"

class WorkSampleTemplate extends React.Component {
	render() {
		const node = get(this.props, "data.contentfulWorkSample")
		const siteTitle = get(this.props, "data.site.siteMetadata.title")

		return (
			<div className="WorkSampleTemplate">
				<Helmet title={`${node.title} | ${siteTitle}`} />
				{/* <Hero node={node} /> */}
				<div className="wrapper">
					<div className="cols">
						<div className="col col-left">
							{/* <Image fluid={post.mainImage.fluid} /> */}
						</div>
						<div className="col col-right">
							<h1 className="title">{node.title}</h1>
							<h3 className="subtitle">{node.subtitle}</h3>
							<SquigglyLine />
							{node.intro && <p className="intro">{node.intro.intro}</p>}
							<article>{RTR(node.body.json)}</article>
						</div>
					</div>
				</div>
				<SquigglyLine />
				<OtherWorkItems />
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
