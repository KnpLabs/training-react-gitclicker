import '@/styles/game/index.css'
import { useEffect } from 'react'
import { Grid2 as Grid, Card, CardContent, CardHeader } from '@mui/material'
import { Score, Gitcoin } from '@/components/game/core'
import { Skills } from '@/components/game/skills'
import { Store } from '@/components/game/store'
import { loop, start, stop } from '@/modules/game'
import { useAppDispatch } from '@/store'

export function Game() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(start())
    const interval = setInterval(() => {
      dispatch(loop())
    }, 100)

    return () => {
      clearInterval(interval)
      dispatch(stop())
    }
  }, [])

  return (
    <>
      <Grid size={3}>
        <Card component="section" className="card">
          <CardContent className="content">
            <Score />
            <Gitcoin />
          </CardContent>
        </Card>
      </Grid>
      <Grid size="grow">
        <Card component="section" className="card">
          <CardHeader title="Skills" />
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Skills />
          </CardContent>
        </Card>
      </Grid>
      <Grid size="grow">
        <Card component="section" className="card">
          <CardHeader title="Store" />
          <CardContent>
            <Store />
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}
