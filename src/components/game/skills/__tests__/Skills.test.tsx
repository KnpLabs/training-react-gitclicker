import { render, screen } from '@/test-setup'
import { Skills } from '../Skills'
import { items } from '@/utils/__mocks__/items.mock'

describe('Skills', () => {
  it('renders correctly', () => {
    const initialState = {
      game: {
        lines: 6,
        linesPerMillisecond: 2,
        skills: { Bash: 2, Git: 3, Javascript: 4 },
        items,
      },
    }

    render(<Skills />, { preloadedState: initialState })

    expect(screen.getByText(/Bash/i)).toBeInTheDocument()
    expect(screen.getByText(/Git/i)).toBeInTheDocument()
    expect(screen.getByText(/Javascript/i)).toBeInTheDocument()
  })
})
