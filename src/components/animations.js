import React from "react"
import anime from "animejs"
import merge from "lodash/merge"

class Animations {
  constructor() {
    this.defaultOptions = {
      easing: "easeInOutQuad",
      duration: 500,
    }
  }

  blur(options) {
    const mergedOptions = merge({}, this.defaultOptions, options)
    const { blurLevel } = mergedOptions
    anime({
      ...mergedOptions,
      filter: `blur(${blurLevel})`,
    })
  }
}

export default Animations
