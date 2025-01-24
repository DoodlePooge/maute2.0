import { Card, CardActions, CardProps, styled } from "@mui/material"

export const TransCard = styled(Card)<CardProps>(() => ({
  m: 1,
  mb: 3,
  p: 2,
  backgroundColor: "transparent",
  border: 0,
  boxShadow: "none",
}))

export const TransCardActions = styled(CardActions)<CardProps>(() => ({
  mt: 2,
  justifyContent: "right",
}))
