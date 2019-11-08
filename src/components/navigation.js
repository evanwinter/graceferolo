import React from "react"
import { Link } from "gatsby"

export default () => (
  <nav role="navigation">
    <ul className="navigation">
      <li className="navigationItem">
        <Link to="/">Home</Link>
      </li>
      <li className="navigationItem">
        <Link to="/about">About</Link>
      </li>
      <li className="navigationItem">
        <Link to="/work">Work</Link>
      </li>
      <li className="navigationItem">
        <a href="#">Newsletter</a>
      </li>
      <li className="navigationItem">
        <Link to="/writing">Writing</Link>
      </li>
    </ul>
  </nav>
)
