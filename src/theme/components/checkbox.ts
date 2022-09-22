import { ComponentStyleConfig } from "@chakra-ui/react"

const Checkbox: ComponentStyleConfig = {
  // The styles all Checkbox have in common
  baseStyle: {},

  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    md: {},
  },

  // styles for different visual variants ("outline", "solid")
  variants: {
    custom: {},
  },

  // default values for `size` and `variant`
  defaultProps: {
    size: "md",
    variant: "custom",
  },
}

export default Checkbox
