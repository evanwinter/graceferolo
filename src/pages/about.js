import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import get from "lodash/get"

const About = (props) => {
  const siteTitle = get(props, "data.site.siteMetadata.title")
  return (
    <>
      <Helmet title={"About - " + siteTitle} />
      <div>About</div>
    </>
  )
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
