import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import get from "lodash/get"

import ItemPreview from "@components/ItemPreview"

import Utils from "@helpers/utilities"

const OtherWritingItems = () => {
	const data = useStaticQuery(graphql`
		query otherWritingItemsQuery {
			allContentfulWritingPost(sort: { fields: [createdAt], order: ASC }) {
				edges {
					node {
						title
						subtitle
						slug
						mainImage {
							fluid(maxWidth: 1200, resizingBehavior: SCALE) {
								...GatsbyContentfulFluid_noBase64
							}
						}
					}
				}
			}
		}
	`)

	const currentSlug = Utils.getCurrentPage(2)
	const items = get(data, "allContentfulWritingPost.edges")
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
		<div className="OtherWritingItems">
			<nav className="OtherWritingItems--navigation" role="navigation">
				<Link to={`/writing/${prevSlug}`}>previous</Link>
				<Link to={`/writing/${nextSlug}`}>next</Link>
			</nav>

			<div className="OtherWritingItems--items">
				{items.map(({ node }, index) => (
					<ItemPreview
						key={index}
						node={node}
						path={`writing/${node.slug}`}
						active={node.slug === currentSlug}
					/>
				))}
			</div>
		</div>
	)
}

export default OtherWritingItems
