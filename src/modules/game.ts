import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Item, OwnedItems } from '../type'
import { RootState } from '../store'

// Initial state
type GameState = {
    lines: number;
    linesPerMillisecond: number;
    skills: OwnedItems;
    items: Item[];
}

const INITIAL_STATE: GameState = {
    lines: 0,
    linesPerMillisecond: 0,
    skills: {},
    items: []
}

// Side Effects / thunks
export const start = createAsyncThunk(
    'game/start',
    async (_, { dispatch }) => {
        const localStoredGame = localStorage.getItem('game')
        const initalGameState = localStoredGame ? JSON.parse(localStoredGame) : {}

        dispatch(initGame(initalGameState))

        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/shop/items`)
        const items = await response.json()

        dispatch(fetchedItems(items))
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
        fetchedItems: (state, action: PayloadAction<Item[]>) => {
            return {
                ...state,
                items: action.payload
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

const {
    click,
    buyItem,
    loop,
    initGame,
    fetchedItems
} = game.actions

export { click, buyItem, loop }

export default game
