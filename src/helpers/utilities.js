/**
 *  General utility functions
 */

const Utilities = {
	getCurrentPage: () =>
		typeof window !== "undefined" &&
		(window.location.pathname === "/"
			? "home"
			: window.location.pathname.split("/")[1]),
}

export default Utilities
