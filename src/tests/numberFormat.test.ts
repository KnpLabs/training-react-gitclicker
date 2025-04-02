import numberFormat from './numberFormat'

describe('numberFormat', () => {
  it('format numbers bellow 1.000', () => {
    const number = 234
    expect(numberFormat(number)).toBe('234')
  })

  it('format numbers bellow 1.000.000', () => {
    const number = 123234
    expect(numberFormat(number)).toBe('123.234')
  })

  it('format numbers above 1.000.000', () => {
    const number = 12123234
    expect(numberFormat(number)).toBe('12.123 millions')
  })
})
