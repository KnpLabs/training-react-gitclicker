import { render } from '@/test-setup'
import GitClicker from '../GitClicker'
import { items } from '@/utils/__mocks__/items.mock'

describe('GitClicker page', () => {
  it('renders correctly', () => {
    const initialState = {
      game: {
        lines: 0,
        linesPerMillisecond: 0,
        skills: {},
        items,
      },
    }
    const { asFragment } = render(<GitClicker />, { preloadedState: initialState })

    expect(asFragment()).toMatchSnapshot()
  })
})
