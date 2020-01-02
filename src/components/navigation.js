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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tinyletter.com/graceferolo"
        >
          Writing
        </a>
      </li>
    </ul>
  </nav>
)
