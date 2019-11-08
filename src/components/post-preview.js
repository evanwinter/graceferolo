import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default ({ post }) => (
	<div>
		<Link to={`/writing/${post.slug}`}>
			<Img alt={post.mainImage.title} fluid={post.mainImage.fluid} />
		</Link>
		<h3>
			<Link to={`/writing/${post.slug}`}>{post.title}</Link>
		</h3>
		<small>{post.date}</small>
	</div>
)
