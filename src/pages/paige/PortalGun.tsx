import { Box, Typography } from "@mui/material"
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
      <YoutubeEmbed embedId="LbGg5cHe4nM" />
      <img src={schematic} />
    </Box>
  )
}
