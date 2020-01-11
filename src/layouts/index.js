import React from "react"
import Navigation from "../components/navigation"
import OverlayContainer from "../components/overlay-container"
import Transition from "../components/transition"
import LayoutContainer from "../components/layout-container"

import "../styles/index.scss"

const Layout = (props) => {
  const { children, location, path } = props
  const currentPage = path === "/" ? "home" : path.split("/")[1]
  return (
    <div className={`site-root ${currentPage}`}>
      <LayoutContainer>
        <div className="layout">
          <div className="left">
            <OverlayContainer text={"Grace Ferolo"} />
          </div>

          <div className="right">
            <Navigation />
            <Transition location={location}>
              <main>{children}</main>
            </Transition>
          </div>
        </div>
      </LayoutContainer>
    </div>
  )
}

export default Layout
