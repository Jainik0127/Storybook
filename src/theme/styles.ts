import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools"

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      fontFamily: "body",
      color: "gray.800",
      bg: "white",
      transition: "background-color 0.2s",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: "gray.400",
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
  }),
}

export default styles
