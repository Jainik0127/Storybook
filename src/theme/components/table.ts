import type { ComponentStyleConfig } from "@chakra-ui/theme"

// You can also use the more specific type for
// a multipart component: ComponentMultiStyleConfig
const Table: ComponentStyleConfig = {
  // All parts of multipart components can be found in the @chakra-ui/anatomy package,
  // the menuAnatomy has as well these parts: button, list, groupTitle, command, divider
  parts: ["table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"],

  baseStyle: {
    table: {},
    thead: {},
    tbody: {},
    tr: {},
    th: {},
    td: {},
    tfoot: {},
  },

  sizes: {
    md: {
      table: {},
      thead: {},
      tbody: {},
      tr: {},
      th: {
        py: "20px",
        px: "16px",
        _first: {
          paddingLeft: "26px",
        },
      },
      td: {
        py: "20px",
        px: "16px",
        _first: {
          paddingLeft: "26px",
        },
      },
      tfoot: {},
      caption: {
        p: "0px",
        margin: "0px",
      },
    },
    template: {
      table: {
        width: "100%",
      },
      thead: {
        tr: {
          width: "100%",
        },
      },
      tr: {
        display: "flex",
        px: { base: "20px", md: "40px" },
        py: { base: "20px", md: "24px" },
      },
      caption: {
        p: "0px",
        margin: "0px",
      },
    },
  },

  variants: {
    custom: {
      table: { bg: "#ffffff" },
      thead: { borderBottom: "2px solid #e1e1e1" },
      tbody: { borderTop: "2px solid #e1e1e1" },
      tr: {
        borderBottom: "1px solid #e1e1e1",
        _hover: {
          bg: "#f0f0f0",
        },
        _active: {
          bg: "#f0f0f0",
        },
      },
      th: {
        fontSize: { base: "14px", md: "18px" },
        color: "#000000",
        textTransform: "initial",
        letterSpacing: "1",
        fontWeight: 500,
        // whiteSpace: "pre-wrap",
      },
      td: {
        fontSize: { base: "14px", md: "16px" },
        color: "#000000",
        fontWeight: 400,
        whiteSpace: "pre-wrap",
      },
      tfoot: {},
      caption: {
        borderTop: "1px solid #e1e1e1",
      },
    },
  },

  defaultProps: {
    size: "md",
    variant: "custom",
  },
}

export default Table
