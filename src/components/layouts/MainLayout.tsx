import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const MainLayoutRoot = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "100%",
  paddingTop: 64,
}));

export const MainLayout = () => {
  return (
    <MainLayoutRoot>
      <Box sx={{maskImage: 'url("/assets/blob.webp")'}}></Box>
      <Outlet />
    </MainLayoutRoot>
  );
};
