import { Box, Typography } from "@mui/material"
import { FC } from "react"
import designs from "../../assets/paige/controllers/designs.webp"
import beachDesign from "../../assets/paige/controllers/beachDesign.jpg"
import finalController from "../../assets/paige/controllers/finalController.jpg"

export const ControllerDesign: FC = () => {
  //   const theme = useTheme()
  return (
    <Box justifyContent="center" mt={1}>
      <Typography variant="h1" fontWeight={700} mb={2}>
        Designing a GameCube Controller
      </Typography>
      <img src={designs} />
      <img src={beachDesign} />
      <img src={finalController} />
    </Box>
  )
}
