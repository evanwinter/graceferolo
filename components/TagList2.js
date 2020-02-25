import React, { useState, useEffect, useReducer } from "react"

import Tag from "./Tag"
import TagList from "./TagList"
import ArticlePreview from "./ArticlePreview"

import TagService from "@helpers/tag-service"

const TagList2 = ({ posts }) => {
	const [activeTag, setActiveTag] = useState("")
	const [articles, setArticles] = useState([])

	const { search } = typeof window !== "undefined" && window.location

	// If no tags in state, get tags
	if (articles.length < 1) {
		setArticles(posts)
	}

	// Update active tag on click
	const handleClick = (e) => {
		const { tag } = e.target.dataset
		if (tag) setActiveTag(tag)
	}

	const filterArticles = (posts, activeTag) =>
		posts.filter((post) => post.node.tags.includes(activeTag))

	// Set active tag for direct navigation
	useEffect(() => {
		if (typeof window === "undefined") return
		if (window.location.search) {
			const urlTag = window.location.search.substr(
				1,
				window.location.search.length,
			)
			setActiveTag(urlTag)
		}
	}, [search])

	// Update url search param
	useEffect(() => {
		if (activeTag) {
			TagService.setTag(activeTag)
			const filtered = filterArticles(posts, activeTag)
			setArticles(filtered)
		}
	}, [activeTag])

	return (
		<div className="TagList2">
			<TagList posts={posts} activeTag={activeTag} handleClick={handleClick} />
			<ul className="ArticleList--list">
				{articles.map((post, index) => {
					return (
						<li key={index}>
							<ArticlePreview post={post.node} />
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default TagList2
