import { useTheme } from "@emotion/react"
import blob from "../../assets/blob.webp"

export const Blob = () => {
  const theme = useTheme()
  return (
    <div
      style={{
        //   WebkitMaskImage: blob,
        maskImage: blob,
        maskRepeat: "no-repeat",
        maskSize: "contain",
        backgroundColor: theme.palette.primary.main,
      }}
    />
  )
}
