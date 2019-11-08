const Promise = require("bluebird")
const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const writingPost = path.resolve("./src/templates/writing-post.js")
    resolve(
      graphql(
        `
          {
            allContentfulWritingPost {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulWritingPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/writing/${post.node.slug}/`,
            component: writingPost,
            context: {
              slug: post.node.slug,
            },
          })
        })
      })
    )
  })
}
