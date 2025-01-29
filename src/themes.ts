import { Theme, createTheme, responsiveFontSizes } from "@mui/material/styles"
import type {} from "@mui/material/themeCssVarsAugmentation"

// Paige Light
// https://coolors.co/30343f-ff5c5c-ffdc5c-69f26d-fafaff-e1d6ff-d4c2ff-273469-1e2749-171f3b

// Bryan Dark
// https://coolors.co/30343f-ff8d8d-ffeca8-bbf9bd-fff5f5-ff9d9d-ff7070-1d264a-181f3b-12172b

const common = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1300,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', "sans-serif"].join(","),
  },
  shape: {
    borderRadius: 4,
  },
}

const mainTheme = responsiveFontSizes(
  createTheme({
    cssVariables: true,
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#273469",
          },
          secondary: {
            main: "#E1D6FF",
          },
          background: {
            default: "#D4C2FF",
            paper: "#E1D6FF",
          },
          success: {
            main: "#69F26D",
            contrastText: "#FAFAFF",
          },
          warning: {
            main: "#FFDC5C",
            contrastText: "#FAFAFF",
          },
          error: {
            main: "#FF5C5C",
            contrastText: "#FAFAFF",
          },
          text: {
            primary: "#30343F",
            secondary: "#273469",
            disabled: "#B2B2B2",
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: "#D4C2FF",
          },
          secondary: {
            main: "#1E2749",
          },
          background: {
            default: "#1E2749",
            paper: "#273469",
          },
          success: {
            main: "#BBF9BD",
            contrastText: "#171f3b",
          },
          warning: {
            main: "#FFECA8",
            contrastText: "#171f3b",
          },
          error: {
            contrastText: "#171f3b",
            main: "#FF8D8D",
          },
          text: {
            primary: "#FAFAFF",
            secondary: "#E1D6FF",
            disabled: "#D4C2FF",
          },
        },
      },
    },
    ...common,
  })
)

const bryTheme = responsiveFontSizes(
  createTheme({
    cssVariables: true,
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            main: "#FF7070",
          },
          secondary: {
            main: "#181F3B",
          },
          background: {
            default: "#181F3B",
            paper: "#1D264A",
          },
          success: {
            main: "#BBF9BD",
            contrastText: "#12172B",
          },
          warning: {
            main: "#FFECA8",
            contrastText: "#12172B",
          },
          error: {
            main: "#FF8D8D",
            contrastText: "#12172B",
          },
          text: {
            primary: "#FFF5F5",
            secondary: "#FF9D9D",
            disabled: "#FF7070",
          },
        },
      },
      light: {
        palette: {
          primary: {
            main: "#181F3B",
          },
          secondary: {
            main: "#FF9D9D",
          },
          background: {
            default: "#FF7070",
            paper: "#FF9D9D",
          },
          success: {
            main: "#69F26D",
            contrastText: "#FFF5F5",
          },
          warning: {
            main: "#FFDC5C",
            contrastText: "#FFF5F5",
          },
          error: {
            main: "#FF5C5C",
            contrastText: "#FFF5F5",
          },
          text: {
            primary: "#23272F",
            secondary: "#1E2749",
            disabled: "#B2B2B2",
          },
        },
      },
    },
    ...common,
  })
)

export const themeDict: { [key: string]: Theme } = {
  Purple: mainTheme,
  Red: bryTheme,
}
