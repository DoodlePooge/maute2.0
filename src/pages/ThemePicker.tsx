import { Button, Grid, Typography } from "@mui/material"
import { FC, useContext } from "react"
import { themeDict } from "../themes"
import { Thumbnail } from "../components/misc/Thumbnail"
import { ThemeContext } from "../context"

export const ThemePicker: FC = () => {
  const { setTheme } = useContext(ThemeContext)
  const updateTheme = (theme: string) => {
    setTheme(theme)
  }

  const options = []
  for (const key in themeDict) {
    const theme = themeDict[key]
    options.push(
      <Grid item>
        <Button
          onClick={() => {
            updateTheme(key)
          }}
        >
          <Thumbnail
            default={theme.palette.background.default}
            paper={theme.palette.background.paper}
          />
        </Button>
      </Grid>
    )
  }
  return (
    <>
      <Typography variant="h1">Pick a Theme!</Typography>
      <Grid container spacing={3}>
        {options}
      </Grid>
      <Typography variant="h3">Custom Theme Options</Typography>
    </>
  )
}
