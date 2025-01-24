import { Alert, Slide, Snackbar } from "@mui/material";
import { Dispatch, FC } from "react";

interface props {
  message: string;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const SuccessNotif: FC<props> = (props) => {
  const { message, open, setOpen } = props;

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (event && reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Slide in={open} direction="up">
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </Slide>
  );
};
