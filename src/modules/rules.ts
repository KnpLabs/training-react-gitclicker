import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RequestStatus, type Item, type TRequestStatus } from '@/types'

// Initial state
type RulesState = {
  items: Item[]
  addItemRequestStatus: TRequestStatus
  editItemRequestStatus: TRequestStatus
}

const INITIAL_STATE: RulesState = {
  items: [],
  addItemRequestStatus: RequestStatus.Idle,
  editItemRequestStatus: RequestStatus.Idle,
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
    dispatch(setAddItemRequestStatus(RequestStatus.Loading))

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
    dispatch(setAddItemRequestStatus(RequestStatus.Succeeded))
  },
)

export const editItem = createAsyncThunk(
  'rules/editItem',
  async (itemData: Item, { dispatch }) => {
    dispatch(setEditItemRequestStatus(RequestStatus.Loading))

    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/shop/items/${itemData.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemData),
    })
    const updatedItem = await response.json() as Item

    dispatch(itemUpdated(updatedItem))
    dispatch(setEditItemRequestStatus(RequestStatus.Succeeded))
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
    itemUpdated: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id)

      if (index !== -1) {
        state.items[index] = action.payload
      }
    },
    setAddItemRequestStatus: (state, action: PayloadAction<TRequestStatus>) => {
      state.addItemRequestStatus = action.payload
    },
    setEditItemRequestStatus: (state, action: PayloadAction<TRequestStatus>) => {
      state.editItemRequestStatus = action.payload
    },
  },
})

const {
  fetchedItems,
  setAddItemRequestStatus,
  setEditItemRequestStatus,
  itemReceived,
  itemUpdated,
} = rules.actions

export {
  fetchedItems,
  setAddItemRequestStatus,
  setEditItemRequestStatus,
}

export default rules.reducer
