import React from "react"
import Img from "gatsby-image"
import BackgroundImg from "gatsby-background-image"

const Hero = ({ node }) => {
	return (
		<div className="hero">
			<BackgroundImg
				alt={node.title}
				fluid={node.mainImage.fluid}></BackgroundImg>
		</div>
	)
}

export default Hero
