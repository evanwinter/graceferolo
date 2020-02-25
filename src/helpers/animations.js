import anime from "animejs"
import merge from "lodash/merge"

class Animations {
	constructor() {
		this.defaultOptions = {
			easing: "easeInOutQuad",
			duration: 500,
		}
	}

	getOptions(options) {
		return merge({}, this.defaultOptions, options)
	}

	run(options) {
		const mergedOptions = this.getOptions(options)
		anime(mergedOptions)
	}

	initFadeIn(options) {
		const mergedOptions = this.getOptions(options)
		anime({
			...mergedOptions,
			opacity: 1,
			targets: ".anim.ease-in",
			delay: 750,
		})
	}

	blur(options) {
		const mergedOptions = this.getOptions(options)
		const { blurLevel } = mergedOptions
		anime({
			...mergedOptions,
			filter: `blur(${blurLevel})`,
		})
	}
}

export default Animations
