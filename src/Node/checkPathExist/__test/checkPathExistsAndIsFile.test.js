const PATH = require('path')
const checkPathExistsAndIsFile = require('../index')

const testFolderPath = PATH.resolve(__dirname, './folder')
const testFilePath = PATH.resolve(__dirname, './file')
const emptyPath = PATH.resolve(__dirname, './empty')

console.log(
    `"testFilePath"(${testFilePath}) is file? result: `,
    checkPathExistsAndIsFile(testFilePath)
)

console.log(
    `"testFolderPath"(${testFolderPath}) is file? result: `,
    checkPathExistsAndIsFile(testFolderPath)
)


console.log(
    `"emptyPath"(${emptyPath}) is file? result: `,
    checkPathExistsAndIsFile(emptyPath)
)