import {
  Box,
  Container,
  Link,
  styled,
  Typography,
  useTheme,
} from "@mui/material"
import { Blob } from "../images/Blob"

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: "100vh",
  width: "100vw",
  position: "fixed",
}))

export function MainLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme()
  return (
    <MainLayoutRoot>
      <Link href="/" underline="none">
        <Typography
          variant="h2"
          fontWeight={900}
          color={theme.palette.text.secondary}
          sx={{
            ml: "3vw",
            mt: "2vh",
            position: "absolute",
            maxWidth: "90vw",
          }}
        >
          MAUTE.US
        </Typography>
      </Link>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          "@media (min-width: 400px)": { top: -750, left: -650 },
          "@media (max-width: 400px)": {
            top: -700,
            left: -1700,
          },
          zIndex: -1,
        }}
      >
        <Blob fill={theme.palette.background.default} />
      </Box>
      <Box
        aria-hidden
        sx={{
          zIndex: -1,
          "@media (min-width: 400px)": {
            top: "60vh",
            float: "right",
            position: "absolute",
            "@media (min-width: 2000px)": {
              position: "fixed",
              right: -400,
            },
          },
          "@media (max-width: 400px)": {
            top: -100,
            position: "absolute",
          },
        }}
      >
        <Blob fill={theme.palette.background.default} />
      </Box>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            mask: "linear-gradient(to top, rgba(0,0,0, 1) 0, rgba(0,0,0, 1) 97%, rgba(0,0,0, 0) 100%, rgba(0,0,0, 0) 20%);",
            overflow: "auto",
            maxHeight: "90vh",
            position: "relative",
            width: "85vw",
            mt: "10vh",
            paddingBottom: 10,
            "::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          {children}
        </Box>
      </Container>
    </MainLayoutRoot>
  )
}
