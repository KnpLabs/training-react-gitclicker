import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { fetchItems } from 'modules/rules'
import { Navbar } from '../layout/Navbar'
import { ItemsList } from './ItemsList'
import { CreateItemForm } from './CreateItemForm'
import { EditItemForm } from './EditItemForm'

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },  
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

export const Rules = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Configurator
            </Typography>

            <Switch>
              <Route exact path="/rules">
                <ItemsList />
              </Route>
              <Route path="/rules/add">
                <CreateItemForm />
              </Route>
              <Route path="/rules/edit/:id">
                <EditItemForm />
              </Route>
            </Switch>
          </Container>
        </div>
      </main>

      <Switch>
        <Route exact path="/rules">
          <Fab 
            onClick={() => history.push('/rules/add') }
            className={classes.fab} 
            color="primary" 
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Route>
      </Switch>
    </>
  )
}

