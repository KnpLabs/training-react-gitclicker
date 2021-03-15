import BashIcon from 'devicon/icons/bash/bash-original.svg'
import IEIcon from 'devicon/icons/ie10/ie10-original.svg'
import getItemIcon from './getItemIcon'

describe('getItemIcon', () => {
  it('provides icon for a known item', () => {
    const item = { name: 'Bash' }

    expect(getItemIcon(item)).toBe(BashIcon)
  })

  it('provides default icon for unknown item', () => {
    const item = { name: 'Some unknown language' }

    expect(getItemIcon(item)).toBe(IEIcon)
  })
})
