import React, { useEffect } from "react"

import Navigation from "@components/Navigation"
import LayeredHero from "@components/LayeredHero"
import LayoutContainer from "@components/LayoutContainer"

import PageTransition from "@helpers/page-transition"
import Animations from "@helpers/animations"
import Utilities from "@helpers/utilities"

import "@styles/index.scss"

const Layout = (props) => {
	const { children, location, path } = props
	const page = Utilities.getCurrentPage()
	const anim = new Animations()

	if (page) document.querySelector("body").dataset.currentPage = page

	useEffect(() => {
		anim.initFadeIn()
	}, [])

	return (
		<div className={`site-root ${page}`}>
			<LayoutContainer>
				<div className="Layout anim init-fade-in">
					<div className="Layout--top-right">
						<Navigation location={location} />
					</div>

					<div className="Layout--left">
						<LayeredHero text={"Grace Ferolo"} />
					</div>

					<div className="Layout--right">
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
