import { useState, useEffect } from "react"
import throttle from "lodash/throttle"

/**
 *  General utility functions
 */

const Utilities = {
	getCurrentPage: (depth = 1) => {
		const windowDefined = typeof window !== "undefined"
		if (!windowDefined) return null

		if (window.location.pathname === "/") {
			return "home"
		} else {
			return window.location.pathname.split("/")[depth]
		}
	},

	// https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
	useDebounce: (value, delay) => {
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
	},

	useBreakpoints: function() {
		const getDeviceConfig = (width) => {
			if (width < 320) {
				return "xs"
			} else if (width >= 320 && width < 720) {
				return "sm"
			} else if (width >= 720 && width < 1200) {
				return "md"
			} else if (width >= 1200 && width < 1440) {
				return "lg"
			} else if (width >= 1440) {
				return "xl"
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
	},

	safeWindow: (exp) => {
		if (typeof window !== "undefined") return exp
	},
}

export default Utilities
