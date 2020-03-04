import { useState, useEffect } from "react"

export const useBreakpoints = () => {
	const getDeviceConfig = (width) => {
		if (width < 320) {
			return "xs"
		} else if (width >= 320 && width < 720) {
			return "sm"
		} else if (width >= 720 && width < 900) {
			return "md"
		} else if (width >= 900 && width < 1200) {
			return "lg"
		} else if (width >= 1440 && width < 1680) {
			return "xl"
		} else if (width >= 1680) {
			return "xxl"
		}
	}

	const [brkPnt, setBrkPnt] = useState(() =>
		getDeviceConfig(typeof window !== "undefined" && window.innerWidth),
	)

	useEffect(() => {
		if (typeof window !== "undefined") {
			const calcInnerWidth = throttle(function() {
				setBrkPnt(getDeviceConfig(window.innerWidth))
			}, 200)
			window.addEventListener("resize", calcInnerWidth)
			return () => window.removeEventListener("resize", calcInnerWidth)
		}
	}, [])

	return brkPnt
}

// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
export const useDebounce = (value, delay) => {
	// State and setters for debounced value
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(
		() => {
			// Set debouncedValue to value (passed in) after the specified delay
			const handler = setTimeout(() => {
				setDebouncedValue(value)
			}, delay)

			// Return a cleanup function that will be called every time ...
			// ... useEffect is re-called. useEffect will only be re-called ...
			// ... if value changes (see the inputs array below).
			// This is how we prevent debouncedValue from changing if value is ...
			// ... changed within the delay period. Timeout gets cleared and restarted.
			// To put it in context, if the user is typing within our app's ...
			// ... search box, we don't want the debouncedValue to update until ...
			// ... they've stopped typing for more than 500ms.
			return () => {
				clearTimeout(handler)
			}
		},
		// Only re-call effect if value changes
		// You could also add the "delay" var to inputs array if you ...
		// ... need to be able to change that dynamically.
		[value],
	)

	return debouncedValue
}

export const useWindowSize = () => {
	const isClient = typeof window === "object"

	function getSize() {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
		}
	}

	const [windowSize, setWindowSize] = useState(getSize)

	useEffect(() => {
		if (!isClient) {
			return false
		}

		function handleResize() {
			setWindowSize(getSize())
		}

		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, []) // Empty array ensures that effect is only run on mount and unmount

	return windowSize
}

export const useOnScreen = (ref, rootMargin = "0px") => {
	// State and setter for storing whether element is visible
	const [isIntersecting, setIntersecting] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// Update our state when observer callback fires
				setIntersecting(entry.isIntersecting)
			},
			{
				rootMargin,
			},
		)
		if (ref.current) {
			observer.observe(ref.current)
		}
		return () => {
			observer.unobserve(ref.current)
		}
	}, []) // Empty array ensures that effect is only run on mount and unmount

	return isIntersecting
}
