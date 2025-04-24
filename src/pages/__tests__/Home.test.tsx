import { render, screen } from '@/test-setup'
import Home from '../Home'

describe('Home page', () => {
  it('renders correctly', () => {
    render(<Home />)

    expect(screen.getByText(/Dogs have boundless enthusiasm/i)).toBeInTheDocument()
    expect(screen.getByText(/Play/i)).toBeInTheDocument()
  })
})
