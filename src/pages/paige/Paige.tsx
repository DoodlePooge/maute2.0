import { Avatar, Box, Grid, Stack, Typography, useTheme } from "@mui/material"
import { FC, useContext } from "react"
import paige from "../../assets/paige/paige.webp"
import pContent from "../../content//paige/about.json"
import { Contact } from "../../components/cards/Contact"
import { Resume } from "../../components/cards/Resume"
import { ThemeContext } from "../../context"
import { useOutletContext } from "react-router-dom"
import { outletContext } from "../../components/layouts/MainLayout"

export const Paige: FC = () => {
  const { setTheme } = useContext(ThemeContext)
  setTheme("Purple", false)
  const alertProps: outletContext = useOutletContext()

  const theme = useTheme()
  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }} m={2}>
        <Avatar
          src={paige}
          sx={{
            border: 10,
            borderColor: theme.palette.background.paper,
            width: 300,
            height: 300,
          }}
        />
        <Box
          sx={{
            m: "2vw",
            maxHeight: 300,
            alignContent: "center",
          }}
        >
          <Typography variant="h1" fontWeight={800}>
            Paige
          </Typography>
          <Typography variant="h2" fontWeight={500} color="primary">
            Junior Software Engineer
          </Typography>
        </Box>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Contact
            info={pContent.contact}
            open={alertProps.open}
            setOpen={alertProps.setOpen}
            setMessage={alertProps.setMessage}
          ></Contact>
          {pContent.secondary.map((card) => (
            <Resume info={card} primary={false} />
          ))}
        </Grid>
        <Grid item xs={12} md={8}>
          {pContent.primary.map((card) => (
            <Resume info={card} primary={true} />
          ))}
        </Grid>
      </Grid>
    </>
  )
}
