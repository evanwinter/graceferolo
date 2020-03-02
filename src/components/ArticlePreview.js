import React from "react"
import { Link } from "gatsby"

import Image from "./Image"

const ArticlePreview = ({ post }) => {
	return (
		<div className="ArticlePreview">
			<div className="ArticlePreview--image">
				<Link to={`/writing/${post.slug}`}>
					<Image alt={post.mainImage.title} fluid={post.mainImage.fluid} />
				</Link>
			</div>
			<div className="ArticlePreview--copy">
				<h3>
					<Link to={`/writing/${post.slug}`}>{post.title}</Link>
				</h3>
				<p>{post.intro.intro}</p>
				<small>{post.date}</small>
			</div>
		</div>
	)
}

export default ArticlePreview
