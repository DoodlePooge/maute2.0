import { Box, Card, IconButton, Link, Typography } from "@mui/material"
import { FC } from "react"
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
  const maps = info.location
    ? "https://www.google.com/maps/place/" + info.location.replace(" ", "+")
    : "/"
  const copyEmail = () => {
    // toast.success("Email Copied!")
    copy(info.email)
  }
  const copyPhone = () => {
    // toast.success("Phone Number Copied!")
    copy(info.phone)
  }
  return (
    <Card sx={{ mb: 3 }}>
      <Box sx={{ m: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Contact Information
        </Typography>
        <Typography>
          <IconButton color="primary" onClick={copyEmail}>
            <EmailIcon />
          </IconButton>
          {info.email}
        </Typography>
        <Typography>
          <IconButton color="primary" onClick={copyPhone}>
            <PhoneIcon />
          </IconButton>
          {info.phone}
        </Typography>
        <Typography hidden={!info.location}>
          <Link href={maps}>
            <IconButton color="primary">
              <PlaceIcon />
            </IconButton>
          </Link>
          {info.location}
        </Typography>
        <Typography hidden={!info.github}>
          <Link href={info.github?.link}>
            <IconButton color="primary">
              <GitHubIcon />
            </IconButton>
          </Link>
          {info.github?.label}
        </Typography>
        {info.links?.map((site) => (
          <Typography>
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
  )
}
