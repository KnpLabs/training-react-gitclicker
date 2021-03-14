import React from 'react'
import { Game } from './Game'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import configureStore from '../../configureStore'

describe('Game', () => {
  it('it renders correctly', async () => {
    const initialState = {
      game: { 
        lines: 6,
        linesPerMillisecond: 2,
        skills: {}
      }
    }

    render(
      <Provider store={configureStore(initialState)}>
        <Router>
          <Game />
        </Router>
      </Provider>
    )

    expect(screen.getByText(/6 lines/)).toBeInTheDocument()
    expect(screen.getByText(/per second: 20/)).toBeInTheDocument()
    expect(screen.getByText(/Skills/)).toBeInTheDocument()
    expect(screen.getByText(/Store/)).toBeInTheDocument()

    await waitFor(
      () => expect(screen.getByText(/8 lines/)).toBeInTheDocument(),
      { timeout: 150 }
    )
    await waitFor(
      () => expect(screen.getByText(/10 lines/)).toBeInTheDocument(),
      { timeout: 150 }
    )
  })
})
