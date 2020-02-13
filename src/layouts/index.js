import React from "react"
import Navigation from "../components/navigation"
import GraceComponent from "../components/grace-component"
import LayoutContainer from "../components/layout-container"
import PageTransition from "../helpers/page-transition"
import Utilities from "../helpers/utilities"

import "../styles/index.scss"

const Layout = (props) => {
	const { children, location, path } = props
	const page = Utilities.getCurrentPage()

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
