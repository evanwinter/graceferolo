import React from "react"
import { Link, graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import PostPreview from "../components/post-preview"

class WritingIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    let posts = get(this, "props.data.allContentfulWritingPost.edges")
    posts = [...posts, ...posts, ...posts]

    return (
      <>
        <Helmet title={"Writing - " + siteTitle} />
        <div>Writing</div>
        <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <PostPreview post={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default WritingIndex

export const pageQuery = graphql`
  query WritingIndexQuery {
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
