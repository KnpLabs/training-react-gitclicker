import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { Store } from './Store'
import configureStore from '../../configureStore'


describe('Store', () => {
  it('Renders correctly', () => {
    const initialState = {
      game: { lines: 6 }
    }

    render(
      <Provider store={configureStore(initialState)}>
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
