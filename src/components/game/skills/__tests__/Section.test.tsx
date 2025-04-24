import { render, screen } from '@/test-setup'
import { Section } from '../Section'

describe('Section', () => {
  it('displays the owned skills', () => {
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
    render(<Section itemName="Bash" number={3} />, { preloadedState: initialState })

    expect(screen.getByText('Bash')).toBeInTheDocument()
    expect(screen.getAllByAltText('Bash')).toHaveLength(3)
  })

  it('render anything on unknown skill', () => {
    render(<Section itemName="Unknown" number={3} />)

    expect(screen.queryByText('Unknown')).not.toBeInTheDocument()
  })
})
