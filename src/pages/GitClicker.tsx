import Grid from '@mui/material/Grid2'
import { Game } from '@/components/game'

export default function GitClicker() {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ padding: 4 }}>
      <Game />
    </Grid>
  )
}
