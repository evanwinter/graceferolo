import React from "react"
import anime from "animejs"
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group"

const timeout = 500
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

class Transition extends React.PureComponent {
  scrollToTop() {
    window.scrollTo(0, 0)
  }

  slideOut() {
    anime({
      targets: "main",
      translateY: "20px",
      easing: "easeInOutQuad",
      duration: timeout,
    })
  }

  slideIn() {
    anime({
      targets: "main",
      translateY: "0px",
      easing: "easeInOutQuad",
      duration: timeout,
    })
  }

  render() {
    const { children, location } = this.props

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          onEnter={this.slideOut}
          onExited={this.slideIn}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {(status) => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
}
export default Transition
