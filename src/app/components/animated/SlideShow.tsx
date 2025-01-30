import { Stack, StackProps, styled } from "@mui/material"

export const SlideShow = styled(Stack)<StackProps>(() => ({
  //   direction: "row",
  mask: "linear-gradient(to right, transparent, black 5%, black 90%, black 5%, transparent);",
  overflow: "hidden",
}))
