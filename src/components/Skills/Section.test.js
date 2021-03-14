import React from 'react'
import { render, screen } from '@testing-library/react'
import { Section } from './Section'

describe('Section', () => {
  it('Displays the owned skills', () => {
    render(<Section itemName="Bash" number={3} />)

    expect(screen.getByText('Bash')).toBeInTheDocument()
    expect(screen.getAllByAltText('Bash')).toHaveLength(3)
  })
})

