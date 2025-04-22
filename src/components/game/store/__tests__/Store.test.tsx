import { render, screen } from '@/test-setup'
import { Store } from '../Store'
import { items } from '@/utils/__mocks__/items.mock'

describe('Store', () => {
  it('renders correctly', () => {
    const initialState = {
      game: {
        lines: 6,
        linesPerMillisecond: 2,
        skills: {},
        items,
      },
    }

    render(<Store />, { preloadedState: initialState })

    expect(screen.getByText(/Bash/i)).toBeInTheDocument()
    expect(screen.getByText(/Git/i)).toBeInTheDocument()
    expect(screen.getByText(/Javascript/i)).toBeInTheDocument()
    expect(screen.getByText(/React/i)).toBeInTheDocument()
    expect(screen.getByText(/Vim/i)).toBeInTheDocument()
  })
})
