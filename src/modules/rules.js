// Actions
export const FETCHED_ITEMS = 'rules::FETCH_ITEMS'

// Side effects
export const fetchItems = () => async dispatch => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/shop/items`)
  const items = await response.json()

  return dispatch({
    type: FETCHED_ITEMS,
    items
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

  return state
}
