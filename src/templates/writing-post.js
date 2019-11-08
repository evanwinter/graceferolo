import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"
import Hero from "../components/hero"

import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p>{children}</p>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
      <img src={node.data.target.fields.file["en-US"].url} />
    )
  }
};

class WritingPostTemplate extends React.Component {
  render() {
    const [post] = get(this.props, "data.allContentfulWritingPost.edges")
    const { node } = post
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <div>
        <Helmet title={`${node.title} | ${siteTitle}`} />
        <Hero node={node} />
        <div className="wrapper">
          <h1 className="section-headline">{node.title}</h1>
          <p>{node.intro.intro}</p>
          <p
            style={{
              display: "block",
            }}
          >
            {node.date}
          </p>
          <article>
            {documentToReactComponents(node.body.json, options)}
           </article>
        </div>
      </div>
    )
  }
}

export default WritingPostTemplate

export const pageQuery = graphql`
  query WritingPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulWritingPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          intro {
            intro
          }
          date(formatString: "MMMM Do, YYYY")
          mainImage {
            fluid(maxWidth: 1180, background: "rgb:000000") {
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
