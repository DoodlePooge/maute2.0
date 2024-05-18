import { Box, Card, Grid, Typography } from "@mui/material"
import { FC } from "react"
import schematic from "../../assets/paige/portal/PGSchematic.webp"
import blueprint from "../../assets/paige/portal/blueprint.jpg"
import handle from "../../assets/paige/portal/handle.webp"
import base1 from "../../assets/paige/portal/base1.webp"
import base2 from "../../assets/paige/portal/base2.webp"
import tube1 from "../../assets/paige/portal/tube1.webp"
import tube2 from "../../assets/paige/portal/tube2.webp"
import { YoutubeEmbed } from "../../components/images/YouTubeEmbed"

export const PortalGun: FC = () => {
  //   const theme = useTheme()
  return (
    <Box justifyContent="center">
      <Typography variant="h1" fontWeight={700} mb={2}>
        Aperture Portal Gun Prop
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ p: 2 }}>
            <Typography sx={{ textIndent: "1em", pb: 2 }}>
              The idea from this project was a way to satisfy assignments from a
              3D printing class and a microcontroller type class. This became a
              final project in my last semester at East Stroudsburg university.
              I worked with 2 other students that share the credit of the
              project.
            </Typography>
            <Typography sx={{ textIndent: "1em", pb: 2 }}>
              My friends and I loved the Valve game, Portal, and wanted to make
              a model of the portal gun. The goal was to make the model with an
              arduino inside that controlled lights and sounds. Here's the basic
              idea of the device from the game:
            </Typography>
            <Grid item md={5}>
              <img src={blueprint} width="100%" />
            </Grid>
            <Typography sx={{ textIndent: "1em", pb: 2 }}>
              We started making a model with the plan in mind that the
              controller would be in the back of the model. The following images
              are the initial models we came up with that would house the
              controller that would be accessible to us.
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={4}>
                <img src={handle} width={"100%"} />
              </Grid>
              <Grid item md={4}>
                <img src={base1} width={"100%"} />
              </Grid>
              <Grid item md={4}>
                <img src={base2} width={"100%"} />
              </Grid>
              <Grid item md={4}>
                <img src={tube1} width={"100%"} />
              </Grid>
              <Grid item md={4}>
                <img src={tube2} width={"100%"} />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card sx={{ p: 2, mb: 2 }}>
            <Typography sx={{ textIndent: "1em", pb: 2 }}>
              The electronics seemed to be a bigger puzzle. We wanted both
              lights and sounds. Lights were simple enough, there are many
              libraries for LED programming and the electronics are simple
              enough. However the sounds were the issue.
            </Typography>
            <Typography sx={{ textIndent: "1em", pb: 2 }}>
              These were not just any sounds, but sounds and voicelines from the
              game. This required our first challenge of how we were going to
              store these files. Since the microcontroller does not have the
              storage space for multiple sound files we configured an SD card
              module. The next issue was the figuring out the format these files
              needed to be for the speaker to play them properly. Through some
              resources online, we came up with the schematic.
            </Typography>
          </Card>
          <YoutubeEmbed embedId="LbGg5cHe4nM" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card sx={{ p: 1 }}>
            <img src={schematic} width={"100%"} />
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
