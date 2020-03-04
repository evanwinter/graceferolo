import React from "react"
import { Link } from "gatsby"
import BackgroundImg from "gatsby-background-image"

const CarouselItem = ({ item, isOg }) => {
	return (
		<Link className="CarouselItem" data-show-mobile={isOg} to={`/work/${item.slug}`}>
			<div className="CarouselItem--overlay">
				<h3 className="CarouselItem--title">{item.title}</h3>
				<p className="CarouselItem--subtitle">{item.subtitle}</p>
			</div>
			<div className="CarouselItem--image">
				<BackgroundImg
					alt={item.title}
					fluid={item.mainImage.fluid}></BackgroundImg>
			</div>
		</Link>
	)
}

export default CarouselItem
