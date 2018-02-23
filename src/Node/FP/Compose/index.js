const R = require('ramda')

const result = R.compose(R.add(1), R.multiply(2))(5)

console.log(
  result
)