import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
import PostPreview from "../components/post-preview"

// TODO: Get work projects instead of writing posts
class Work extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    let posts = get(this, "props.data.allContentfulWritingPost.edges")
    posts = [...posts, ...posts, ...posts]

    return (
      <>
        <Helmet title={"Work - " + siteTitle} />
        <ul className="article-list">
          {posts.map(({ node }, index) => {
            return (
              <li key={index}>
                <PostPreview post={node} />
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

export default Work

export const pageQuery = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulWritingPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          slug
          intro {
            intro
          }
          date(formatString: "MMMM Do, YYYY")
          mainImage {
            fluid(maxWidth: 1200, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
          body {
            json
          }
        }
      }
    }
  }
`
