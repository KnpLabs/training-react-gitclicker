import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { Store } from './Store'
import configureStore from '../../configureStore'

describe('Store', () => {
  it('Renders correctly', () => {
    const initialState = {
      game: { 
        lines: 6,
        items: [
          { name: 'Bash', price: 10, multiplier: 0.1 },
          { name: 'Git', price: 100, multiplier: 1.2 },
          { name: 'Javascript', price: 10000, multiplier: 14.0 },
        ]
      }
    }

    render(
      <Provider store={configureStore(initialState)}>
        <Store />
      </Provider>
    )

    expect(screen.getByText(/Bash/i)).toBeInTheDocument()
    expect(screen.getByText(/Git/i)).toBeInTheDocument()
    expect(screen.getByText(/Javascript/i)).toBeInTheDocument()
  })
})
