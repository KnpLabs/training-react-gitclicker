import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Item } from '@/types'

// Initial state
type RulesState = {
  items: Item[]
}

const INITIAL_STATE: RulesState = {
  items: [],
}

// Side Effects / thunks
export const fetchItems = createAsyncThunk(
  'rules/fetchItems',
  async (_, { dispatch }) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/shop/items`)
    const items = await response.json() as Item[]

    dispatch(fetchedItems(items))
  },
)

export const addItem = createAsyncThunk(
  'rules/addItem',
  async (itemData: Omit<Item, 'id'>, { dispatch }) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/shop/items`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemData),
    })

    const newItem = await response.json() as Item

    dispatch(itemReceived(newItem))
  },
)

const rules = createSlice({
  name: 'rule',
  initialState: INITIAL_STATE,
  reducers: {
    fetchedItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload
    },
    itemReceived: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload)
    },
  },
})

const {
  fetchedItems,
  itemReceived,
} = rules.actions

export {
  fetchedItems,
}

export default rules.reducer
