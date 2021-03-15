import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'
import configureStore from '../../configureStore'

describe('Store', () => {
  it('Renders correctly', () => {
    const initialState = {
      game: { 
        skills: { 'Bash': 2, 'Git': 3, 'Javascript': 4 },
        items: [
          { name: 'Bash' },
          { name: 'Git' },
          { name: 'Javascript' },
        ]
      }
    }

    render(
      <Provider store={configureStore(initialState)}>
        <Skills />
      </Provider>
    )

    expect(screen.getByText(/Bash/i)).toBeInTheDocument()
    expect(screen.getByText(/Git/i)).toBeInTheDocument()
    expect(screen.getByText(/Javascript/i)).toBeInTheDocument()
  })
})

