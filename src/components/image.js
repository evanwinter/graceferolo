import React from "react"
import Img from "gatsby-image"

const Image = (props) => {
    return (
        <div className="responsive-image">
            <Img {...props} />
        </div>
    )
}

export default Image