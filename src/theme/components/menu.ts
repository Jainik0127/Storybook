import type { ComponentStyleConfig } from "@chakra-ui/theme"

// You can also use the more specific type for
// a multipart component: ComponentMultiStyleConfig
const Menu: ComponentStyleConfig = {
  // All parts of multipart components can be found in the @chakra-ui/anatomy package,
  // the menuAnatomy has as well these parts: button, list, groupTitle, command, divider
  parts: ["button", "item", "list", "groupTitle", "command", "divider"],

  baseStyle: {
    button: {},
    item: {},
    list: {},
    groupTitle: {},
    command: {},
    divider: {},
  },

  sizes: {
    md: {
      button: {},
      item: {},
      list: {},
      groupTitle: {},
      command: {},
      divider: {},
    },
  },

  variants: {
    custom: {
      button: {},
      item: {
        mt: "2",
        py: "10px",
        px: "10px",
        borderRadius: "5px",
        _active: { bg: "#F4CE10" },
        _focus: { bg: "secondaryColor", color: "#ffffff" },
      },
      list: {
        bg: "#ffffff",
        p: "2",
        pt: "0",
        borderRadius: "10px",
        shadow: "0px 6px 12px rgba(0,0,0,0.16)",
        border: "1px solid #B4e0e4",
      },
      groupTitle: {},
      command: {},
      divider: {},
    },
  },

  defaultProps: {
    size: "md",
    variant: "custom",
  },
}

export default Menu
