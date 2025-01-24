import { Card, CardActions, CardProps, styled } from "@mui/material";

export const TransCard = styled(Card)<CardProps>(() => ({
  margin: 1,
  marginBottom: 3,
  padding: 2,
  background: "none",
  border: 0,
  boxShadow: "none",
}));

export const TransCardActions = styled(CardActions)<CardProps>(() => ({
  marginTop: 10,
  justifyContent: "right",
}));
