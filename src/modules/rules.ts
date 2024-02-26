import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Item } from '../type'

// Initial state
type RulesState = {
    items: Item[];
}

const INITIAL_STATE: RulesState = {
  items: []
}

// Side Effects / thunks
export const fetchItems = createAsyncThunk(
    'rules/fetchItems',
    async (_, { dispatch }) => {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/shop/items`)
        const items = await response.json() as Item[]

        dispatch(fetchedItems(items))
    }
)

const rules = createSlice({
    name: 'rule',
    initialState: INITIAL_STATE,
    reducers: {
        fetchedItems: (state, action: PayloadAction<Item[]>) => {
            state.items = action.payload
        }
    },
})

const {
    fetchedItems
} = rules.actions

export {
    fetchedItems
}

export default rules
