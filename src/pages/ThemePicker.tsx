import { Box, Grid, Link } from "@mui/material"
import { FC } from "react"
import { allThemes } from "../themes"
import { Thumbnail } from "../components/misc/Thumbnail"

export const ThemePicker: FC = () => {
  //   const theme = useTheme()
  return (
    <>
      <Grid container spacing={3}>
        {allThemes.map((theme) => (
          <Grid item>
            <Link>
              <Box
                sx={{
                  mx: 1,
                  p: 1,
                  backgroundColor: theme.palette.action.hover,
                  border: 1,
                  borderRadius: 1,
                  borderColor: theme.palette.action.active,
                }}
              >
                <Thumbnail
                  default={theme.palette.background.default}
                  paper={theme.palette.background.paper}
                />
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
