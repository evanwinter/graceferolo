import React from "react"
import anime from "animejs"
import {
	TransitionGroup,
	Transition as ReactTransition,
} from "react-transition-group"

const timeout = 1000
const getTransitionStyles = {
	entering: {
		position: `absolute`,
		opacity: 0,
	},
	entered: {
		transition: `opacity ${timeout}ms ease-in-out`,
		opacity: 1,
	},
	exiting: {
		transition: `opacity ${timeout}ms ease-in-out`,
		opacity: 0,
	},
}

class PageTransition extends React.PureComponent {
	scrollToTop() {
		const element = document.querySelector(".Layout--left")
		element.scrollIntoView(true)
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
	}

	slideOut() {
		anime({
			targets: "main",
			easing: "easeInOutQuint",
			// translateY: `6rem`,
			duration: timeout,
		})
	}

	slideIn() {
		anime({
			targets: "main",
			easing: "easeInOutQuint",
			// translateY: `0rem`,
			duration: timeout,
		})
	}

	render() {
		const { children, location } = this.props

		return (
			<TransitionGroup>
				<ReactTransition
					key={location.pathname}
					onExited={this.scrollToTop}
					// onEnter={this.slideOut}
					// onExited={this.slideIn}
					timeout={{
						enter: timeout,
						exit: timeout,
					}}>
					{(status) => (
						<div
							style={{
								...getTransitionStyles[status],
							}}>
							{children}
						</div>
					)}
				</ReactTransition>
			</TransitionGroup>
		)
	}
}

export default PageTransition
