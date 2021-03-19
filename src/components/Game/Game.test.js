import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { Game } from './Game'
import { Provider } from 'react-redux'
import { MemoryRouter as Router } from 'react-router-dom'
import { render, screen, waitFor } from '@testing-library/react'
import configureStore from '../../configureStore'

const server = setupServer(
  rest.get(`${process.env.REACT_APP_API_URL}/api/shop/items`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          'id': 1,
          'name': 'Bash',
          'price': 10,
          'multiplier': 0.1
        },
        {
          'id': 2,
          'name': 'React',
          'price': 100,
          'multiplier': 1.2
        }
      ])
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Game', () => {
  it('it renders correctly', async () => {
    const initialState = {
      game: { 
        lines: 6,
        linesPerMillisecond: 2,
        skills: {},
        items: []
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
    await waitFor(
      () => {
        expect(screen.getByText(/Bash/)).toBeInTheDocument()
        expect(screen.getByText(/React/)).toBeInTheDocument()
      },
      { timeout: 150 }
    )
  })
})
