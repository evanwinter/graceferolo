import React from "react"
import { graphql } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")

    return (
      <>
        <Helmet title={siteTitle} />
      </>
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
  }
`
