import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'
import { createStore } from '../../store'

describe('Skills', () => {
  it('Renders correctly', () => {
    const initialState = {
      game: {
        lines: 6,
        linesPerMillisecond: 2,
        skills: { 'Bash': 2, 'Git': 3, 'Javascript': 4 },
        items: [
          { id: 1, name: 'Bash', price: 10, linesPerMillisecond: 0.1 },
          { id: 2, name: 'Git', price: 20, linesPerMillisecond: 0.2 },
          { id: 3, name: 'Javascript', price: 30, linesPerMillisecond: 0.3 }
        ]
      }
    }

    render(
      <Provider store={createStore(initialState)}>
        <Skills />
      </Provider>
    )

    expect(screen.getByText(/Bash/i)).toBeInTheDocument()
    expect(screen.getByText(/Git/i)).toBeInTheDocument()
    expect(screen.getByText(/Javascript/i)).toBeInTheDocument()
  })
})
