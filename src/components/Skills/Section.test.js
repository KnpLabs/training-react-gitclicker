import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { Section } from './Section'
import configureStore from '../../configureStore'

describe('Section', () => {
  it('Displays the owned skills', () => {
    const initialState = {
      game: { 
        items: [{ name: 'Bash' }]
      }
    }

    render(
      <Provider store={configureStore(initialState)}>
        <Section itemName="Bash" number={3} />
      </Provider>
    )

    expect(screen.getByText('Bash')).toBeInTheDocument()
    expect(screen.getAllByAltText('Bash')).toHaveLength(3)
  })
})

