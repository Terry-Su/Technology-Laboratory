const FS = require('fs')
const PATH = require('path')
const watchPath = require('../index')

const filePath = PATH.resolve(__dirname, './file')
let count = 0

watchPath(filePath, (cur, prev) => {
  count = count + 1
  console.log(`Changed: ${count} times`)
})