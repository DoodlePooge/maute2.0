import { Card, CardActions, CardProps, styled } from "@mui/material"

export const LinedCard = styled(Card)<CardProps>(({ theme }) => ({
  margin: 1,
  marginBottom: 3,
  padding: 2,
  border: 3,
  borderColor: theme.palette.primary.main,
  minWidth: 150,
}))

export const LinedCardActions = styled(CardActions)<CardProps>(() => ({
  marginTop: 10,
  justifyContent: "right",
}))
