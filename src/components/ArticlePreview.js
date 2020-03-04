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
				<h2 className="ArticlePreview--title">
					<Link to={`/writing/${post.slug}`}>{post.title}</Link>
				</h2>
				<h3 className="ArticlePreview--subtitle">{post.subtitle}</h3>
				{post.intro && (
					<p className="ArticlePreview--intro">{post.intro.intro}</p>
				)}
				<small className="ArticlePreview--date">{post.date}</small>
			</div>
		</div>
	)
}

export default ArticlePreview
