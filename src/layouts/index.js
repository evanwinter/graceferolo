import React from "react"
import Navigation from "../components/navigation"
import GraceComponent from "../components/grace-component"
import LayoutContainer from "../components/layout-container"
import PageTransition from "../helpers/page-transition"
import Utilities from "../helpers/utilities"
import { getPageFromPath } from "../helpers/utilities"
// import anime from "animejs"

import "../styles/index.scss"

const Layout = (props) => {
	const { children, location, path } = props
	const page = Utilities.getCurrentPage()

	// if (page === "work" || page === "writing") {
	//   anime({
	//     targets: ".GraceComponent",
	//     width: "200px",
	//     top: "2rem",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	//   anime({
	//     targets: ".layout-container",
	//     maxWidth: "100%",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	//   anime({
	//     targets: ".left",
	//     marginTop: "0",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	//   anime({
	//     targets: ".overlay-text",
	//     fontSize: "4rem",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	//   anime({
	//     targets: ".overlay-image",
	//     opacity: "0",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	//   anime({
	//     targets: ".right",
	//     width: "66%",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	// } else {
	//   anime({
	//     targets: ".GraceComponent",
	//     width: "100%",
	//     top: "0rem",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	//   anime({
	//     targets: ".layout-container",
	//     maxWidth: "1440px",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	//   anime({
	//     targets: ".left",
	//     marginTop: "5vw",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	//   anime({
	//     targets: ".overlay-text",
	//     fontSize: "8rem",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	//   anime({
	//     targets: ".overlay-image",
	//     opacity: "1",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	//   anime({
	//     targets: ".right",
	//     width: "50%",
	//     duration: 350,
	//     easing: "easeInOutQuad",
	//   })
	// }

	return (
		<div className={`site-root ${page}`}>
			<LayoutContainer>
				<div className="layout">
					<div className="left">
						<GraceComponent text={"Grace Ferolo"} />
					</div>

					<div className="top-right">
						<Navigation location={location} />
					</div>

					<div className="right">
						<main>
							<PageTransition location={location}>{children}</PageTransition>
						</main>
					</div>
				</div>
			</LayoutContainer>
		</div>
	)
}

export default Layout
