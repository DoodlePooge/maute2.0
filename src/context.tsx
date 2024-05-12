import { createContext } from "react"
import { themeDict } from "./themes"
import { Theme } from "@mui/material"

interface defaultThemeContext {
  theme: Theme
  setTheme: (newTheme: string, cache?: boolean) => void
}

const CreateDefaultTheme = () => {
  const currTheme = localStorage.getItem("themeTag") || "Purple"

  return { theme: themeDict[currTheme], setTheme: () => {} }
}

export const ThemeContext =
  createContext<defaultThemeContext>(CreateDefaultTheme())
