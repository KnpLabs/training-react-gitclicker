export default item => {
  const { name, price, multiplier } = item
  const errors = {}

  if (!name) {
    errors.name = 'Required.'
  }

  if (!price) {
    errors.price = 'Required.'
  }

  if (!multiplier) {
    errors.multiplier = 'Required.'
  }

  if (price < 0) {
    errors.price = 'Must be a positive integer.'
  }

  if (multiplier < 0) {
    errors.multiplier = 'Must be a positive integer.'
  }

  return errors
}
