import { Box, Typography } from "@mui/material"

export default function Custom404() {
  return (
    <Box justifyContent="center" width="100%" mt={5}>
      <Typography variant="h1" fontWeight={600}>
        Sorry... <br />
        This page does not exist.
      </Typography>
    </Box>
  )
}
