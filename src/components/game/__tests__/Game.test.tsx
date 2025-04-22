import { Game } from '../Game'
import { render, screen } from '@/test-setup'

describe('Game', () => {
  it('renders correctly', async () => {
    const initialState = {
      game: {
        lines: 6,
        linesPerMillisecond: 2,
        skills: {},
        items: [{
          id: 1,
          name: 'Bash',
          price: 10,
          linesPerMillisecond: 0.1,
        }],
      },
    }

    render(<Game />, { preloadedState: initialState })

    expect(screen.getByText(/6 lines/)).toBeInTheDocument()
    expect(screen.getByText(/per second: 20/)).toBeInTheDocument()
    expect(screen.getByText(/Skills/)).toBeInTheDocument()
    expect(screen.getByText(/Store/)).toBeInTheDocument()
    expect(screen.getByText(/Bash/)).toBeInTheDocument()

    await screen.findByText(/8 lines/, undefined, { timeout: 150 })
    await screen.findByText(/10 lines/, undefined, { timeout: 150 })
  })
})
