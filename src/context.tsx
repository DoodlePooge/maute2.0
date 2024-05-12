import { Dispatch, createContext } from "react"

interface defaultThemeContext {
  theme: string
  setTheme: Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<defaultThemeContext>({
  theme: "mainT",
  setTheme: () => {},
})
