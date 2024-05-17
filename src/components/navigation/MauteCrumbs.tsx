import { Box, Breadcrumbs, Link, Typography } from "@mui/material"
import { FC } from "react"

interface props {
  path: string
}

const parsePath = (path: string) => {
  let temp = ""
  const items: { label: string; path: string }[] = []
  const pages = path.split("/").slice(1)
  console.log(pages)
  pages.forEach((page) => {
    console.log(page)
    temp += "/" + page

    const words = page.split("-")
    let label = ""
    words.forEach((word) => {
      label += word.charAt(0).toUpperCase() + word.slice(1) + " "
    })
    items.push({ label: label, path: temp })
  })
  return items
}

export const MauteCrumbs: FC<props> = (props) => {
  const { path } = props
  console.log(path)
  const links = parsePath(path)

  return (
    <Box hidden={path.split("/").length <= 2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Typography>...</Typography>
        {links.map((link) => (
          <Link underline="hover" color="inherit" href={link.path}>
            {link.label}
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  )
}
