import { Box, Typography } from "@mui/material"
import { FC } from "react"

export const NoPage: FC = () => {
  return (
    <Box justifyContent="center" width="100%" marginTop={5}>
      <Typography variant="h1" fontWeight={600}>
        Sorry... <br />
        This page does not exist.
      </Typography>
    </Box>
  )
}
