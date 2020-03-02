import React, { useState, useEffect } from "react"
import anime from "animejs"
import CarouselItem from "./CarouselItem"
import Utils from "@helpers/utilities"

const anim = (max) =>
	anime({
		targets: ".Carousel--container",
		translateX: max,
		loop: false,
		autoplay: false,
		duration: 500,
		easing: "linear",
	})

const forwardAnimation = anime({
	targets: ".Carousel--container",
	// translateX: width,
	direction: "alternate",
	loop: false,
	autoplay: false,
	easing: "linear",
})

const backwardAnimation = anime({
	targets: ".Carousel--container",
	translateX: 0,
	direction: "alternate",
	loop: false,
	autoplay: false,
	easing: "linear",
})

const Carousel = ({ items }) => {
	const [_items, setItems] = useState([])
	const [index, setIndex] = useState(0)
	const [containerWidth, setContainerWidth] = useState(0)
	const windowSize = Utils.useWindowSize()

	const [gliding, setGliding] = useState("paused")

	const actualNumItems = items.length

	if (items && _items.length === 0) {
		setItems(items)
	}

	useEffect(() => {
		const width = document.querySelector(".Carousel--container")?.clientWidth
		setContainerWidth(width)
	}, [windowSize.width])

	//Minus 1 for array offset from 0
	const _length = _items.length - 1
	const length = items.length - 1

	console.log("new items length", _length)
	console.log("original items length", length)

	console.log("index", index)

	const handleNext = () => {
		console.log(_length)
		if (index > _length - 4) {
			setItems([..._items, ...items])
		}

		index === _length ? setIndex(0) : setIndex(index + 1)
	}

	const handlePrevious = () => {
		if (index <= _length - 4 && _length >= items.length * 2) {
			setItems(_items.slice(0, _items.length - 4))
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
		const container = document.querySelector(".Carousel--container")
		const item = document.querySelector(".CarouselItem")
		const padding = 16
		const shiftPx = item.clientWidth + padding
		const base = shiftPx * index
		// container.style.transform = `translateX(-${base}px)`

		anime({
			targets: ".Carousel--container",
			translateX: -base,
			duration: 500,
			// direction: 'alternate',
			// loop: false,
			// autoplay: false,
			easing: "easeOutSine",
		})
	}, [index])

	// const focusIndex = (index) => {
	// 	const item = document.querySelector(".CarouselItem")
	// 	const padding = 16
	// 	const shiftPx = item.clientWidth + padding

	// 	anime({
	// 		targets: ".Carousel--container",
	// 		translateX: -base,
	// 		duration: 500,
	// 		// direction: 'alternate',
	// 		// loop: false,
	// 		// autoplay: false,
	// 		easing: "easeOutSine",
	// 	})
	// }

	useEffect(() => {
		// if (gliding === "forward") {
		// 	const container = document.querySelector(".Carousel--container")
		// 	const max = container.clientWidth
		// 	anime({
		// 		targets: ".Carousel--container",
		// 		translateX: -max,
		// 		duration: 3000,
		// 		// direction: 'alternate',
		// 		// loop: false,
		// 		// autoplay: false,
		// 		easing: "linear",
		// 	})
		// } else if (gliding === "backward") {
		// 	const container = document.querySelector(".Carousel--container")
		// 	const max = container.clientWidth
		// 	anime({
		// 		targets: ".Carousel--container",
		// 		translateX: 0,
		// 		duration: 3000,
		// 		// direction: 'alternate',
		// 		// loop: false,
		// 		// autoplay: false,
		// 		easing: "linear",
		// 	})
		// } else if (gliding === "paused") {
		// 	const nearestItemX = 0
		// 	anime({
		// 		targets: ".Carousel--container",
		// 		translateX: nearestItemX,
		// 	})
		// }
	}, [gliding])

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
				{_items.map(({ node }, i) => {
					return <CarouselItem key={i} item={node} />
				})}
			</div>
		</div>
	)
}

export default Carousel
