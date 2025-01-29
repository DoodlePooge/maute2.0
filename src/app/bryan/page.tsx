"use client"
import { Box, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { useContext } from "react"
import bContent from "../bryan/about.json"
import { Contact } from "../components/cards/Contact"
import { Resume } from "../components/cards/Resume"
import { ThemeContext } from "@/context"
import { ImgBlob } from "../components/images/ImgBlob"

export default function Page() {
  const { setTheme } = useContext(ThemeContext)
  setTheme("Red", false)

  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }} m={2}>
        <Box width={350}>
          <ImgBlob id="bryan" image="/bryan.webp" />
        </Box>
        <Box
          sx={{
            m: "2vw",
            maxHeight: 300,
            alignContent: "center",
          }}
        >
          <Typography variant="h1" fontWeight={800}>
            Bryan
          </Typography>
          <Typography variant="h2" fontWeight={500} color="primary">
            Digital Media Freelancer
          </Typography>
          <Contact
            email="bryan@maute.us"
            links={[
              {
                label: "Behance Portfolio",
                link: "https://www.behance.net/bryanmaute1d32",
              },
            ]}
          ></Contact>
        </Box>
      </Stack>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          {bContent.secondary.map((card) => (
            <Resume key={card.header} info={card} primary={false} />
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          {bContent.primary.map((card) => (
            <Resume key={card.header} info={card} primary={true} />
          ))}
        </Grid>
      </Grid>
    </>
  )
}
