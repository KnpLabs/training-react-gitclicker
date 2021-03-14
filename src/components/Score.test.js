import React from 'react'
import { Score } from './Score'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import configureStore from '../configureStore'

describe('Score', () => {
  it('should displays the number of lines', () => {
    const initialState = {
      game: { lines: 6, linesPerMillisecond: 2 }
    }

    render(
      <Provider store={configureStore(initialState)}>
        <Score />
      </Provider>
    )

    expect(screen.getByText(/6 lines/i)).toBeInTheDocument()
    expect(screen.getByText(/per second: 20/i)).toBeInTheDocument()
  })
})
