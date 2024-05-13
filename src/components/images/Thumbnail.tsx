import { Box } from "@mui/material"

// Copied the information of the svg from ./assets/thumbnail.svg to take advantage of the fill property
export const Thumbnail = (props: {
  default: string | undefined
  paper: string | undefined
}) => {
  return (
    <Box
      sx={{
        backgroundColor: props.paper,
        border: 1,
        borderColor: props.paper
      }}
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="120.000000pt"
        height="90.000000pt"
        viewBox="0 0 400.000000 300.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
          fill={props.default}
          stroke="none"
        >
          <path
            d="M0 1601 c0 -1327 1 -1399 18 -1395 9 2 77 15 151 29 304 59 529 172
702 352 122 126 164 193 215 336 106 295 268 403 683 454 125 16 149 16 370 0
130 -10 286 -17 348 -17 190 0 413 48 579 125 175 80 277 179 359 348 62 129
95 237 131 427 31 168 65 299 97 372 47 106 172 208 305 250 l42 13 0 52 0 53
-2000 0 -2000 0 0 -1399z"
          />
        </g>
      </svg>
    </Box>
  )
}
