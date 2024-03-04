import { Box, Button, Checkbox, Typography } from "@mui/material";
import { FC } from "react";
export const MainPage: FC = () => {
  return (
    <Box>
      <Typography variant="h1">
        Site is currently being worked on, come back later.
      </Typography>
      <Checkbox />
      <Button href="./paige" variant="contained">
        Paige
      </Button>
      <Button href="./bryan" variant="contained">
        Bryan
      </Button>
    </Box>
  );
};
