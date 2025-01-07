import { Box, Link, Typography } from "@mui/material"
import { Blob } from "../images/Blob"

export const MainLayout = () => {
  return (
    <>
      <Link href="/" underline="none">
        <Typography
          variant="h2"
          fontWeight={900}
          color="var(--foreground)" // 2nd
          sx={{
            ml: "3vw",
            mt: "2vh",
            position: "absolute",
            maxWidth: "90vw",
          }}
        >
          MAUTE.US
        </Typography>
      </Link>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          "@media (min-width: 400px)": { top: -750, left: -650 },
          "@media (max-width: 400px)": {
            top: -700,
            left: -1700,
          },
          zIndex: -1,
        }}
      >
        <Blob fill="var(--background)" />
      </Box>
      <Box
        aria-hidden
        sx={{
          zIndex: -1,
          "@media (min-width: 400px)": {
            top: "60vh",
            float: "right",
            position: "absolute",
            "@media (min-width: 2000px)": {
              position: "fixed",
              right: -400,
            },
          },
          "@media (max-width: 400px)": {
            top: -100,
            position: "absolute",
          },
        }}
      >
        <Blob fill="var(--background)" />
      </Box>
    </>
  )
}
