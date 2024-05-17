import { Box, Grid, ToggleButton, Typography } from "@mui/material"
import { FC, useContext } from "react"
import { themeDict } from "../../themes"
import { Thumbnail } from "../../components/images/Thumbnail"
import { ThemeContext } from "../../context"

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
        <Typography sx={{ m: 1 }}>{key}</Typography>
      </Grid>
    )
  }
  return (
    <Box justifyContent="center">
      <Typography variant="h1" fontWeight={700} mb={2}>
        Pick a Theme!
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {options}
      </Grid>
    </Box>
  )
}
