import { combineReducers } from 'redux'
import { reducer as game } from './game'
import { reducer as rules } from './rules'

export const rootReducer = combineReducers({
  game,
  rules,
})
