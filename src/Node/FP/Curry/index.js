const R = require('ramda')


const addNumbers = (a, b, c) => a + b + c

const curriedAddNumbers = R.curry(addNumbers)

const addAB = curriedAddNumbers(1, 3)

const result = addAB(5)

console.log(result)