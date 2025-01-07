"use client"
import { Thumbnail } from "@/app/components/images/Thumbnail"
import { ThemeContext } from "@/context"
import { themeDict } from "@/themes"
import { Box, Grid, ToggleButton, Typography } from "@mui/material"
import { useContext } from "react"

export default function Page() {
  const { theme, setTheme } = useContext(ThemeContext)

  const options = []
  for (const key in themeDict) {
    const op = themeDict[key]
    const selected = theme === themeDict[key]
    options.push(
      <Grid item key={key}>
        <ToggleButton
          value={key}
          selected={selected}
          onChange={() => {
            setTheme(key)
          }}
        >
          <Thumbnail
            default={op.palette.background.default}
            paper={op.palette.background.paper}
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
