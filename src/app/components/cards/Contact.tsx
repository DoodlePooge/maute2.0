import { IconButton, Link, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import { FC, useState } from "react"
import EmailIcon from "@mui/icons-material/Email"
import copy from "clipboard-copy"
import GitHubIcon from "@mui/icons-material/GitHub"
import PublicIcon from "@mui/icons-material/Public"
import { SuccessNotif } from "../notifs/SuccessNotif"

interface props {
  email?: string
  github?: { label: string; link: string }
  links?: { label: string; link: string }[]
}

export const Contact: FC<props> = (props) => {
  const message = "Email Copied!"
  const subText = "Double Click to compose email"
  const [open, setOpen] = useState(false)
  const { email, github, links } = props
  const copyEmail = () => {
    if (open) {
      setOpen(false)
    }
    setOpen(true)
    copy(email || "")
  }
  const openEmail = () => {
    copy(email || "")
    window.open("mailto:" + email)
  }
  return (
    <>
      <SuccessNotif
        open={open}
        setOpen={setOpen}
        message={message}
        subText={subText}
      />
      <Grid container columnSpacing={2}>
        <Grid hidden={!email}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="primary"
              onClick={copyEmail}
              onDoubleClick={openEmail}
            >
              <EmailIcon />
            </IconButton>
            {email}
          </Typography>
        </Grid>
        <Grid hidden={!github}>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <Link href={github?.link}>
              <IconButton color="primary">
                <GitHubIcon />
              </IconButton>
            </Link>
            {github?.label}
          </Typography>
        </Grid>
        {links?.map((site) => (
          <Typography
            key={site.label}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Link href={site.link}>
              <IconButton color="primary">
                <PublicIcon />
              </IconButton>
            </Link>
            {site.label}
          </Typography>
        ))}
      </Grid>
    </>
  )
}
