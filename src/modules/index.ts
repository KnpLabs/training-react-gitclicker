import { combineReducers } from '@reduxjs/toolkit'
import game from './game'

export const rootReducer =  combineReducers({
    game: game.reducer
})
