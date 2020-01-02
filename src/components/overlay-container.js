import React from "react"
import { Link } from "gatsby"
import Image from "./image"

const OverlayContainer = ({ image }) => {
  return (
    <div className="overlay-container">
      <div className="overlay-text">
        <span className="name">
          <Link to="/">GRACE</Link>
        </span>
      </div>
      <div className="overlay-image">
        <Image fluid={image.fluid} />
      </div>
    </div>
  )
}

export default OverlayContainer
