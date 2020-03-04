import React, { useRef } from "react"
import anime from "animejs"

import { useOnScreen } from "@hooks"
import { RTR } from "@helpers/rich-text-renderer"

const Article = ({ item }) => {
	const ref = useRef()
	const onScreen = useOnScreen(ref, "-100px")

	return (
		<article className="Article" ref={ref} data-on-screen={onScreen}>
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
