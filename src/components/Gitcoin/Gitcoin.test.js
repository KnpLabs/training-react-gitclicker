import React from 'react'
import { Gitcoin } from './Gitcoin'
import { render, screen, fireEvent } from '@testing-library/react'
import { click } from 'modules/game'
import configureStore from '../../configureStore'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch
  }
})
import { Provider, useDispatch } from 'react-redux'

describe('Gitcoin', () => {
  it('Allows to click', () => {
    const initialState = {
      game: { lines: 6, linesPerMillisecond: 2 }
    }

    render(
      <Provider store={configureStore(initialState)}>
        <Gitcoin />
      </Provider>
    )

    expect(screen.getByAltText(/Gitcoin/i)).toBeInTheDocument()

    const dispatch = useDispatch()

    fireEvent.click(screen.getByLabelText(/Gitcoin/))
    expect(dispatch).toHaveBeenCalledWith(click())
  })
})
