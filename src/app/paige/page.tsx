"use client"
import { Box, Stack, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { Contact } from "@/app/components/cards/Contact"
import { Resume } from "@/app/components/cards/Resume"
import pContent from "@/app/paige/about.json"
import pStack from "@/app/paige/stack.json"
import { ImgBlob } from "../components/images/ImgBlob"
import { LinedCard, LinedCardActions } from "../components/cards/LinedCard"
import Image from "next/image"
import { SlideShow } from "../components/animated/SlideShow"

export default function Page() {
  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }} m={2}>
        <Box width={350}>
          <ImgBlob id="paige" image="/paige.webp" />
        </Box>
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
            Full Stack Engineer
          </Typography>
          <Contact
            email="paige@maute.us"
            github={{
              link: "https://github.com/DoodlePooge",
              label: "DoodlePooge",
            }}
          ></Contact>
        </Box>
      </Stack>
      <SlideShow direction="row" spacing={3}>
        {pStack.items.map((item) => (
          <LinedCard key={item.tag} sx={{ justifyContent: "center" }}>
            <Image
              src={item.route}
              width="100"
              height="100"
              alt={item.tag + "icon"}
            />
            <LinedCardActions>{item.tag}</LinedCardActions>
          </LinedCard>
        ))}
      </SlideShow>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          {pContent.secondary.map((card) => (
            <Resume key={card.header} info={card} primary={false} />
          ))}
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          {pContent.primary.map((card) => (
            <Resume key={card.header} info={card} primary={true} />
          ))}
        </Grid>
      </Grid>
    </>
  )
}
