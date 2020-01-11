import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "./image"
import get from "lodash/get"

const LayeredHero = ({ text }) => {
  const data = useStaticQuery(graphql`
    query OverlayContainerQuery {
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
  `)

  const { node } = get(data, "allContentfulHomePage.edges[0]")
  const { image } = node

  return (
    <div className="LayeredHero overlay-container">
      <div className="overlay-text">
        <span className="name">{text}</span>
      </div>
      <div className="overlay-image">
        <Image fluid={image.fluid} />
      </div>
    </div>
  )
}

export default LayeredHero
