import { Score } from './Score'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { createStore } from '../../store'

describe('Score', () => {
  it('should displays the number of lines', () => {
    const initialState = {
      game: { lines: 6, linesPerMillisecond: 2, skills: {}, items: []}
    }

    const { getByText } = render(
      <Provider store={createStore(initialState)}>
        <Score />
      </Provider>
    )

    expect(getByText(/6 lines/i)).toBeInTheDocument()
  })
})
