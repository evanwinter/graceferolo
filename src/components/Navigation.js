import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Menu as MenuIcon, X as XIcon } from "react-feather"
import Utils from "@helpers/utilities"

const Navigation = (props) => {
	const breakpoint = Utils.useBreakpoints()

	console.log(breakpoint)

	const page = Utils.getCurrentPage()

	const [open, setOpen] = useState(false)

	const smallScreen = ["xs", "sm"].includes(breakpoint)
	const collapsed = smallScreen || (page === "home" && breakpoint === "md")

	useEffect(() => {
		// setOpen(false)
	}, [breakpoint])

	return (
		<nav
			className="Navigation"
			role="navigation"
			data-collapsed={collapsed}
			data-open={open}>
			<div className="Navigation--icon-open" onClick={() => setOpen(true)}>
				<MenuIcon />
			</div>
			<ul className="Navigation--links">
				<li className="Navigation--link">
					<Link activeClassName="active" to="/about">
						about
					</Link>
				</li>
				<li className="Navigation--link">
					<Link activeClassName="active" to="/work">
						work
					</Link>
				</li>
				<li className="Navigation--link">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://tinyletter.com/graceferolo">
						newsletter
					</a>
				</li>
				<li className="Navigation--link">
					<Link activeClassName="active" to="/writing">
						writing
					</Link>
				</li>
			</ul>

			<div className={`Navigation--full ${page}`}>
				<ul className="Navigation--links">
					<div
						className="Navigation--icon-close"
						onClick={() => setOpen(false)}>
						<XIcon />
					</div>
					<li className="Navigation--link">
						<Link
							activeClassName="active"
							to="/about"
							onClick={() => setOpen(false)}>
							about
						</Link>
					</li>
					<li className="Navigation--link">
						<Link
							activeClassName="active"
							to="/work"
							onClick={() => setOpen(false)}>
							work
						</Link>
					</li>
					<li className="Navigation--link">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://tinyletter.com/graceferolo"
							onClick={() => setOpen(false)}>
							newsletter
						</a>
					</li>
					<li className="Navigation--link">
						<Link
							activeClassName="active"
							to="/writing"
							onClick={() => setOpen(false)}>
							writing
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navigation
