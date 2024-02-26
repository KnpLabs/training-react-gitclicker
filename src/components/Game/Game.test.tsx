import { Game } from './Game'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { createStore } from '../../store'

describe('Game', () => {
  it('it renders correctly', async () => {
    const initialState = {
      game: {
        lines: 6,
        linesPerMillisecond: 2,
        items: [],
        skills: {}
      }
    }

    render(
      <Provider store={createStore(initialState)}>
        <Router>
          <Game />
        </Router>
      </Provider>
    )

    expect(screen.getByText(/6 lines/)).toBeInTheDocument()
    expect(screen.getByText(/per second: 20/)).toBeInTheDocument()
    expect(screen.getByText(/Skills/)).toBeInTheDocument()
    expect(screen.getByText(/Store/)).toBeInTheDocument()
  })
})
