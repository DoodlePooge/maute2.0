import { Avatar, Box, Grid, Stack, Typography, useTheme } from "@mui/material"
import { FC, useState } from "react"
import { Contact } from "@/app/components/cards/Contact"
import { Resume } from "@/app/components/cards/Resume"
import { SuccessNotif } from "@/app/components/notifs/SuccessNotif"
import pContent from "@/app/content/paige/about.json"

export const Paige: FC = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")

  const theme = useTheme()
  return (
    <>
      <SuccessNotif message={message} open={open} setOpen={setOpen} />
      <Stack direction={{ xs: "column", md: "row" }} m={2}>
        <Avatar
          src="/paige.webp"
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
            open={open}
            setOpen={setOpen}
            setMessage={setMessage}
          ></Contact>
          {pContent.secondary.map((card) => (
            <Resume key="" info={card} primary={false} />
          ))}
        </Grid>
        <Grid item xs={12} md={8}>
          {pContent.primary.map((card) => (
            <Resume key="" info={card} primary={true} />
          ))}
        </Grid>
      </Grid>
    </>
  )
}
