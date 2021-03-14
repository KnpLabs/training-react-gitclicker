import { createStore } from 'redux'
import { rootReducer } from './modules'

export default (initialState = {}) => {
  const store = createStore(rootReducer, initialState)

  return store
}
