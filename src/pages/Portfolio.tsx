import { Box, Button, Card, Grid, Link, Typography } from "@mui/material"
import { FC } from "react"

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
  return (
    <Box>
      <Typography variant="h1" fontWeight={700} my={2}>
        {name}'s Portfolio
      </Typography>
      <Typography variant="h5" my={2}>
        This is a one stop shop to explore a variety of {name}'s creations.
      </Typography>
      <Grid container spacing={3}>
        {sections.map((section) => (
          <Grid item sm={12} lg={6}>
            <Card sx={{ my: 1, mb: 2, p: 2 }}>
              <Typography
                variant="h3"
                color="primary"
                sx={{
                  borderBottom: 3,
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {section.header}
              </Typography>
              <Typography hidden={!section.description}>
                {section.description}
              </Typography>
              {section.contents.map((content) => (
                <Box my={2}>
                  <Typography
                    variant="h5"
                    hidden={!content.subheader}
                    fontWeight={700}
                  >
                    {content.subheader}
                  </Typography>
                  <Typography hidden={!content.tiny} variant="caption">
                    {content.tiny}
                  </Typography>
                  <Typography hidden={!content.description} my={2} pl={5}>
                    {content.description}
                  </Typography>
                  <Box
                    hidden={!content.buttons}
                    sx={{
                      m: 1,
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {content.buttons?.map((button) => (
                      <Link href={"/paige/portfolio" + button.route}>
                        <Button variant="contained">{button.tag}</Button>
                      </Link>
                    ))}
                  </Box>
                </Box>
              ))}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
