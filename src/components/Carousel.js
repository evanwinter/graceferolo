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
		// Start with two sets of items
		setCarouselItems([...items, ...items])
	}
	
	// Update container width when window size changes
	useEffect(() => {
		const width = document.querySelector(".Carousel--container")?.clientWidth
		setContainerWidth(width)
	}, [windowSize.width])

	//Minus 1 for array offset from 0
	const _length = carouselItems.length - 1
	const length = items.length - 1

	// console.log("new items length", _length)
	// console.log("original items length", length)

	// console.log("index", index)

	const handleNext = () => {
		// console.log(_length)

		// if the current index is within four indexes of the last item, add another batch of items on to the list

		if (index > _length - 4) {
			setCarouselItems([...carouselItems, ...items])
		}

		index === _length ? setIndex(0) : setIndex(index + 1)
	}

	const handlePrevious = () => {
		if (index <= _length - 4 && _length >= items.length * 2.5) {
			setCarouselItems(carouselItems.slice(0, carouselItems.length - 4))
		}

		index === 0 ? setIndex(0) : setIndex(index - 1)
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
					carouselItems.map(({ node }, i) => {
						return <CarouselItem key={i} item={node} />
					})}
			</div>
		</div>
	)
}

export default Carousel
