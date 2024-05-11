import { ThemeProvider } from "@emotion/react"
import { bryTheme, mainTheme } from "./themes"
import { CssBaseline } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "./components/layouts/MainLayout"
import { MainPage } from "./pages/MainPage"
import { Paige } from "./pages/Paige"
import { Bryan } from "./pages/Bryan"
import { NoPage } from "./pages/NoPage"
import { ThemePicker } from "./pages/ThemePicker"

function App() {
  const pathname = window.location.pathname
  const pathTheme = pathname.includes("paige")
    ? "paige"
    : pathname.includes("bryan")
      ? "bryan"
      : "main"
  const theme = pathTheme === "bryan" ? bryTheme : mainTheme

  return (
    <ThemeProvider theme={theme}>
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
  )
}

export default App
