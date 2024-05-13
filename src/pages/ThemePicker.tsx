import { Box, Grid, ToggleButton, Typography } from "@mui/material"
import { FC, useContext } from "react"
import { themeDict } from "../themes"
import { Thumbnail } from "../components/images/Thumbnail"
import { ThemeContext } from "../context"

export const ThemePicker: FC = () => {
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
        <Typography sx={{ margin: 1 }}>{key}</Typography>
      </Grid>
    )
  }
  return (
    <Box>
      <Typography variant="h1">Pick a Theme!</Typography>
      <Grid container spacing={3}>
        {options}
      </Grid>
    </Box>
  )
}
