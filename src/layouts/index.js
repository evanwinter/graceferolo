import React from "react"
import Navigation from "../components/navigation"
import Transition from "../components/transition"
import Container from "../components/container"

import "../styles/index.css"

const Layout = ({ children, location }) => {
  return (
    <Container>
      <Navigation />
      <Transition location={location}>
        <main>{children}</main>
      </Transition>
    </Container>
  )
}

export default Layout
