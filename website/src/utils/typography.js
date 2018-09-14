import Typography from "typography"

// import fairyGatesTheme from "typography-theme-fairy-gates"
import noriagaTheme from "typography-theme-noriega"



noriagaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    textDecoration: "none"
  }
})

const typography = new Typography(noriagaTheme)

export default typography
