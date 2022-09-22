import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import theme from "../src/theme"

const customViewports = {
  bigSizeLaptop: {
    name: "Full HD television",
    styles: {
      width: "1920px",
      height: "1080px",
    },
  },
  laptop: {
    name: "Laptop",
    styles: {
      width: "1536px",
      height: "864px",
    },
  },
  laptopWithTouch: {
    name: "Laptop With Touch",
    styles: {
      width: "1280px",
      height: "720px",
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "centered",
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
  chakra: {
    theme,
  },
}
