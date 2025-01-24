"use client"
import { Box, Grid, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { Contact } from "@/app/components/cards/Contact"
import { Resume } from "@/app/components/cards/Resume"
import { SuccessNotif } from "@/app/components/notifs/SuccessNotif"
import pContent from "@/app/paige/about.json"
import { ImgBlob } from "../components/images/ImgBlob"

export default function Page() {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <>
      <SuccessNotif message={message} open={open} setOpen={setOpen} />
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
            Junior Software Engineer
          </Typography>
        </Box>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Contact
            info={pContent.contact}
            open={open}
            setOpen={setOpen}
            setMessage={setMessage}
          ></Contact>
          {pContent.secondary.map((card) => (
            <Resume key={card.header} info={card} primary={false} />
          ))}
        </Grid>
        <Grid item xs={12} md={8}>
          {pContent.primary.map((card) => (
            <Resume key={card.header} info={card} primary={true} />
          ))}
        </Grid>
      </Grid>
    </>
  )
}
