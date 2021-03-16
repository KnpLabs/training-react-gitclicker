// Actions
export const FETCHED_ITEMS = 'rules::FETCH_ITEMS'
export const ADD_ITEM = 'rules::ADD_ITEM'
export const EDIT_ITEM = 'rules::EDIT_ITEM'
export const DELETE_ITEM = 'rules::DELETE_ITEM'

// Side effects
export const fetchItems = () => async dispatch => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/shop/items`)
  const items = await response.json()

  return dispatch({
    type: FETCHED_ITEMS,
    items
  })
}

export const addItem = itemData => async dispatch => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/shop/items`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemData)
  })
  const item = await response.json()

  return dispatch({
    type: ADD_ITEM,
    item
  })
}

export const editItem = (id, itemData) => async dispatch => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/api/shop/items/${id}`,
    {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(itemData)
    }
  )
  const item = await response.json()

  return dispatch({
    type: EDIT_ITEM,
    item
  })
}

export const deleteItem = item => async dispatch => {
  await fetch(`${process.env.REACT_APP_API_URL}/api/shop/items/${item.id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json'
    }
  })
  
  return dispatch({
    type: DELETE_ITEM,
    id: item.id
  })
}

const INITIAL_STATE = {
  items: []
}

export const reducer = (state = INITIAL_STATE, action) => {
  const { type } = action

  if (type === FETCHED_ITEMS) {
    return {
      ...state,
      items: action.items
    }
  }

  if (type === ADD_ITEM) {
    return {
      ...state,
      items: [...state.items, action.item]
    }
  }

  if (type === EDIT_ITEM) {
    return {
      ...state,
      items: [
        ...state.items.filter(item => item.id !== action.item.id),
        action.item
      ]
    }
  }

  if (type === DELETE_ITEM) {
    return {
      ...state,
      items: state.items.filter(item => item.id !== action.id)
    }
  }

  return state
}
