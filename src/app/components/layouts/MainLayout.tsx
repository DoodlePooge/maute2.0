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
          variant="h3"
          fontWeight={900}
          color={theme.palette.primary.main}
          sx={{
            ml: "3vw",
            mt: "2vh",
            position: "absolute",
            maxWidth: "80vw",
          }}
        >
          MAUTE.US
        </Typography>
      </Link>
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          width: "160vw",
          height: "160vw",
          top: "-80vw",
          left: "-80vw",
          "@media (max-width: 700px)": {
            width: "160vh",
            height: "160vh",
            top: "-80vh",
            left: "-80vh",
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
          width: "120vw",
          height: "120vw",
          bottom: "-60vw",
          right: "-60vw",
          //   "@media (min-width: 2000px)": {
          //     width: 1504,
          //     height: 1504,
          //     bottom: -700,
          //     right: -700,
          //  },
          "@media (max-width: 700px)": {
            width: "120vh",
            height: "120vh",
            bottom: "-60vh",
            right: "-60vh",
          },
          position: "absolute",
        }}
      >
        <Blob fill={theme.palette.background.default} />
      </Box>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            mask: "linear-gradient(to top, rgba(0,0,0, 1) 0, rgba(0,0,0, 1) 98%, rgba(0,0,0, 0) 100%, rgba(0,0,0, 0) 20%);",
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
