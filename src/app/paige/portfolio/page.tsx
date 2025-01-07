import { Box, Button, Card, Grid, Link, Typography } from "@mui/material"
import port from "./portfolio.json"

export default function Page() {
  // const theme = useTheme()
  return (
    <Box>
      <Typography variant="h1" fontWeight={700} my={2}>
        Paige&apos;s Portfolio
      </Typography>
      <Typography variant="h5" my={2}>
        This is a one stop shop to explore a variety of Paige&apos;s creations.
      </Typography>
      <Grid container spacing={3}>
        {port.sections.map((section) => (
          <Grid item key={section.header} sm={12} lg={6}>
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
                <Box key={content.subheader} my={2}>
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
                      <Link
                        key={button.tag}
                        href={"/paige/portfolio" + button.route}
                      >
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
