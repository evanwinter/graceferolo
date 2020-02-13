export const menuReducer = (state, action) => {
	switch (action.type) {
		case "SET_CURRENT_PAGE": {
			return {
				...state,
				page: {
					...state.page,
					current: action.current,
				},
			}
		}
		case "SET_LAST_HOVERED": {
			return {
				...state,
				page: {
					...state.page,
					lastHovered: action.lastHovered,
				},
			}
		}
		case "SET_MENU_FULLSCREEN": {
			return {
				...state,
				menu: {
					isFullscreen: action.isFullscreen,
				},
			}
		}
		case "SET_CIRCLE_FULLSCREEN": {
			return {
				...state,
				circle: {
					isFullscreen: action.isFullscreen,
				},
			}
		}
		case "HIDE_MENU": {
			return {
				...state,
				menu: {
					isHidden: true,
				},
			}
		}
		case "SHOW_MENU": {
			return {
				...state,
				menu: {
					isHidden: false,
				},
			}
		}
		default:
			throw new Error()
	}
}
