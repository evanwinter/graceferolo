import React from "react"
import { graphql, Link } from "gatsby"
import Image from "../components/image"
import get from "lodash/get"
import Helmet from "react-helmet"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const { node } = get(this, "props.data.allContentfulHomePage.edges[0]")
    const { image } = node

    return (
      <div>
        <Helmet title={siteTitle} />
        <section className="home-layout">
          <div className="overlay-component">
            <div className="overlay-text">
              <h1 className="big name">
                <Link to="/">GRACE</Link>
              </h1>
            </div>
            <div className="overlay-image">
              <Image fluid={image.fluid} />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulHomePage(limit: 1) {
      edges {
        node {
          image {
            fluid(maxWidth: 1200, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`
