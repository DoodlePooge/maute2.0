import { Box, Grid, Typography } from "@mui/material"
import { FC } from "react"
import { PortCard } from "../components/cards/PortCard"

type content = {
  subheader?: string
  description?: string
  tiny?: string
  buttons?: { tag: string; route: string }[]
}

type info = {
  header: string
  description?: string
  contents: content[]
}

interface props {
  name: string
  sections: info[]
}

export const Portfolio: FC<props> = (props) => {
  // const theme = useTheme()
  const { name, sections } = props
  let section1, section2
  if (sections.length > 1) {
    const marker =
      sections.length % 2 ? sections.length / 2 + 1 : sections.length / 2
    section1 = sections.slice(0, marker)
    section2 = sections.slice(marker)
  } else {
    section1 = sections
  }

  return (
    <Box>
      <Typography variant="h1" fontWeight={700} my={2}>
        {name}'s Portfolio
      </Typography>
      <Typography variant="h5" my={2}>
        This is a one stop shop to explore a variety of {name}'s creations.
      </Typography>
      <Grid container gridAutoRows="row" spacing={3}>
        <Grid item sm={12} lg={6}>
          {section1.map((section) => (
            <PortCard section={section} />
          ))}
        </Grid>
        <Grid hidden={!section2} item sm={12} lg={6}>
          {section2?.map((section) => <PortCard section={section} />)}
        </Grid>
      </Grid>
    </Box>
  )
}
