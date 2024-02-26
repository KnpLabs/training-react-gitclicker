import { Gitcoin } from './Gitcoin'
import { render, screen, fireEvent } from '@testing-library/react'
import { click } from '../../modules/game'
import { createStore } from '../../store'
import { Provider, useDispatch } from 'react-redux'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch
  }
})

describe('Gitcoin', () => {
  it('Allows to click', () => {
    const initialState = {
      game: {
        lines: 6,
        linesPerMillisecond: 2,
        skills: {},
        items: []
      }
    }

    render(
      <Provider store={createStore(initialState)}>
        <Gitcoin />
      </Provider>
    )

    expect(screen.getByAltText(/Gitcoin/i)).toBeInTheDocument()

    const dispatch = useDispatch()

    fireEvent.click(screen.getByAltText(/Gitcoin/i))
    expect(dispatch).toHaveBeenCalledWith(click())
  })
})
