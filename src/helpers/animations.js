import anime from "animejs"
import merge from "lodash/merge"

class Animations {
	constructor() {
		this.defaultOptions = {
			easing: "easeInOutQuad",
			duration: 500,
		}
	}

	/**
		Return options with fallbacks if not provided
	*/
	getOptions(options) {
		return merge({}, this.defaultOptions, options)
	}

	/**
		Run animejs function, with class-level fallback options
	*/
	run(options) {
		const mergedOptions = this.getOptions(options)
		anime(mergedOptions)
	}

	/**
	 * Run a delayed fade-in animation
	 */
	initFadeIn(options) {
		const mergedOptions = this.getOptions(options)
		anime({
			...mergedOptions,
			opacity: 1,
			targets: ".anim.ease-in",
			delay: 750,
		})
	}
}

export default Animations
