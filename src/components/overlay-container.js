import React from "react"
import { Link } from "gatsby"
import Image from "./image"

const OverlayContainer = ({ image, text }) => {
  return (
    <div className="overlay-container">
      <div className="overlay-text">
        <span className="name">
          {text}
        </span>
      </div>
      <div className="overlay-image">
        <Image fluid={image.fluid} />
      </div>
    </div>
  )
}

export default OverlayContainer
