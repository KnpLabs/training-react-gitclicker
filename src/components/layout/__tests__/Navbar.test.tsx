import { render } from '@/test-setup'
import { Navbar } from '../Navbar'

describe('Navbar page', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Navbar />)

    expect(asFragment()).toMatchSnapshot()
  })
})
