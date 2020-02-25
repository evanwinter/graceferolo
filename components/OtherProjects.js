import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import get from "lodash/get"

import Utils from "@helpers/utilities"

const OtherProjects = () => {
	const data = useStaticQuery(graphql`
		query otherProjectsQuery {
			allContentfulWorkSample(sort: { fields: [createdAt], order: ASC }) {
				edges {
					node {
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
	`)

	const slug = Utils.getCurrentPage(2)
	const items = get(data, "allContentfulWorkSample.edges")
	const slugs = items.map(({ node }) => node.slug)
	const currentIndex = slugs.indexOf(slug)

	// Get next indices
	const lowerBound = 0
	const upperBound = slugs.length - 1
	const prevIndex = currentIndex === lowerBound ? upperBound : currentIndex - 1
	const nextIndex = currentIndex === upperBound ? lowerBound : currentIndex + 1

	// Get next and previous projects
	const prevSlug = slugs[prevIndex]
	const nextSlug = slugs[nextIndex]

	return (
		<div className="OtherProjects">
			<nav role="navigation">
				<Link to={`/work/${prevSlug}`} className="icon-link icon-left">
					{/* <BackIcon /> */}
					previous work sample
				</Link>
				<Link to={`/work/${nextSlug}`} className="icon-link icon-right">
					next work sample
					{/* <NextIcon /> */}
				</Link>
			</nav>

			<div className="work-samples">
				{items.map(({ node }) => (
					<div>
						{node.slug}
						active: {node.slug === slug}
					</div>
				))}
			</div>
		</div>
	)
}

export default OtherProjects
