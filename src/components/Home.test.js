import React from 'react'
import { Home } from './Home'
import { MemoryRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <Home />
      </Router>
    )

    expect(screen.getByText(/Dogs have boundless enthusiasm/i)).toBeInTheDocument()
    expect(screen.getByText(/Play/i)).toBeInTheDocument()
  })
})
