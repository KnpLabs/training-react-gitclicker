// Actions
export const CLICK = 'game::CLICK'
export const BUY_ITEM = 'game::BUY_ITEM'
export const LOOP = 'game::LOOP'
export const START = 'game::START'
export const STOP = 'game::STOP'

// Action creators
export const click = () => ({
  type: CLICK,
})

export const buyItem = item => ({
  type: BUY_ITEM,
  item
})

export const loop = () => ({
  type: LOOP
})

// Side Effects
export const start = () => dispatch => {
  const loadedGame = JSON.parse(localStorage.getItem('game'))

  return dispatch({
    type: START,
    loadedGame: loadedGame ?? {}
  })
}

export const stop = () => (dispatch, getState) => {
  const serializedGame = JSON.stringify(getState().game)
  localStorage.setItem('game', serializedGame)

  return dispatch({
    type: STOP
  })
}

const INITIAL_STATE = {
  lines: 0,
  linesPerMillisecond: 0,
  skills: {}
}

export const reducer = (state = INITIAL_STATE, action) => {
  const { type } = action

  if (type === LOOP) {
    return { ...state, lines: state.lines + state.linesPerMillisecond }
  }

  if (type === CLICK) {
    return { ...state, lines: state.lines + 1 }
  }

  if (type === BUY_ITEM) {
    const { item: { name, price, multiplier }} = action
    const { skills, lines, linesPerMillisecond } = state

    return {
      ...state,
      lines: lines - price,
      linesPerMillisecond: linesPerMillisecond + multiplier,
      skills: {
        ...skills,
        [name]: (skills[name] || 0) + 1
      }
    }
  }

  if (type === START) {
    const { loadedGame } = action

    return { ...state, ...loadedGame }
  }

  return state
}
