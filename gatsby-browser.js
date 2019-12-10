import Typography from "typography"

export const shouldUpdateScroll = () => false

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: ["system-ui", "sans-serif"],
  bodyFontFamily: ["system-ui", "sans-serif"],
})

export const onClientEntry = () => {
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }

  typography.injectStyles()
}
