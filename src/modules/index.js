import { combineReducers } from 'redux'
import { reducer as game } from './game'

export const rootReducer = combineReducers({
  game
})
