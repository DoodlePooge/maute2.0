import {
  Alert,
  Box,
  Card,
  IconButton,
  Link,
  Slide,
  Snackbar,
  Typography,
} from "@mui/material"
import { FC, useState } from "react"
import EmailIcon from "@mui/icons-material/Email"
import copy from "clipboard-copy"
import PlaceIcon from "@mui/icons-material/Place"
import GitHubIcon from "@mui/icons-material/GitHub"
import PhoneIcon from "@mui/icons-material/Phone"
import PublicIcon from "@mui/icons-material/Public"

type info = {
  email: string
  phone: string
  location?: string
  github?: { label: string; link: string }
  links?: { label: string; link: string }[]
}

interface props {
  info: info
}

export const Contact: FC<props> = (props) => {
  const { info } = props
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (event && reason === "clickaway") {
      return
    }
    setOpen(false)
  }
  const maps = info.location
    ? "https://www.google.com/maps/place/" + info.location.replace(" ", "+")
    : "/"
  const copyEmail = () => {
    if (open) {
      setOpen(false)
    }
    setMessage("Email Copied!")
    setOpen(true)
    copy(info.email)
  }
  const copyPhone = () => {
    if (open) {
      setOpen(false)
    }
    setMessage("Phone Number Copied!")
    setOpen(true)
    copy(info.phone)
  }
  return (
    <>
      <Slide in={open} direction="up">
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert severity="success">{message}</Alert>
        </Snackbar>
      </Slide>
      <Card sx={{ m: 1, mb: 2 }}>
        <Box sx={{ m: 3 }}>
          <Typography variant="h5" sx={{ fontWeight: 800 }}>
            Contact Information
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="primary" onClick={copyEmail}>
              <EmailIcon />
            </IconButton>
            {info.email}
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <IconButton color="primary" onClick={copyPhone}>
              <PhoneIcon />
            </IconButton>
            {info.phone}
          </Typography>
          <Typography
            hidden={!info.location}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Link href={maps}>
              <IconButton color="primary">
                <PlaceIcon />
              </IconButton>
            </Link>
            {info.location}
          </Typography>
          <Typography
            hidden={!info.github}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Link href={info.github?.link}>
              <IconButton color="primary">
                <GitHubIcon />
              </IconButton>
            </Link>
            {info.github?.label}
          </Typography>
          {info.links?.map((site) => (
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <Link href={site.link}>
                <IconButton color="primary">
                  <PublicIcon />
                </IconButton>
              </Link>
              {site.label}
            </Typography>
          ))}
        </Box>
      </Card>
    </>
  )
}
