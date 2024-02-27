import { render, screen } from '@testing-library/react'
import { Section } from './Section'
import { Provider } from 'react-redux'
import { createStore } from '../../store'

describe('Section', () => {
  const initialState = {
    game: {
      lines: 6,
      linesPerMillisecond: 2,
      skills: {},
      items: [{
        id: 1,
        name: 'Bash',
        price: 10,
        linesPerMillisecond: 0.1
      }]
    }
  }

  it('Displays the owned skills', () => {
    render(
      <Provider store={createStore(initialState)}>
        <Section itemName="Bash" number={3} />
      </Provider>
    )

    expect(screen.getByText('Bash')).toBeInTheDocument()
    expect(screen.getAllByAltText('Bash')).toHaveLength(3)
  })

  it('Render anything on unknown skill', () => {
    <Provider store={createStore(initialState)}>
      render(<Section itemName="Unknown" number={3} />)
    </Provider>

    expect(screen.queryByText('Unknown')).not.toBeInTheDocument()
  })
})
