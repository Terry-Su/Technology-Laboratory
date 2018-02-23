const { debounce } = require('lodash')

const log = () => { console.log(`log every 3 seconds`) }

setInterval(
  debounce(log, 3000, { maxWait: 0 }),
  10
)



