import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import get from "lodash/get"

import ItemPreview from "./ItemPreview"

import Utils from "@helpers/utilities"

const OtherWorkItems = () => {
	const data = useStaticQuery(graphql`
		query otherWorkItemsQuery {
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

	const currentSlug = Utils.getCurrentPage(2)
	const items = get(data, "allContentfulWorkSample.edges")
	const slugs = items.map(({ node }) => node.slug)
	const currentIndex = slugs.indexOf(currentSlug)

	// Get next indices
	const lowerBound = 0
	const upperBound = slugs.length - 1
	const prevIndex = currentIndex === lowerBound ? upperBound : currentIndex - 1
	const nextIndex = currentIndex === upperBound ? lowerBound : currentIndex + 1

	// Get next and previous projects
	const prevSlug = slugs[prevIndex]
	const nextSlug = slugs[nextIndex]

	return (
		<div className="OtherWorkItems">
			<nav className="OtherWorkItems--navigation" role="navigation">
				<Link to={`/work/${prevSlug}`}>previous</Link>
				<Link to={`/work/${nextSlug}`}>next</Link>
			</nav>

			<div className="OtherWorkItems--items">
				{items.map(({ node }, index) => (
					<ItemPreview
						key={index}
						node={node}
						path={`work/${node.slug}`}
						active={node.slug === currentSlug}
					/>
				))}
			</div>
		</div>
	)
}

export default OtherWorkItems
