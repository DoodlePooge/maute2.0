import { Theme, createTheme, responsiveFontSizes } from "@mui/material/styles";
import type {} from "@mui/material/themeCssVarsAugmentation";

// https://coolors.co/30343f-ff8d8d-ffeca8-bbf9bd-fafaff-eee8ff-e2d6ff-273469-1e2749
// https://coolors.co/23272f-ff6969-ffe37c-94ff97-fffafa-ffc9c9-ff9797-1e2749
// https://coolors.co/30343f-ff8d8d-ffeca8-bbf9bd-e8f8ff-d6e9ff-273469-1e2749

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
};

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
            main: "#EEE8FF",
          },
          background: {
            default: "#E2D6FF",
            paper: "#EEE8FF",
          },
          success: {
            main: "#69F26D",
          },
          warning: {
            main: "#FFE070",
          },
          error: {
            main: "#FF5C5C",
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
            main: "#E2D6FF",
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
          },
          warning: {
            main: "#FFECA8",
          },
          error: {
            main: "#FF8D8D",
          },
          text: {
            primary: "#FAFAFF",
            secondary: "#EEE8FF",
            disabled: "#E2D6FF",
          },
        },
      },
    },
    ...common,
  }),
);

const bryTheme = responsiveFontSizes(
  createTheme({
    cssVariables: true,
    colorSchemes: {
      dark: {
        palette: {
          primary: {
            main: "#FF9797",
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
          },
          warning: {
            main: "#FFECA8",
          },
          error: {
            main: "#FF8D8D",
          },
          text: {
            primary: "#FAFAFF",
            secondary: "#FFC9C9",
            disabled: "#FF9797",
          },
        },
      },
      light: {
        palette: {
          primary: {
            main: "#1E2749",
          },
          secondary: {
            main: "#FFC9C9",
          },
          background: {
            default: "#FF9797",
            paper: "#FFC9C9",
          },
          success: {
            main: "#94FF97",
          },
          warning: {
            main: "#FFE37C",
          },
          error: {
            main: "#FF6969",
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
  }),
);

export const themeDict: { [key: string]: Theme } = {
  Purple: mainTheme,
  Red: bryTheme,
};
