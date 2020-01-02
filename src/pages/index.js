import React, { Fragment } from "react"
import { graphql, Link } from "gatsby"
import Image from "../components/image"
import OverlayContainer from "../components/overlay-container"
import Navigation from "../components/navigation"
import get from "lodash/get"
import Helmet from "react-helmet"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const { node } = get(this, "props.data.allContentfulHomePage.edges[0]")
    const { image } = node

    return (
      <Fragment>
        <Helmet title={siteTitle} />
        <section className="home-layout">
          <OverlayContainer image={image} />
        </section>
      </Fragment>
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
