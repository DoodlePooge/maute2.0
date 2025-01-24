"use client"
import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { ImgBlob } from "./components/images/ImgBlob"
import { TransCard, TransCardActions } from "./components/cards/TransCard"
import { LinkButton } from "./components/inputs/LinkButton"

export default function Home() {
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <ImgBlob id="paige" image="/paige.webp" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TransCard>
            <Typography variant="h1" sx={{ fontWeight: 800 }}>
              Paige
            </Typography>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 500 }}>
              Full Stack Engineer
            </Typography>
            <TransCardActions>
              <LinkButton tag="About Me" link="/paige" />
              <LinkButton tag="Portfolio" link="/paige/portfolio" />
            </TransCardActions>
          </TransCard>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <ImgBlob id="bryan" image="/bryan.webp" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <Typography variant="h1" sx={{ fontWeight: 800 }}>
            Bryan
          </Typography>
          <Typography variant="h5" color="primary" sx={{ fontWeight: 500 }}>
            Digital Media Freelancer
          </Typography>
          <TransCardActions>
            <LinkButton tag="About Me" link="/bryan" />
          </TransCardActions>
        </Grid>
      </Grid>
    </Box>
  )
}
