import { Box, Button, Card, Grid, Typography } from "@mui/material"
import { FC, useState } from "react"
import IcecreamIcon from "@mui/icons-material/Icecream"

interface Point {
  x: number
  y: number
}
const snake: Point[] = []

function move() {
  let head: Point = snake[0]
}

function play() {}

export const Snake: FC = () => {
  const [score, setScore] = useState(0)
  const [direction, setDirection] = useState<Point>({ x: 0, y: 0 })

  return (
    <Box justifyContent="center" mt={1}>
      <Typography variant="h1" fontWeight={700} mb={2}>
        Snake
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Button
            onClick={() => {
              play()
            }}
          />
          <Typography>Score: {score}</Typography>
        </Grid>
        <Grid item>
          <Card>
            <></>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
