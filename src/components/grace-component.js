import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "./image"
import get from "lodash/get"
import Animations from "./animations"

const GraceComponent = ({ text }) => {
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

  const [expanded, setExpanded] = useState(true)

  const anim = new Animations()
  const blurOptions = {
    targets: ".overlay-image",
    duration: 350,
  }

  const handleMouseEnter = (e) => {
    const options = {
      ...blurOptions,
      blurLevel: "0.5rem",
    }
    anim.blur(options)
  }

  const handleMouseLeave = (e) => {
    const options = {
      ...blurOptions,
      blurLevel: "0rem",
    }
    anim.blur(options)
  }

  return (
    <div className="GraceComponent" data-expanded="true">
      <div
        className="overlay-container"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <div className="overlay-text">
          <span className="name">{text}</span>
        </div>
        <div className="overlay-image">
          <Image fluid={image.fluid} />
        </div>
      </div>
    </div>
  )
}

export default GraceComponent
