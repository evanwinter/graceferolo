import React, { useState, useEffect } from "react"
import Tag from "./tag"
import TagService from "@helpers/tag-service"

const TagList = ({ posts, activeTag, handleClick }) => {
	const [tags, setTags] = useState([])

	// If no tags in state, get tags
	if (tags.length < 1) {
		const allTags = TagService.getTagsFromPosts(posts)
		setTags(allTags)
	}

	// // Update url search param
	// useEffect(() => {
	// 	if (activeTag) TagService.setTag(activeTag)
	// }, [activeTag])

	// // Set active tag for direct navigation
	// useEffect(() => {
	// 	if (!activeTag && window.location.search) {
	// 		const urlTag = window.location.search.substr(
	// 			1,
	// 			window.location.search.length,
	// 		)
	// 		setActiveTag(urlTag)
	// 	}
	// }, [window.location.search])

	return (
		<div className="tag-list">
			<ul onClick={handleClick}>
				{tags.map((tag) => (
					<li key={tag}>
						<Tag tag={tag} active={tag === activeTag} />
					</li>
				))}
			</ul>
		</div>
	)
}

export default TagList
