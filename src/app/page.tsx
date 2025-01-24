"use client";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ImgBlob } from "./components/images/ImgBlob";
import { TransCard, TransCardActions } from "./components/cards/TransCard";
import { LinkButton } from "./components/inputs/LinkButton";

export default function Home() {
  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        rowSpacing={2}
        columnSpacing={6}
      >
        <Grid maxWidth={350} size={{ xs: 12, sm: 6 }}>
          <ImgBlob id="paige" image="/paige.webp" />
        </Grid>
        <Grid maxWidth={500} size={{ xs: 12, sm: 6 }}>
          <TransCard>
            <Typography variant="h1" sx={{ fontWeight: 800 }}>
              Paige
            </Typography>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 500 }}>
              Full Stack Engineer
            </Typography>
            <TransCardActions>
              <LinkButton tag="About Me" link="/paige" />
            </TransCardActions>
          </TransCard>
        </Grid>
        <Grid maxWidth={350} size={{ xs: 12, sm: 6 }}>
          <ImgBlob id="bryan" image="/bryan.webp" />
        </Grid>
        <Grid maxWidth={500} size={{ xs: 12, sm: 6 }}>
          <TransCard>
            <Typography variant="h1" sx={{ fontWeight: 800 }}>
              Bryan
            </Typography>
            <Typography variant="h5" color="primary" sx={{ fontWeight: 500 }}>
              Digital Media Freelancer
            </Typography>
            <TransCardActions>
              <LinkButton tag="About Me" link="/bryan" />
            </TransCardActions>
          </TransCard>
        </Grid>
      </Grid>
    </Box>
  );
}
