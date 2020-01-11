import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
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
          href="#"
          // target="_blank"
          // rel="noopener noreferrer"
          // href="https://tinyletter.com/graceferolo"
        >
          newsletter
        </a>
      </li>
      <li className="navigationItem">
        <Link to="/writing">writing</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
