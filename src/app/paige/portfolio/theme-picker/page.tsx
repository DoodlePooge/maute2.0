"use client"
import { Thumbnail } from "@/app/components/images/Thumbnail"
import { ThemeContext } from "@/context"
import { themeDict } from "@/themes"
import { Box, Grid, ToggleButton, Typography } from "@mui/material"
import { useContext } from "react"

export default function Page() {
  const { setTheme } = useContext(ThemeContext)

  const options = []
  for (const key in themeDict) {
    const theme = themeDict[key]
    const selected = localStorage.getItem("themeTag") === key
    options.push(
      <Grid item>
        <ToggleButton
          value={key}
          selected={selected}
          onChange={() => {
            setTheme(key)
          }}
        >
          <Thumbnail
            default={theme.palette.background.default}
            paper={theme.palette.background.paper}
          />
        </ToggleButton>
        <Typography sx={{ m: 1 }}>{key}</Typography>
      </Grid>
    )
  }
  return (
    <Box justifyContent="center" mt={1}>
      <Typography variant="h1" fontWeight={700} mb={2}>
        Pick a Theme!
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {options}
      </Grid>
    </Box>
  )
}
