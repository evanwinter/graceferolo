export const menuActions = {
	expandMenu: () => ({
		type: "SET_MENU_FULLSCREEN",
		isFullscreen: true,
	}),
	shrinkMenu: () => ({
		type: "SET_MENU_FULLSCREEN",
		isFullscreen: false,
	}),
	expandCircle: () => ({
		type: "SET_CIRCLE_FULLSCREEN",
		isFullscreen: true,
	}),
	shrinkCircle: () => ({
		type: "SET_CIRCLE_FULLSCREEN",
		isFullscreen: false,
	}),
	setCurrentPage: (currentPage) => ({
		type: "SET_CURRENT_PAGE",
		currentPage: currentPage,
	}),
	setLastHovered: (lastHovered) => ({
		type: "SET_LAST_HOVERED",
		lastHovered: lastHovered,
	}),
	hideMenu: () => ({
		type: "HIDE_MENU"
	}),
	showMenu: () => ({
		type: "SHOW_MENU"
	})
}

export const projectActions = {
	setProjects: (projects) => ({
		type: "SET_PROJECTS",
		projects: projects
	})
}