const TagService = {
	setTag: (tag) => {
		const { origin, pathname } = window.location
		const url = origin + pathname
		window.history.pushState(null, null, url + `?${tag}`)
	},

	getTag: () => {
		const tag = window.location.search.substring(
			1,
			window.location.search.length,
		)
	},

	getTagsFromPosts: (posts) => {
		// get a list of every tag used on every post
		const allTags = posts.reduce((acc, post) => {
			const postTags = post.node.tags
			acc = [...acc, ...postTags]
			return acc
		}, [])
		// remove duplicates
		const uniqueTags = Array.from(new Set(allTags))
		return uniqueTags
	},

	getPostsWithTag: (posts, tag) => {
		return posts.filter((post) => {
			post.node.tags.includes(tag)
		})
	},
}

export default TagService
