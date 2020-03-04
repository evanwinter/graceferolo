import React, { useState, useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import get from "lodash/get"

import Image from "./Image"

import Animations from "@helpers/animations"
import Utilities from "@helpers/utilities"

import FlowerIcon from "@static/icons/flower.svg"

const LayeredHero = ({ text }) => {
	// Query Home page image data from Contentful
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

	const { image } = get(data, "allContentfulHomePage.edges[0].node") // Extract image
	const [minimized, setMinimized] = useState(true) // Local 'minimized' state
	const breakpoint = Utilities.useBreakpoints() // Current breakpoint
	const page = Utilities.getCurrentPage() // Current URL slug

	// Animations helper
	const anim = new Animations()
	const duration = 700

	// Blur image on hover
	const blurOptions = { targets: ".LayeredHero--image", duration: duration / 2 }
	const addBlurOptions = { ...blurOptions, filter: `blur(0.5rem)` }
	const removeBlurOptions = { ...blurOptions, filter: `blur(0rem)` }
	const addBlur = () => anim.run(addBlurOptions)
	const removeBlur = () => anim.run(removeBlurOptions)

	// Fade hero image in/out when 'minimized' state changes
	useEffect(() => {
		const handleMinimizeChange = (minimized) => {
			const imageFadeOptions = {
				targets: ".LayeredHero--image",
				easing: "easeInQuad",
				duration: duration,
			}
			const imageFadeInOptions = {
				...imageFadeOptions,
				opacity: [{ value: 1, delay: duration }],
				width: "300px",
			}
			const imageFadeOutOptions = {
				...imageFadeOptions,
				opacity: [{ value: 0, duration: duration / 3 }],
				width: "0px",
			}

			// const flowerOptions = { targets: ".overlay-image svg", duration: DURATION }
			if (minimized) {
				anim.run(imageFadeOutOptions)
				// anim.run({ ...flowerOptions, top: "0%" })
			} else {
				anim.run(imageFadeInOptions)
				// anim.run({ ...flowerOptions, top: "50%", right: "-15%" })
			}
		}

		handleMinimizeChange(minimized)
	}, [minimized])

	// Update 'minimized' state based on breakpoint changes
	useEffect(() => {
		const handleBreakpointChange = () => {
			const smallScreen = ["xs", "sm", "md"].includes(breakpoint)
			const isTargetPage = ["work", "writing"].includes(page)
			const shouldMinimize = page !== "home" && (isTargetPage || smallScreen || !breakpoint)
			if (shouldMinimize) {
				setMinimized(true)
			} else {
				setMinimized(false)
			}
		}

		handleBreakpointChange()
	}, [page, breakpoint])

	return (
		<Link className="LayeredHero" to="/" data-minimized={minimized}>
			<div
				className="LayeredHero--container"
				onMouseEnter={addBlur}
				onMouseLeave={removeBlur}>
				<div className="LayeredHero--text">
					<span className="name">{text}</span>
				</div>
				<div className="LayeredHero--image">
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
