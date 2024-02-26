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
        skills: {}
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
