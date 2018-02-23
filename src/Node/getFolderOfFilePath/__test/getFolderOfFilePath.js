const PATH = require('path')
const getFolderOfFilePath = require('../index')

const testFilePath = PATH.resolve(__dirname, './file')


console.log(
    `"testFilePath"(${testFilePath})'s folder name: `,
    getFolderOfFilePath(testFilePath)
)