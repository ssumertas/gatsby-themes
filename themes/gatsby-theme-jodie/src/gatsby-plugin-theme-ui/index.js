import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

const pageProjectContent = {
  px: [3, 3, 4, 5, 6],
  py: [3, 3, 4, 5, 5],
  maxWidth: `6xl`,
}

const theme = merge(tailwind, {
  initialColorModeName: `light`,
  useCustomProperties: true,
  colors: {
    primary: `#b75e09`,
    primaryLight: `#f18a27`,
    secondary: tailwind.colors.indigo[6],
    heading: tailwind.colors.black,
    background: tailwind.colors.white,
    text: tailwind.colors.gray[9],
    textMuted: `#46505f`,
    textMutedLight: `#a0aab8`,
  },
  sidebar: {
    normal: `320px`,
    wide: `375px`,
  },
  fonts: {
    body: `"Work Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
  content: {
    page: {
      ...pageProjectContent,
    },
    project: {
      ...pageProjectContent,
    },
  },
  text: {
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
    },
    a: {
      transition: `all 0.3s ease-in-out`,
      color: `black`,
      textDecoration: `none`,
      "&:hover, &:focus": {
        color: `primary`,
        textDecoration: `none`,
      },
    },
    p: {
      fontSize: [1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
    },
    h1: {
      variant: `text.heading`,
      fontSize: [5, 5, 6],
      mt: 2,
    },
    h2: {
      variant: `text.heading`,
      fontSize: [4, 4, 5],
      mt: 2,
    },
    h3: {
      variant: `text.heading`,
      fontSize: [3, 3, 4],
      mt: 3,
    },
    h4: {
      variant: `text.heading`,
      fontSize: [2, 2, 3],
    },
    h5: {
      variant: `text.heading`,
      fontSize: [1, 1, 2],
    },
    h6: {
      variant: `text.heading`,
      fontSize: 1,
      mb: 2,
    },
  },
})

export default theme