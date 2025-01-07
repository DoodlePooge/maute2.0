"use client"
import { Avatar, Box, Grid, useTheme } from "@mui/material"
import paigeCard from "@/app/content/paige/summary.json"
import bryanCard from "@/app/content/bryan/summary.json"
import { Summary } from "@/app/components/cards/Summary"

export default function Home() {
  const theme = useTheme()
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="flex-end">
        <Grid item xs={12} sm={6} md={4}>
          <Avatar
            src="/paige.webp"
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
            src="bryan.webp"
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
