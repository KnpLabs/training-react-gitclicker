import {
  CLICK,
  BUY_ITEM,
  LOOP,
  click,
  buyItem,
  loop,
  reducer
} from './game'

describe('Actions creators', () => {
  it('should create a click action', () => {
    const expectedAction = { type: CLICK }

    expect(click()).toEqual(expectedAction)
  })

  it('should create a buy item action', () => {
    const item = { name: 'Bash' }
    const expectedAction = { type: BUY_ITEM, item }

    expect(buyItem(item)).toEqual(expectedAction)
  })

  it('should create a loop action', () => {
    const expectedAction = { type: LOOP }

    expect(loop()).toEqual(expectedAction)
  })
})

describe('Reducer', () => {
  it(LOOP, () => {
    const state = {
      lines: 6,
      linesPerMillisecond: 6
    }
    const action = loop()

    const exectedState = {
      lines: 12,
      linesPerMillisecond: 6
    }

    expect(reducer(state, action)).toEqual(exectedState)
  })

  it(CLICK, () => {
    const state = {
      lines: 6,
      linesPerMillisecond: 6
    }
    const action = click()

    const exectedState = {
      lines: 7,
      linesPerMillisecond: 6
    }

    expect(reducer(state, action)).toEqual(exectedState)
  })

  it(`${BUY_ITEM} with no existing skill`, () => {
    const item = {
      name: 'Bash',
      price: 10,
      multiplier: 0.5,
      icon: '/some/icon/path.svg'
    }
    const action = buyItem(item)

    const state = {
      lines: 25,
      linesPerMillisecond: 6,
      skills: {}
    }

    const exectedState = {
      lines: 15,
      linesPerMillisecond: 6.5,
      skills: {
        [item.name]: 1
      }
    }

    expect(reducer(state, action)).toEqual(exectedState)
  })

  it(`${BUY_ITEM} with same existing skills`, () => {
    const item = {
      name: 'Bash',
      price: 10,
      multiplier: 0.5,
      icon: '/some/icon/path.svg'
    }
    const action = buyItem(item)

    const state = {
      lines: 25,
      linesPerMillisecond: 6,
      skills: {
        [item.name]: 4
      }
    }

    const exectedState = {
      lines: 15,
      linesPerMillisecond: 6.5,
      skills: {
        [item.name]: 5
      }
    }

    expect(reducer(state, action)).toEqual(exectedState)
  })

  it(`${BUY_ITEM} with multiple existing skills`, () => {
    const item = {
      name: 'Bash',
      price: 10,
      multiplier: 0.5,
      icon: '/some/icon/path.svg'
    }
    const action = buyItem(item)

    const state = {
      lines: 25,
      linesPerMillisecond: 6,
      skills: {
        [item.name]: 4,
        'Javascript': 2,
        'Vim': 1
      }
    }

    const exectedState = {
      lines: 15,
      linesPerMillisecond: 6.5,
      skills: {
        [item.name]: 5,
        'Javascript': 2,
        'Vim': 1
      }
    }

    expect(reducer(state, action)).toEqual(exectedState)
  })

  it('Unknown action', () => {
    const state = {
      lines: 6,
      linesPerMillisecond: 6
    }

    const action = { type: 'UNKNOWN ACTION' }

    expect(reducer(state, action)).toEqual(state)
  })
})
