import { Avatar, Box, Link, Stack, Typography, useTheme } from "@mui/material"
import { FC } from "react"
import paige from "../assets/paige.webp"
import bryan from "../assets/bryan.webp"

export const MainPage: FC = () => {
  const theme = useTheme()
  return (
    <Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Link href="/paige">
          <Avatar
            src={paige}
            sx={{
              border: 10,
              borderColor: theme.palette.background.paper,
              m: 2,
              width: 300,
              height: 300,
            }}
          />
        </Link>
        <Link href="/bryan">
          <Avatar
            src={bryan}
            sx={{
              border: 10,
              borderColor: theme.palette.background.paper,
              m: 2,
              width: 300,
              height: 300,
            }}
          />
        </Link>
      </Stack>
      <Typography variant="h1" fontWeight={400} sx={{ textAlign: "center" }}>
        Site is currently being worked on, come back later.
      </Typography>
    </Box>
  )
}
