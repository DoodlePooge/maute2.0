import { createTheme } from "@mui/material/styles";

// https://coolors.co/30343f-ff8d8d-ffeca8-bbf9bd-ffbdab-fafaff-eee8ff-e2d6ff-273469-1e2749
// https://coolors.co/30343f-ff6969-ffe37c-94ff97-a5d5ff-fffafa-ffc9c9-ff9797-273469-1e2749

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#273469",
    },
    secondary: {
      main: "#FFBDAB",
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
});
export const bryTheme = createTheme({
  palette: {
    primary: {
      main: "#273469",
    },
    secondary: {
      main: "#A5D5FF",
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
      primary: "#30343F",
      secondary: "#273469",
      disabled: "#B2B2B2",
    },
  },
});
