import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import get from "lodash/get"

import Image from "./Image"

import Animations from "@helpers/animations"
import Utilities from "@helpers/utilities"

import FlowerIcon from "@static/icons/flower.svg"

const LayeredHero = ({ text }) => {
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

	const [minimized, setMinimized] = useState(true)

	const { node } = get(data, "allContentfulHomePage.edges[0]")
	const { image } = node

	const breakpoint = Utilities.useBreakpoints()

	const anim = new Animations()
	const DURATION = 700

	// Blur image on hover
	const blurOptions = { targets: ".overlay-image", duration: DURATION / 2 }
	const addBlurOptions = { ...blurOptions, filter: `blur(1rem)` }
	const removeBlurOptions = { ...blurOptions, filter: `blur(0rem)` }
	const handleMouseEnter = () => anim.run(addBlurOptions)
	const handleMouseLeave = () => anim.run(removeBlurOptions)

	// On page change, shrink or expand the "grace component"
	const page = Utilities.getCurrentPage()

	useEffect(() => {
		// true if small screen
		const smallScreen = ["xs", "sm", "md"].includes(breakpoint)

		console.log(smallScreen)

		// true if about page and small screen
		const aboutSmallScreen = page === "about" && smallScreen

		// true if target layout (where minimized component is used)
		const isTargetPage = ["work", "writing"].includes(page)

		const shouldMinimize = isTargetPage || smallScreen

		console.log('should minimize', shouldMinimize)

		if (shouldMinimize) {
			console.log("Setting minimized to true")
			setMinimized(true)
		} else {
			console.log("Setting minimized to false")
			setMinimized(false)
		}
	}, [page, breakpoint])

	useEffect(() => {
		console.log("minimized changed", minimized)

		// const flowerOptions = { targets: ".overlay-image svg", duration: DURATION }
		if (minimized) {
			console.log("running minimize animation...")
			anim.run({
				targets: ".overlay-image",
				duration: DURATION,
				opacity: [{ value: 0, duration: DURATION / 3 }],
				width: "0px",
				// maxHeight: [{ value: "0px", delay: DURATION }],
			})
			// anim.run({ ...flowerOptions, top: "0%" })
		} else {
			console.log("running unminimize animation...")
			anim.run({
				targets: ".overlay-image",
				duration: DURATION,
				opacity: [{ value: 1, delay: DURATION }],
				width: "400px",
				// maxHeight: [{ value: "1000px", delay: DURATION }],
			})
			// anim.run({ ...flowerOptions, top: "50%", right: "-15%" })
		}
	}, [minimized])

	return (
		<Link className="LayeredHero" to="/" data-minimized={minimized}>
			<div
				className="overlay-container"
				onMouseLeave={handleMouseLeave}
				onMouseEnter={handleMouseEnter}>
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

export default LayeredHero
