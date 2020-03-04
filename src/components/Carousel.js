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
	const [containerWidth, setContainerWidth] = useState(0)
	const windowSize = Utils.useWindowSize()

	// const [gliding, setGliding] = useState("paused")

	// Hydrate component state with items
	if (items && carouselItems.length === 0) {
		if (items.length < 4) {
			setCarouselItems([...items, ...items, ...items])
		} else {
			setCarouselItems([...items, ...items])
		}
	}

	// Update container width when window size changes
	useEffect(() => {
		const width = document.querySelector(".Carousel--container")?.clientWidth
		setContainerWidth(width)
	}, [windowSize.width])

	//Minus 1 for array offset from 0

	const numOriginalItems = items.length
	const numCarouselItems = carouselItems.length

	const carouselItemsLength = numCarouselItems - 1

	const batchSize = numOriginalItems

	const handleNext = () => {
		// if the current index is within the second-to-last copy of the items,
		console.log("Updating to index", index + 1)
		console.log("Current number of items in the carousel", numCarouselItems)

		if (numOriginalItems < 3) {
			// Edge case for when there's two or fewer items
			if (index === numCarouselItems - numOriginalItems * 2) {
				console.log("Adding another batch of carousel items")
				const nextCarouselItems = [...carouselItems, ...items]
				setCarouselItems(nextCarouselItems)
			}
		} else {
			if (index === numCarouselItems - numOriginalItems - 1) {
				console.log("Adding another batch of carousel items")
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
		console.log("Updating to index", index - 1)
		console.log("Current number of items in the carousel", numCarouselItems)

		const padFactor = numOriginalItems < 4 ? 3 : 2

		if (
			index <= numCarouselItems - numOriginalItems * padFactor - 1 &&
			numCarouselItems >= numOriginalItems * padFactor
		) {
			console.log("Removing a batch of carousel items")
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
					<div className="nav-left">
						<button
							id="previous"
							onMouseEnter={startGlideBackward}
							onMouseLeave={stopGlideBackward}
							onClick={() => handlePrevious()}></button>
					</div>
					<div className="nav-right">
						<button
							id="next"
							onMouseEnter={startGlideForward}
							onMouseLeave={stopGlideForward}
							onClick={() => handleNext()}></button>
					</div>
				</nav>
			</div>
			<div className="Carousel--container">
				{carouselItems &&
					carouselItems.map((item, i) => {
						return <CarouselItem key={i} item={item} />
					})}
			</div>
		</div>
	)
}

export default Carousel
