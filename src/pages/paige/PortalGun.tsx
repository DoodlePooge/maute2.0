import { Box, Card, Grid, Typography } from "@mui/material"
import { FC } from "react"
import schematic from "../../assets/paige/portal/PGSchematic.webp"
import { YoutubeEmbed } from "../../components/images/YouTubeEmbed"

export const PortalGun: FC = () => {
  //   const theme = useTheme()
  return (
    <Box justifyContent="center">
      <Typography variant="h1" fontWeight={700} mb={2}>
        Aperture Portal Gun Prop
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <YoutubeEmbed embedId="LbGg5cHe4nM" />
        </Grid>
        <Grid item>
          <Card sx={{ p: 1 }}>
            <img src={schematic} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
