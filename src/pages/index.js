import React from "react"
import { graphql, Link } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"
import Layout from "../components/layout"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <span>My name is</span>
            <h1 className="big name">GRACE</h1>
            <ul className="menu">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><a href="https://google.com/" target="_blank" rel="noopener noreferrer">Newsletter</a></li>
              <li><Link to="/writing">Writing</Link></li>
            </ul>
          </div>
        </div>
      </Layout>
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
