const R = require('ramda')

const greet = (time, firstName, lastName, punction) => `Good ${time}, ${firstName} ${lastName}${punction}`

const greetMorning = R.partial(greet)(['morning'])
const greetMorningPeterParker = R.partial(greetMorning)(['Peter', 'Parker'])

console.log(
  greetMorningPeterParker('!')
) 


