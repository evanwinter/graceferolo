import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ItemPreview = ({ node, active, path }) => {
	const { mainImage, title, subtitle } = node

	return (
		<Link
			className="ItemPreview"
			to={path}
			data-active={active}>
			<div className="ItemPreview--image">
				<BackgroundImage fluid={mainImage.fluid} />
			</div>
			<div className="ItemPreview--mask"></div>
			<div className="ItemPreview--copy">
				<h4 className="ItemPreview--title">{title}</h4>
				<span className="ItemPreview--subtitle">{subtitle}</span>
			</div>
		</Link>
	)
}

export default ItemPreview
