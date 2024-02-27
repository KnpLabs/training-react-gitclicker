function numberWithDot(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

function numberFormat(x: number) {
  const number = Math.ceil(x)

  if (number < 1000000) return numberWithDot(number)

  const numberOfMillion = Math.floor(number / 1000000 * 1000) / 1000

  return `${numberWithDot(numberOfMillion)} millions`
}

export default numberFormat
