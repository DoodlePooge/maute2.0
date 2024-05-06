import {
  Box,
  Container,
  Link,
  Typography,
  styled,
  useTheme,
} from "@mui/material"
import { Outlet } from "react-router-dom"
import { Blob } from "../misc/Blob"

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: "100vh",
  width: "100vw",
}))

export const MainLayout = () => {
  const theme = useTheme()
  return (
    <MainLayoutRoot>
      <Container sx={{ position: "fixed" }}>
        <Link href="/" underline="none">
          <Typography
            variant="h2"
            fontWeight={900}
            color={theme.palette.text.secondary}
            sx={{ marginLeft: 3, marginTop: 2, position: "absolute" }}
          >
            MAUTE.US
          </Typography>
        </Link>
        <Box
          sx={{
            position: "absolute",
            top: -750,
            left: -650,
            zIndex: -1,
          }}
        >
          <Blob fill={theme.palette.background.default} />
        </Box>
        <Box
          sx={{
            zIndex: -1,
            position: "absolute",
            top: "60vh",
            float: "right",
          }}
        >
          <Blob fill={theme.palette.background.default} />
        </Box>
      </Container>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            zIndex: 2,
            width: "80vw",
            // maxHeight: "90vh",
            marginTop: 10,
            // overflow: "scroll",
          }}
        >
          <Outlet />
        </Box>
      </Container>
    </MainLayoutRoot>
  )
}
