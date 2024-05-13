import { Box, Card, List, Typography } from "@mui/material"
import { FC } from "react"

type content = {
  subheader: string
  subheader2?: string
  bold?: string
  tiny?: string
  items?: string[]
  bullets?: string[]
}

type info = {
  header: string
  contents: content[]
}

interface props {
  info: info
  primary: boolean
}

export const Resume: FC<props> = (props) => {
  const { info, primary } = props

  return (
    <Card sx={{ m: 1, mb: 2 }}>
      <Box sx={{ m: 3 }}>
        {primary ? (
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              borderBottom: 3,
              maxWidth: "70%",
              marginBottom: 1,
            }}
          >
            {info.header}
          </Typography>
        ) : (
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              marginBottom: 1,
            }}
          >
            {info.header}
          </Typography>
        )}
        {info.contents.map((field) => (
          <Box marginBottom={3}>
            <Typography variant="h6" fontWeight={600}>
              {field.subheader}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={500}
              hidden={!field.subheader2}
            >
              {field.subheader2}
            </Typography>
            <Typography variant="h6" fontWeight={600} color="primary">
              {field.bold}
            </Typography>
            <Typography variant="caption">{field.tiny}</Typography>
            {field.bullets?.map((item) => (
              <List sx={{ pl: 3, listStyleType: "disc" }}>
                <Typography display="list-item">{item}</Typography>
              </List>
            ))}
            {field.items?.map((item) => <Typography>{item}</Typography>)}
          </Box>
        ))}
      </Box>
    </Card>
  )
}
