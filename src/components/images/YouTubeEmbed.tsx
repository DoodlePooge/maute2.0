import { Card } from "@mui/material"
import { FC } from "react"

interface props {
  embedId: string
}

export const YoutubeEmbed: FC<props> = (props) => {
  const { embedId } = props
  return (
    <Card sx={{ p: 1, width: "100%", height: "auto", aspectRatio: "16 / 9" }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded video"
      />
    </Card>
  )
}
