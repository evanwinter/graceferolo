import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "./image"
import get from "lodash/get"
import Animations from "../helpers/animations"
import Utilities from "../helpers/utilities"
import { getPageFromPath } from "../helpers/utilities"
import FlowerIcon from "../../static/icons/flower.svg"

const GraceComponent = ({ text }) => {
  const data = useStaticQuery(graphql`
    query OverlayContainerQuery {
      allContentfulHomePage(limit: 1) {
        edges {
          node {
            image {
              fluid(maxWidth: 400, resizingBehavior: SCALE) {
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

  const anim = new Animations()
  const DURATION = 700

  // Blur image on hover
  const blurOptions = { targets: ".overlay-image", duration: DURATION / 2 }
  const handleMouseEnter = () =>
    anim.run({ ...blurOptions, filter: `blur(1rem)` })
  const handleMouseLeave = () =>
    anim.run({ ...blurOptions, filter: `blur(0rem)` })

  // On page change, shrink or expand the "grace component"
  const page = Utilities.getCurrentPage()
  const minimized = ["work", "writing"].includes(page)

  useEffect(() => {
    // const flowerOptions = { targets: ".overlay-image svg", duration: DURATION }
    if (minimized) {
      anim.run({
        targets: ".overlay-image",
        duration: DURATION,
        opacity: [{ value: 0, duration: DURATION / 3 }],
        width: "0px",
        // maxHeight: [{ value: "0px", delay: DURATION }],
      })
      // anim.run({ ...flowerOptions, top: "0%" })
    } else {
      anim.run({
        targets: ".overlay-image",
        duration: DURATION,
        opacity: [{ value: 1, delay: DURATION }],
        width: "300px",
        // maxHeight: [{ value: "1000px", delay: DURATION }],
      })
      // anim.run({ ...flowerOptions, top: "50%", right: "-15%" })
    }
  }, [minimized])

  return (
    <Link className="GraceComponent" to="/" data-minimized={minimized}>
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
        {/* <div className="overlay-icon">
          <FlowerIcon />
        </div> */}
      </div>
    </Link>
  )
}

export default GraceComponent
