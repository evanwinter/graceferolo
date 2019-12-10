import React from "react"
import Navigation from "../components/navigation"
import Transition from "../components/transition"
import Container from "../components/container"

import "../styles/index.scss"

const Layout = (props) => {
  const { children, location, path } = props
  const currentPage = path === "/" ? "home" : path.split("/")[1]
  return (
    <div className={`site-root ${currentPage}`}>
      <Container>
        <Navigation />
        <Transition location={location}>
          <main>{children}</main>
        </Transition>
      </Container>
    </div>
  )
}

export default Layout
