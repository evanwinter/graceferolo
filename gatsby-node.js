const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {
		const workSample = path.resolve("./src/templates/work-sample.js")
		const writingPost = path.resolve("./src/templates/writing-post.js")
		resolve(
			graphql(
				`
					{
						allContentfulWorkSample {
							edges {
								node {
									slug
								}
							}
						}
						allContentfulWritingPost {
							edges {
								node {
									slug
								}
							}
						}
					}
				`,
			).then((result) => {
				if (result.errors) {
					console.log(result.errors)
					reject(result.errors)
				}

				const workSampleItems = result.data.allContentfulWorkSample.edges
				workSampleItems.forEach((item, index) => {
					createPage({
						path: `/work/${item.node.slug}/`,
						component: workSample,
						context: {
							slug: item.node.slug,
						},
					})
				})

				const writingPostItems = result.data.allContentfulWritingPost.edges
				writingPostItems.forEach((item, index) => {
					createPage({
						path: `/writing/${item.node.slug}/`,
						component: writingPost,
						context: {
							slug: item.node.slug,
						},
					})
				})
			}),
		)
	})
}
