import {
  extendTheme,
  type ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react"

// Component style overrides
import Button from "theme/components/button"
import Checkbox from "theme/components/checkbox"
import Menu from "theme/components/menu"
import Table from "theme/components/table"
import Text from "theme/components/text"
// Foundational style overrides
import breakpoints from "theme/foundations/breakpoints"
import colors from "theme/foundations/colors"
// Global style overrides
import styles from "theme/styles"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const customTheme = extendTheme(
  {
    // breakpoints,
    config,
    styles,
    breakpoints,
    colors,
    fonts: {
      heading: "Montserrat, sans-serif",
      body: "Montserrat, sans-serif",
    },
  },
  {
    components: {
      Button,
      Text,
      Table,
      Menu,
      Checkbox,
    },
  },
  withDefaultColorScheme({
    colorScheme: "black",
    components: ["Progress"],
  }),
)

export default customTheme
