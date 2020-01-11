import React from "react"
import Navigation from "../components/navigation"
import GraceComponent from "../components/grace-component"
import Transition from "../components/transition"
import LayoutContainer from "../components/layout-container"
import { getPageFromPath } from "../helpers/utilities"

import "../styles/index.scss"

const Layout = (props) => {
  const { children, location, path } = props
  const page = getPageFromPath(path)
  return (
    <div className={`site-root ${page}`}>
      <LayoutContainer>
        <div className="layout">
          <div className="left">
            <GraceComponent text={"Grace Ferolo"} />
          </div>

          <div className="right">
            <Navigation location={location} />
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
