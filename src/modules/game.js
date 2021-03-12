// Actions
const CLICK = 'game::CLICK'
const BUY_ITEM = 'game::BUY_ITEM'
const LOOP = 'game::LOOP'

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

const INITIAL_STATE = {
  lines: 0,
  linesPerMillisecond: 0,
  skills: []
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

  return state
}
