import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './modules'
import game from './modules/game'
import { useDispatch } from 'react-redux'

const defaultState = {
  game: game.getInitialState()
}

export function createStore(
  initialState = defaultState
) {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState
  })
}

const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
