import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './modules'

export function createStore(preloadedState = {}) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

const store = createStore()

export type RootState = ReturnType<typeof store.getState>

export default store
