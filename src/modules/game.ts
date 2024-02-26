import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Item, OwnedItems } from '../type'

// Initial state
type GameState = {
    lines: number,
    linesPerMillisecond: number,
    skills: OwnedItems
}

const INITIAL_STATE: GameState = {
    lines: 0,
    linesPerMillisecond: 0,
    skills: {}
}

const game = createSlice({
    name: 'game',
    initialState: INITIAL_STATE,
    reducers: {
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

export const { click, buyItem, loop } = game.actions

export default game
