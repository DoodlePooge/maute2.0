import {
  Box,
  Container,
  Link,
  Typography,
  styled,
  useTheme,
} from "@mui/material"
import { Outlet } from "react-router-dom"
import { Blob } from "../images/Blob"
import { Dispatch, useState } from "react"
import { SuccessNotif } from "../notifs/SuccessNotif"

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: "100vh",
  width: "100vw",
  position: "fixed",
}))

export type outletContext = {
  open: boolean
  setOpen: Dispatch<React.SetStateAction<boolean>>
  setMessage: Dispatch<React.SetStateAction<string>>
}

export const MainLayout = () => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState("")
  const alertContext = { open: open, setOpen: setOpen, setMessage: setMessage }
  return (
    <MainLayoutRoot>
      <SuccessNotif message={message} open={open} setOpen={setOpen} />
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
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            mask: "linear-gradient(to top, rgba(0,0,0, 1) 0, rgba(0,0,0, 1) 97%, rgba(0,0,0, 0) 100%, rgba(0,0,0, 0) 20%);",
            // overflow: "auto",
            maxHeight: "90vh",
            // zIndex: 2,
            position: "relative",
            width: "85vw",
            mt: "10vh",
            paddingBottom: 10,
            "::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
          }}
        >
          <Outlet context={alertContext} />
        </Box>
      </Container>
    </MainLayoutRoot>
  )
}
