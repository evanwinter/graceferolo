import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"

const Work = (props) => {
  const siteTitle = get(props, "data.site.siteMetadata.title")
  return (
    <>
      <Helmet title={"Work - " + siteTitle} />
      <div>Work</div>
    </>
  )
}

export default Work

export const pageQuery = graphql`
  query WorkQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`