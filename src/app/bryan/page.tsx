"use client";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import bContent from "../bryan/about.json";
import { Contact } from "../components/cards/Contact";
import { Resume } from "../components/cards/Resume";
import { ThemeContext } from "@/context";
import { SuccessNotif } from "../components/notifs/SuccessNotif";
import { ImgBlob } from "../components/images/ImgBlob";

export default function Page() {
  const { setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  setTheme("Red", false);

  return (
    <>
      <SuccessNotif message={message} open={open} setOpen={setOpen} />
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
        </Box>
      </Stack>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Contact
            info={bContent.contact}
            open={open}
            setOpen={setOpen}
            setMessage={setMessage}
          ></Contact>
          {bContent.secondary.map((card) => (
            <Resume key={card.header} info={card} primary={false} />
          ))}
        </Grid>
        <Grid item xs={12} md={8}>
          {bContent.primary.map((card) => (
            <Resume key={card.header} info={card} primary={true} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
