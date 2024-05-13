import { Avatar, Box, Grid, Stack, Typography, useTheme } from "@mui/material"
import { FC, useContext } from "react"
import bryan from "../assets/bryan.jpg"
import bContent from "../content/bryan.json"
import { Contact } from "../components/cards/Contact"
import { Resume } from "../components/cards/Resume"
import { ThemeContext } from "../context"

export const Bryan: FC = () => {
  const { setTheme } = useContext(ThemeContext)
  setTheme("Red", false)

  const theme = useTheme()
  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }}>
        <Avatar
          src={bryan}
          sx={{
            border: 10,
            borderColor: theme.palette.background.paper,
            m: 2,
            width: 300,
            height: 300
          }}
        />
        <Box
          sx={{
            m: 2,
            height: 300,
            alignContent: "center"
          }}
        >
          <Typography variant="h1" fontWeight={800}>
            Bryan
          </Typography>
          <Typography variant="h2" fontWeight={500} color="primary">
            Social Media Person :)
          </Typography>
        </Box>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Contact info={bContent.contact}></Contact>
          {bContent.secondary.map((card) => (
            <Resume info={card} primary={false} />
          ))}
        </Grid>
        <Grid item xs={12} md={8}>
          {bContent.primary.map((card) => (
            <Resume info={card} primary={true} />
          ))}
        </Grid>
      </Grid>
    </>
  )
}
