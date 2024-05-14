import { Avatar, Box, Grid, useTheme } from "@mui/material"
import { FC } from "react"
import paigeImg from "../assets/paige.webp"
import bryanImg from "../assets/bryan.webp"
import paigeCard from "../content/paige/summary.json"
import bryanCard from "../content/bryan/summary.json"
import { Summary } from "../components/cards/Summary"

export const MainPage: FC = () => {
  const theme = useTheme()
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="flex-end">
        <Grid item xs={12} sm={6} md={4}>
          <Avatar
            src={paigeImg}
            sx={{
              border: 10,
              borderColor: theme.palette.background.paper,
              m: 2,
              width: 300,
              height: 300,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Summary info={paigeCard} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Avatar
            src={bryanImg}
            sx={{
              border: 10,
              borderColor: theme.palette.background.paper,
              m: 2,
              width: 300,
              height: 300,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Summary info={bryanCard} />
        </Grid>
      </Grid>
    </Box>
  )
}
