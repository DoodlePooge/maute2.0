import { Link } from "@mui/material"
import { MButton } from "./MButton"

export const LinkButton = (props: { link: string; tag: string }) => {
  return (
    <Link underline="none" href={props.link}>
      <MButton>{props.tag}</MButton>
    </Link>
  )
}
