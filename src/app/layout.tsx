"use client";
import Head from "./pages/_document";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeContext } from "@/context";
import { themeDict } from "@/themes";
import { useState } from "react";
import { MainLayout } from "./components/layouts/MainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currTheme = "Purple";
  const [theme, setNewTheme] = useState(themeDict[currTheme]);
  const setTheme = (newTheme: string, cache: boolean = true) => {
    if (cache) {
      localStorage.setItem("themeTag", newTheme);
    }
    setNewTheme(themeDict[newTheme]);
  };
  return (
    <html lang="en">
      <Head />
      <body>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <MainLayout>{children}</MainLayout>
          </ThemeProvider>
        </ThemeContext.Provider>
      </body>
    </html>
  );
}
