import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./components/layouts/MainLayout"
import { MainPage } from "./pages/MainPage"
import { Paige } from "./pages/paige/Paige"
import { Bryan } from "./pages/bryan/Bryan"
import { NoPage } from "./pages/NoPage"
import { ThemePicker } from "./pages/paige/ThemePicker"
import { ThemeContext } from "./context"
import { useState } from "react"
import { themeDict } from "./themes"
import { Portfolio } from "./pages/Portfolio"
import paigePort from "./content/paige/portfolio.json"
import { PortalGun } from "./pages/paige/PortalGun"
import { ControllerDesign } from "./pages/paige/ControllerDesign"

function App() {
  // const { theme, setTheme } = useContext(ThemeContext)

  const currTheme = localStorage.getItem("themeTag") || "Purple"
  const [theme, setNewTheme] = useState(themeDict[currTheme])
  const setTheme = (newTheme: string, cache: boolean = true) => {
    if (cache) {
      localStorage.setItem("themeTag", newTheme)
    }
    setNewTheme(themeDict[newTheme])
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<MainPage />} />
              {/* Paige */}
              <Route path="paige" element={<Paige />} />
              <Route
                path="paige/portfolio"
                element={
                  <Portfolio name="Paige" sections={paigePort.sections} />
                }
              />
              <Route
                path="paige/portfolio/theme-picker"
                element={<ThemePicker />}
              />
              <Route
                path="paige/portfolio/portal-gun"
                element={<PortalGun />}
              />
              <Route
                path="paige/portfolio/controller-design"
                element={<ControllerDesign />}
              />
              {/* Bryan */}
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
