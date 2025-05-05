import { fetchItems } from '@/modules/rules'
import { useAppDispatch } from '@/store'
import { Container, Grid2 as Grid, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Outlet } from 'react-router'

export default function Rules() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  return (
    <Container maxWidth="sm" component="main">
      <Grid container spacing={2} justifyContent="center">
        <Typography component="h1" variant="h2" color="textPrimary" paddingBlock={10}>
          Configurator
        </Typography>
      </Grid>
      <Outlet />
    </Container>
  )
}
