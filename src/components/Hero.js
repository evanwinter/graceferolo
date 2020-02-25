import React from "react"
import BackgroundImg from "gatsby-background-image"

const Hero = ({ node }) => {
	return (
		<div className="Hero">
			<BackgroundImg
				alt={node.title}
				fluid={node.mainImage.fluid}></BackgroundImg>
		</div>
	)
}

export default Hero
