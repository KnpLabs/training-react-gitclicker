import { render } from '@/test-setup'
import GitClicker from '../GitClicker'

describe('GitClicker page', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<GitClicker />)

    expect(asFragment()).toMatchSnapshot()
  })
})
