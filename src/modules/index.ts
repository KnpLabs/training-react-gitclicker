import { combineReducers } from '@reduxjs/toolkit'
import game from './game'
import rules from './rules'

export const rootReducer = combineReducers({
  game,
  rules,
})
