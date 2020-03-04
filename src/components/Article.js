import React from "react"
import { RTR } from "@helpers/rich-text-renderer"

const Article = ({ item }) => {
	return (
		<article className="Article">
			<div className="ArticleHeader">
				<h1 className="ArticleHeader--title">{item.title}</h1>
				<h2 className="ArticleHeader--subtitle">{item.subtitle}</h2>
				<small className="ArticleHeader--date">{item.date}</small>
			</div>
			<div className="ArticleBody">{RTR(item.body.json)}</div>
		</article>
	)
}

export default Article
