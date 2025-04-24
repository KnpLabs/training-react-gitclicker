import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './modules'
import { useDispatch } from 'react-redux'

export function createStore(preloadedState = {}) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

const store = createStore()

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
