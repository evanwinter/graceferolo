import React from "react"
import { Link } from "gatsby"

export default () => (
  <nav role="navigation">
    <ul className="navigation">
      <li className="navigationItem">
        <Link to="/about">about</Link>
      </li>
      <li className="navigationItem">
        <Link to="/work">work</Link>
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
        <a href="/writing">writing</a>
      </li>
    </ul>
  </nav>
)
