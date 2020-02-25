import Typography from "typography"

export const shouldUpdateScroll = () => false

const typography = new Typography({
	baseFontSize: "18px",
	baseLineHeight: 1.5,
	headerFontFamily: ["Moret", "system-ui", "sans-serif"],
	bodyFontFamily: ["Moret", "system-ui", "sans-serif"],
})

export const onClientEntry = () => {
	if (typeof window.IntersectionObserver === `undefined`) {
		import(`intersection-observer`)
		console.log(`# IntersectionObserver is polyfilled!`)
	}

	if (typeof window !== "undefined") {
		import("current-device")
	}

	typography.injectStyles()
}
