import { Avatar, Box, Grid, Stack, Typography, useTheme } from "@mui/material"
import { FC } from "react"
import bryan from "../assets/bryan.jpg"
import bContent from "../content/bryan.json"
import { Contact } from "../cards/Contact"
import { Resume } from "../cards/Resume"

export const Bryan: FC = () => {
  const theme = useTheme()
  return (
    <>
      <Stack direction="row">
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
        <Box
          sx={{
            m: 2,
            height: 300,
            alignContent: "center",
          }}
        >
          <Typography variant="h1">Bryan</Typography>
          <Typography variant="h2" color="primary">
            Social Media Person :)
          </Typography>
        </Box>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Contact info={bContent.contact}></Contact>
          {bContent.secondary.map((card) => (
            <Resume info={card} />
          ))}
        </Grid>
        <Grid item xs={12} md={8}>
          {bContent.primary.map((card) => (
            <Resume info={card} />
          ))}
        </Grid>
      </Grid>
    </>
  )
}
