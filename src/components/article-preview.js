import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ArticlePreview = ({ post }) => {
	return (
		<div className="ArticlePreview">
			<div className="preview-image">
				<Link to={`/writing/${post.slug}`}>
					<Img alt={post.mainImage.title} fluid={post.mainImage.fluid} />
				</Link>
			</div>
			<div className="preview-copy">
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
