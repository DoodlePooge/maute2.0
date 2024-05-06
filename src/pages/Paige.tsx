import { Avatar, Grid, useTheme } from "@mui/material"
import { FC } from "react"
import paige from "../assets/paige.webp"
import pContent from "../content/paige.json"
import { Contact } from "../cards/Contact"
import { Resume } from "../cards/Resume"

export const Paige: FC = () => {
  const theme = useTheme()
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Avatar
          src={paige}
          sx={{
            border: 10,
            borderColor: theme.palette.background.paper,
            m: 2,
            width: 300,
            height: 300,
          }}
        />
        <Contact info={pContent.contact}></Contact>
        {pContent.secondary.map((card) => (
          <Resume info={card} />
        ))}
      </Grid>
      <Grid item xs={12} md={8}></Grid>
    </Grid>
  )
}
