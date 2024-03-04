import { Box, Button, Checkbox } from "@mui/material";
import { FC } from "react";
export const MainPage: FC = () => {
  return (
    <Box>
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
