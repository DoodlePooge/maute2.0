import { FC } from "react"

interface props {
  embedId: string
}

export const YoutubeEmbed: FC<props> = (props) => {
  const { embedId } = props
  return (
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded video"
    />
  )
}
