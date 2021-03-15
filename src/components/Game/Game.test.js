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
        skills: {},
        items: [
          { name: 'Bash', price: 10, multiplier: 0.1 },
          { name: 'Git', price: 100, multiplier: 1.2 },
          { name: 'Javascript', price: 10000, multiplier: 14.0 },
          { name: 'React', price: 50000, multiplier: 75.0 },
          { name: 'Vim', price: 1000000, multiplier: 1000.0 },
        ]
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
