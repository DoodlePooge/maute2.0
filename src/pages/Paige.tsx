import { Avatar, Box, Grid, Stack, Typography, useTheme } from "@mui/material"
import { FC, useContext } from "react"
import paige from "../assets/paige.webp"
import pContent from "../content/paige.json"
import { Contact } from "../cards/Contact"
import { Resume } from "../cards/Resume"
import { ThemeContext } from "../context"

export const Paige: FC = () => {
  const { setTheme } = useContext(ThemeContext)
  setTheme("Purple", false)

  const theme = useTheme()
  return (
    <>
      <Stack direction="row">
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
        <Box
          sx={{
            m: 2,
            height: 300,
            alignContent: "center",
          }}
        >
          <Typography variant="h1">Paige</Typography>
          <Typography variant="h2" color="primary">
            Junior Software Engineer
          </Typography>
        </Box>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Contact info={pContent.contact}></Contact>
          {pContent.secondary.map((card) => (
            <Resume info={card} />
          ))}
        </Grid>
        <Grid item xs={12} md={8}>
          {pContent.primary.map((card) => (
            <Resume info={card} />
          ))}
        </Grid>
      </Grid>
    </>
  )
}
