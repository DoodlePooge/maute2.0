import { Box, Card, Grid, Typography } from "@mui/material"
import { FC } from "react"
import designs from "../../assets/paige/controllers/designs.webp"
import beachDesign from "../../assets/paige/controllers/beachDesign.jpg"
import finalController from "../../assets/paige/controllers/finalController.jpg"

export const ControllerDesign: FC = () => {
  //   const theme = useTheme()
  return (
    <Box justifyContent="center">
      <Typography variant="h1" fontWeight={700} mb={2}>
        Designing a GameCube Controller
      </Typography>
      <Grid container>
        <Grid item>
          <Card sx={{ p: 2 }}>
            <img src={designs} width="100%" />
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card sx={{ p: 2 }}>
            <img src={beachDesign} width="100%" />
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card sx={{ p: 2 }}>
            <img src={finalController} width="100%" />
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
