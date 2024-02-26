import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Item, OwnedItems } from '../type'
import { RootState } from '../store'

// Initial state
type GameState = {
    lines: number;
    linesPerMillisecond: number;
    skills: OwnedItems;
}

const INITIAL_STATE: GameState = {
    lines: 0,
    linesPerMillisecond: 0,
    skills: {}
}

// Side Effects / thunks
export const start = createAsyncThunk(
    'game/start',
    async (_, { dispatch }) => {
        const localStoredGame = localStorage.getItem('game')
        const initalGameState = localStoredGame ? JSON.parse(localStoredGame) : {}

        dispatch(initGame(initalGameState))
    }
)

export const stop = createAsyncThunk(
    'game/stop',
    async (_, { getState }) => {
        const state = getState() as  RootState
        const serializedGameState = JSON.stringify(state.game)

        localStorage.setItem('game', serializedGameState)
    }
)

const game = createSlice({
    name: 'game',
    initialState: INITIAL_STATE,
    reducers: {
        initGame: (state, action: PayloadAction<GameState>) => {
            return {
                ...state,
                ...action.payload
            }
        },
        click: state => {
            state.lines += 1
        },
        buyItem: (state, action: PayloadAction<Item>) => {
            const { name, price, linesPerMillisecond: itemLinesPerMillisecond } = action.payload

            return {
                ...state,
                lines: state.lines - price,
                linesPerMillisecond: state.linesPerMillisecond + itemLinesPerMillisecond,
                skills: {
                    ...state.skills,
                    [name]: (state.skills[name] || 0) + 1
                }
            }
        },
        loop: state => {
            state.lines += state.linesPerMillisecond
        }
    }
})

const { click, buyItem, loop, initGame } = game.actions

export { click, buyItem, loop }

export default game
