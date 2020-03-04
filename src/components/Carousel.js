import React, { useState, useEffect } from "react"
import anime from "animejs"
import CarouselItem from "./CarouselItem"
import Utils from "@helpers/utilities"

// const anim = (max) =>
// 	anime({
// 		targets: ".Carousel--container",
// 		translateX: max,
// 		loop: false,
// 		autoplay: false,
// 		duration: 500,
// 		easing: "linear",
// 	})

// const forwardAnimation = anime({
// 	targets: ".Carousel--container",
// 	// translateX: width,
// 	direction: "alternate",
// 	loop: false,
// 	autoplay: false,
// 	easing: "linear",
// })

// const backwardAnimation = anime({
// 	targets: ".Carousel--container",
// 	translateX: 0,
// 	direction: "alternate",
// 	loop: false,
// 	autoplay: false,
// 	easing: "linear",
// })

const Carousel = ({ items }) => {
	const [carouselItems, setCarouselItems] = useState([])
	const [index, setIndex] = useState(0)
	// const [containerWidth, setContainerWidth] = useState(0)
	const windowSize = Utils.useWindowSize()

	// Hydrate component state with items
	if (items && carouselItems.length === 0) {
		if (items.length < 4) {
			setCarouselItems([...items, ...items, ...items])
		} else {
			setCarouselItems([...items, ...items])
		}
	}

	// Update container width when window size changes
	// useEffect(() => {
	// 	const width = document.querySelector(".Carousel--container")?.clientWidth
	// 	setContainerWidth(width)
	// }, [windowSize.width])

	//Minus 1 for array offset from 0

	const numOriginalItems = items.length
	const numCarouselItems = carouselItems.length

	const handleNext = () => {
		// if the current index is within the second-to-last copy of the items,

		// Edge case for when there's two or fewer items
		if (numOriginalItems < 3) {
			// If within two batch sizes, add another batch
			if (index === numCarouselItems - numOriginalItems * 2) {
				// console.log("Adding another batch of carousel items")
				const nextCarouselItems = [...carouselItems, ...items]
				setCarouselItems(nextCarouselItems)
			}
		} else {
			// If within one batch size, add another batch
			if (index === numCarouselItems - numOriginalItems - 1) {
				// console.log("Adding another batch of carousel items")
				const nextCarouselItems = [...carouselItems, ...items]
				setCarouselItems(nextCarouselItems)
			}
		}

		// If at end, wrap back to beginning, else increment by one
		// Shouldn't be possible though because of endless scroll
		if (index === numCarouselItems - 1) {
			setIndex(0)
		} else {
			setIndex(index + 1)
		}
	}

	const handlePrevious = () => {
		const padFactor = numOriginalItems < 4 ? 3 : 2

		// If within the buffer zone, remove a batch
		if (
			index <= numCarouselItems - numOriginalItems * padFactor - 1 &&
			numCarouselItems >= numOriginalItems * padFactor
		) {
			const nextCarouselItems = carouselItems.slice(
				0,
				numCarouselItems - numOriginalItems,
			)
			setCarouselItems(nextCarouselItems)
		}

		// If at beginning, stay at beginning, else decrement by one
		if (index === 0) {
			setIndex(0)
		} else {
			setIndex(index - 1)
		}
	}

	const startGlideForward = () => {
		// anime(anim(containerWidth))
		// setGliding("forward")
	}

	const stopGlideForward = () => {
		// setGliding("paused")
	}

	const startGlideBackward = () => {
		// setGliding("backward")
	}

	const stopGlideBackward = () => {
		// setGliding("paused")
	}

	useEffect(() => {
		const item = document.querySelector(".CarouselItem")
		const padding = 16
		const shiftPx = item.clientWidth + padding
		const base = shiftPx * index

		if (item) {
			anime({
				targets: ".Carousel--container",
				translateX: -base,
				duration: 500,
				easing: "easeOutSine",
			})
		}
	}, [index])

	return (
		<div className="Carousel">
			<div className="Carousel--navigation">
				<nav>
					<div
						className="nav-left"
						onMouseEnter={startGlideBackward}
						onMouseLeave={stopGlideBackward}
						onClick={() => handlePrevious()}></div>
					<div
						className="nav-right"
						onMouseEnter={startGlideForward}
						onMouseLeave={stopGlideForward}
						onClick={() => handleNext()}></div>
				</nav>
			</div>
			<div className="Carousel--container">
				{carouselItems &&
					carouselItems.map((item, i) => {
						return (
							<CarouselItem key={i} item={item} isOg={i < numOriginalItems} />
						)
					})}
			</div>
		</div>
	)
}

export default Carousel
