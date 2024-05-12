import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./components/layouts/MainLayout"
import { MainPage } from "./pages/MainPage"
import { Paige } from "./pages/Paige"
import { Bryan } from "./pages/Bryan"
import { NoPage } from "./pages/NoPage"
import { ThemePicker } from "./pages/ThemePicker"
import { themeDict } from "./themes"
import { useState } from "react"
import { ThemeContext } from "./context"

function App() {
  const initialState = localStorage.getItem("theme") || "mainT"
  const [theme, setTheme] = useState(initialState)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={themeDict[theme]}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<MainPage />} />
              <Route path="paige" element={<Paige />} />
              <Route path="theme-picker" element={<ThemePicker />} />
              <Route path="bryan" element={<Bryan />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
