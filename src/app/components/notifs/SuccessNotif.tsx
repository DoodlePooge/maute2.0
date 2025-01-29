import { Alert, AlertTitle, Snackbar, useTheme } from "@mui/material"
import { Dispatch, FC } from "react"

interface props {
  message: string
  subText?: string
  open: boolean
  setOpen: Dispatch<React.SetStateAction<boolean>>
}

export const SuccessNotif: FC<props> = (props) => {
  const { message, subText, open, setOpen } = props
  const theme = useTheme()

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (event && reason === "clickaway") {
      return
    }
    setOpen(false)
  }
  return (
    <Snackbar
      anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
    >
      <Alert
        severity="success"
        sx={{ backgroundColor: theme.palette.success.contrastText }}
      >
        <AlertTitle>{message}</AlertTitle>
        {subText ? subText : ""}
      </Alert>
    </Snackbar>
  )
}
