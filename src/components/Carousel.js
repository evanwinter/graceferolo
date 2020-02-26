import React, { useState, useEffect } from "react"

import CarouselItem from "./CarouselItem"

const Carousel = ({ items }) => {
	const [index, setIndex] = useState(0)

	//Minus 1 for array offset from 0
	const length = items.length - 1

	const handleNext = () => {
		index === length ? setIndex(0) : setIndex(index + 1)
	}

	const handlePrevious = () => {
		index === 0 ? setIndex(length) : setIndex(index - 1)
	}

	useEffect(() => {
		const container = document.querySelector(".Carousel--container")
		const item = document.querySelector(".CarouselItem")
		const padding = 16
		const shiftPx = item.clientWidth + padding
		const base = shiftPx * index
		container.style.transform = `translateX(-${base}px)`
	}, [index])

	return (
		<div className="Carousel">
			<div className="Carousel--navigation">
				<nav>
					<div className="nav-left">
						<button id="previous" onClick={() => handlePrevious()}></button>
					</div>
					<div className="nav-right">
						<button id="next" onClick={() => handleNext()}></button>
					</div>
				</nav>
			</div>
			<div className="Carousel--container">
				{items.map(({ node }, index) => {
					return <CarouselItem key={index} item={node} />
				})}
			</div>
		</div>
	)
}

export default Carousel
