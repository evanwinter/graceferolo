import React from "react"
import { graphql, Link } from "gatsby"
import get from "lodash/get"
import Helmet from "react-helmet"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")

    return (
      <div>
        <Helmet title={siteTitle} />
        <section className="home-layout">
          <div>
            <span className="pre-big">My name is</span>
            <h1 className="big name"><Link to="/">GRACE</Link></h1>
            <ul className="home-navigation">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><a href="#">Newsletter</a></li>
              <li><Link to="/writing">Writing</Link></li>
            </ul>
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
  }
`
