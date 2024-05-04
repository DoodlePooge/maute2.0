import { Box, styled, useTheme } from "@mui/material"
import { Outlet } from "react-router-dom"
import { Blob } from "../misc/Blob"

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 64,
}))

export const MainLayout = () => {
  const theme = useTheme()
  return (
    <MainLayoutRoot>
      <Box sx={{ position: "absolute", zIndex: -1, top: 50, left: 50 }}>
        <Blob fill={theme.palette.background.paper} />
      </Box>
      <Outlet />
    </MainLayoutRoot>
  )
}
