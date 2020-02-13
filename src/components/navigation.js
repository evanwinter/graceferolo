import React from "react"
import { Link } from "gatsby"

const Navigation = (props) => {
	return (
		<nav className="navigation" role="navigation">
			<ul className="navigation-links">
				<li>
					<Link activeClassName="active" to="/about">
						about
					</Link>
				</li>
				<li>
					<Link activeClassName="active" to="/work">
						work
					</Link>
				</li>
				<li>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://tinyletter.com/graceferolo">
						newsletter
					</a>
				</li>
				<li>
					<Link activeClassName="active" to="/writing">
						writing
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
