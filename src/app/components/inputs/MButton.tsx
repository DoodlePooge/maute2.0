import { Button, ButtonProps, styled } from "@mui/material"

export const MButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 40,
  color: theme.palette.secondary.main,
  padding: "8px 16px",
  backgroundColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main[700],
  },
  variant: "contained",
}))
