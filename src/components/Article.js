import React from "react"

import { RTR } from "@helpers/rich-text-renderer"

const Article = ({ item }) => {
	return (
		<article className="Article">
			<div className="ArticleHeader">
				<h1 className="section-headline">{item.title}</h1>
				<p>{item.intro.intro}</p>
				<p>{item.date}</p>
			</div>
			<div className="ArticleBody">{RTR(item.body.json)}</div>
		</article>
	)
}

export default Article
