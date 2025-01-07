import { Button, Card, CardActions, Link, Typography } from "@mui/material"
import { FC } from "react"

type info = {
  name: string
  title?: string
  description?: string
  buttons?: { tag: string; route: string }[]
}

interface props {
  info: info
}

export const Summary: FC<props> = (props) => {
  const { info } = props
  return (
    <Card sx={{ m: 1, mb: 3, p: 2 }}>
      <Typography variant="h2" sx={{ fontWeight: 800 }}>
        {info.name}
      </Typography>
      <Typography hidden={!info.title} variant="h5" color="primary">
        {info.title}
      </Typography>
      <Typography hidden={!info.description}>{info.description}</Typography>
      <CardActions sx={{ mt: 2, justifyContent: "right" }}>
        {info.buttons?.map((button) => (
          <Link key={button.tag} href={button.route}>
            <Button variant="contained">{button.tag}</Button>
          </Link>
        ))}
      </CardActions>
    </Card>
  )
}
