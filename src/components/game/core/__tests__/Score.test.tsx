import { Score } from '../Score'
import { render, screen } from '@/test-setup'

describe('Score', () => {
  it('should display the number of lines', () => {
    const initialState = {
      game: { lines: 6, linesPerMillisecond: 2, skills: {}, items: [] },
    }

    render(<Score />, { preloadedState: initialState })

    expect(screen.getByText(/6 lines/i)).toBeInTheDocument()
  })
})
