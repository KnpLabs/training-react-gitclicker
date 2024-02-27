import BashIcon from 'devicon/icons/bash/bash-original.svg'
import IEIcon from 'devicon/icons/ie10/ie10-original.svg'
import getItemIcon from './getItemIcon'

describe('getItemIcon', () => {
  it('provides icon for a known item', () => {
    const item = {
      id: 1,
      name: 'Bash',
      price: 10,
      linesPerMillisecond: 0.5
    }

    expect(getItemIcon(item)).toBe(BashIcon)
  })

  it('provides default icon for unknown item', () => {
    const item = {
      id: 1,
      name: 'Unknown item',
      price: 10,
      linesPerMillisecond: 0.5
    }

    expect(getItemIcon(item)).toBe(IEIcon)
  })
})
