import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import { rootReducer } from './modules'

export default (initialState = {}) => {
  const composeEnhancers = composeWithDevTools({})

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )

  return store
}
