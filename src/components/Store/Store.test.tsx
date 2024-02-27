import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { Store } from './Store'
import { createStore } from '../../store'

describe('Store', () => {
  it('Renders correctly', () => {
    const initialState = {
      game: {
        lines: 6,
        linesPerMillisecond: 2,
        skills: {},
        items: [
          {
            id: 1,
            name: 'Bash',
            price: 10,
            linesPerMillisecond: 0.1
          },
          {
            id: 2,
            name: 'Git',
            price: 100,
            linesPerMillisecond: 1.2,
          },
          {
            id: 3,
            name: 'Javascript',
            price: 10000,
            linesPerMillisecond: 14.0,
          },
          {
            id: 4,
            name: 'React',
            price: 50000,
            linesPerMillisecond: 75.0,
          },
          {
            id: 5,
            name: 'Vim',
            price: 999999,
            linesPerMillisecond: 10000.0,
          }
        ]
      }
    }

    render(
      <Provider store={createStore(initialState)}>
        <Store />
      </Provider>
    )

    expect(screen.getByText(/Bash/i)).toBeInTheDocument()
    expect(screen.getByText(/Git/i)).toBeInTheDocument()
    expect(screen.getByText(/Javascript/i)).toBeInTheDocument()
    expect(screen.getByText(/React/i)).toBeInTheDocument()
    expect(screen.getByText(/Vim/i)).toBeInTheDocument()
  })
})
