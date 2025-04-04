import { Greeter } from './Greeter'
import { render, screen } from '@/test-setup'

describe('Greeter', () => {
  it('greets someone', () => {
    render(<Greeter name="John" />)

    expect(screen.getByText(/Hello John!/i)).toBeInTheDocument()
  })
})
