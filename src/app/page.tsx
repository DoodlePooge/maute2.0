import Image from "next/image"
import styles from "./page.module.css"
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  Grid,
  Link,
  Typography,
} from "@mui/material"

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Box>
          <Grid container justifyContent="center" alignItems="flex-end">
            <Grid item xs={12} sm={6} md={4}>
              <Avatar
                src="/paige.webp"
                sx={{
                  border: 10,
                  borderColor: "var(--paper)",
                  m: 2,
                  width: 300,
                  height: 300,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ m: 1, mb: 3, p: 2 }}>
                <Typography variant="h2" sx={{ fontWeight: 800 }}>
                  Paige
                </Typography>
                <Typography variant="h5" color="primary">
                  Full Stack Engineer
                </Typography>
                <CardActions sx={{ mt: 2, justifyContent: "right" }}>
                  <Link key="About" href="/paige">
                    <Button variant="contained">About Me</Button>
                  </Link>
                  <Link key="Portfolio" href="/paige/portfolio">
                    <Button variant="contained">Portfolio</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Avatar
                src="/bryan.webp"
                sx={{
                  border: 10,
                  borderColor: "var(--paper)",
                  m: 2,
                  width: 300,
                  height: 300,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card sx={{ m: 1, mb: 3, p: 2 }}>
                <Typography variant="h2" sx={{ fontWeight: 800 }}>
                  Bryan
                </Typography>
                <Typography variant="h5" color="primary">
                  AT&T Retailer
                </Typography>
                <CardActions sx={{ mt: 2, justifyContent: "right" }}>
                  <Link key="About" href="/bryan">
                    <Button variant="contained">About Me</Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  )
}
