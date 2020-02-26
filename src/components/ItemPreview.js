import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ItemPreview = ({ node, active }) => {
	const { slug, mainImage, title, subtitle } = node

	return (
		<Link
			className="WritingItemPreview"
			to={`/writing/${node.slug}`}
			data-active={active}>
			<div className="WritingItemPreview--image">
				<BackgroundImage fluid={mainImage.fluid} />
			</div>
			<div className="WritingItemPreview--copy">
				<h4 className="WritingItemPreview--title">{title}</h4>
				<span className="WritingItemPreview--subtitle">{subtitle}</span>
			</div>
		</Link>
	)
}

export default ItemPreview
