import React, { useState } from "react"
import { Link } from "gatsby"
import { getPageFromPath } from "../helpers/utilities"

const Navigation = (props) => {
  return (
    <nav role="navigation">
      <ul className="navigation">
        <li className="navigationItem">
          <Link activeClassName="active" to="/about">about</Link>
        </li>
        <li className="navigationItem">
          <Link activeClassName="active" to="/work">work</Link>
        </li>
        <li className="navigationItem">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://tinyletter.com/graceferolo"
          >
            newsletter
          </a>
        </li>
        <li className="navigationItem">
          <Link activeClassName="active" to="/writing">writing</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
