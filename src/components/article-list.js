import React, { useState, useEffect } from "react"
import TagService from "@helpers/tag-service"
import TagList from "./tag-list"
import ArticlePreview from "./article-preview"

const ArticleList = ({ posts }) => {

  const activeTag = TagService.getTag()
  console.log(activeTag)

	const filterArticles = (posts, activeTag) => {
		return posts.filter((post) => {
			post.node.tags.includes(activeTag)
		})
  }
  
  let renderPosts = activeTag ? filterArticles(posts, activeTag) : posts

	const handleClick = (e) => {
		const { tag } = e.target.dataset
		if (tag) {
      TagService.setTag(tag)
			// filterArticles(posts, tag)
		}
  }

	return (
		<div className="ArticleList">
			<ul className="article-list">
				{renderPosts.map(({ node }, index) => {
					return (
						<li key={index}>
							<ArticlePreview post={node} />
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default ArticleList
