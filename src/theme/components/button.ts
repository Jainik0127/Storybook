import { ComponentStyleConfig } from "@chakra-ui/react"

const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    color: "#000000",
    fontWeight: 500,
    borderRadius: "full",
  },

  // styles for different sizes ("sm", "md", "lg", "xl")
  sizes: {
    lg: {
      px: "24px",
      py: "13px",
      fontSize: "13px",
      lineHeight: "16px",
    },
    md: {
      px: "32px",
      py: "11px",
      fontSize: "14px",
      lineHeight: "16px",
    },
    sm: {
      px: "16px",
      py: "8px",
      fontSize: { base: "12px", lg2: "14px" },
      lineHeight: "17px",
    },
    xs: {
      px: "10px",
      py: "4px",
      fontSize: { base: "8px", lg2: "10px" },
      lineHeight: "15px",
    },
    xl: {
      fontSize: "14px",
      lineHeight: "16px",
    },
  },

  // styles for different visual variants ("outline", "solid")
  variants: {
    solid: {
      fontWeight: 500,
      color: "#FFFFFF",
      bgGradient: "linear(to-r, #D49028 19.59%, #F4CE10 84.69%)",
      border: "1px solid #F5CE11",

      _hover: {
        bg: "secondaryColor",
        _disabled: {
          bg: "#DDDDDD",
          bgGradient: "none",
        },
      },
      _focus: {
        bg: "secondaryColor",
      },
      _active: {
        bg: "secondaryColor",
      },
      _disabled: {
        opacity: 0.5,
        border: "1px solid #F5CE11",
      },
    },
    primary: {
      fontWeight: 500,
      color: "#FFFFFF",
      bgGradient: "linear(to-r, #D49028 19.59%, #F4CE10 84.69%)",
      border: "1px solid #F5CE11",

      _hover: {
        _disabled: {
          bgGradient: "linear(to-r, #D49028 19.59%, #F4CE10 84.69%)",
        },
      },

      _active: {
        bg: "secondaryColor",
        borderColor: "secondaryColor",
      },
      _disabled: {
        opacity: 0.5,
      },
    },
    ghost: {
      fontWeight: 500,
      color: "#000000",
      bgGradient: "transparent",
      _hover: {
        bg: "transparent",
        color: "secondaryColor",
      },
      _focus: {
        bg: "transparent",
        color: "secondaryColor",
      },
      _active: {
        bg: "transparent",
        color: "secondaryColor",
        fontWeight: "600",
      },
      _disabled: {
        opacity: 0.5,
      },
    },
    secondary: {
      fontWeight: 500,
      color: "#000000",
      bgGradient: "transparent",
      border: "1px solid #000000",
      _hover: {},
      _focus: {},
      _active: {
        bg: "secondaryColor",
        color: "#ffffff",
      },
      _disabled: {
        opacity: 0.5,
      },
    },

    secondaryGreen: {
      fontWeight: 500,
      color: "#ffffff",
      bg: "secondaryColor",
      border: "1px solid #000000",
      borderColor: "secondaryColor",
      _hover: {},
      _focus: {},
      _active: {},
      _disabled: {
        opacity: 0.5,
      },
    },

    tertiary: {
      color: "#006F80",
      bg: "tertiaryColor",
      fontWeight: "medium",
      fontSize: "sm",
      border: "1px solid",
      borderColor: "#006F80",
      _hover: { bg: "secondaryColor", color: "#ffffff" },
    },
    primary_nav: {
      fontWeight: 500,
      color: "#000000",
      bgColor: "white",
      borderBottom: { base: "4px solid #E1E1E1", md: "none" },
      borderRadius: { base: "0px", md: "10000px" },

      _hover: {
        bg: "transparent",
        color: "secondaryColor",
      },
      _focus: {
        bg: "transparent",
        color: "secondaryColor",
      },
      _active: {
        bg: "transparent",
        color: "secondaryColor",
        fontWeight: "600",
      },
      _disabled: {
        opacity: 0.5,
      },
    },
    primary_nav_active: {
      fontWeight: 600,
      color: { base: "secondaryColor", md: "#FFFFFF" },

      bgGradient: {
        base: "none",
        md: "linear(to-r, #D49028 19.59%, #F4CE10 84.69%)",
      },
      bgColor: {
        base: "white",
      },
      border: { base: "none", md: "1px solid #F5CE11" },
      borderBottom: { base: "4px solid #0D6F81", md: "1px solid #F5CE11" },
      borderRadius: { base: "0px", md: "10000px" },
      _hover: {
        _disabled: {
          bgGradient: "linear(to-r, #D49028 19.59%, #F4CE10 84.69%)",
        },
      },

      _active: {
        bg: "secondaryColor",
        borderColor: "secondaryColor",
      },
      _disabled: {
        opacity: 0.5,
      },
    },
    link: {
      fontWeight: 500,
      textDecorationLine: "underline",
    },
    active: {
      fontWeight: 500,
      bgGradient: "linear(to-r, #D49028 19.59%, #F4CE10 84.69%)",
    },
    menuItem: {
      w: "full",
      mt: "2",
      py: "10px",
      px: "20px",
      borderRadius: "5px",
      _active: { bg: "#F4CE10" },
      _focus: { bg: "secondaryColor", color: "#ffffff" },
      _hover: { bg: "secondaryColor", color: "#ffffff" },
    },
  },

  // default values for `size` and `variant`
  defaultProps: {
    size: "md",
    variant: "primary",
  },
}

export default Button
