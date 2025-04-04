import { render, screen, fireEvent } from '@/test-setup'
import { Gitcoin } from '../Gitcoin'
import { click } from '@/modules/game'

const mockDispatch = vi.fn()

vi.mock('react-redux', async () => ({
  useDispatch: () => mockDispatch,
}))

describe('<Gitcoin />', () => {
  it('renders correctly', () => {
    render(<Gitcoin />)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByAltText(/Gitcoin/i)).toBeInTheDocument()
  })

  it('dispatches the click action when clicked', () => {
    render(<Gitcoin />)

    fireEvent.click(screen.getByRole('button'))

    expect(mockDispatch).toHaveBeenCalledTimes(1)
    expect(mockDispatch).toHaveBeenCalledWith(click())
  })
})
