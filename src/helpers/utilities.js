/**
 *  General utility functions
 */

export const getPageFromPath = (path) => path === "/" ? "home" : path.split("/")[1]
