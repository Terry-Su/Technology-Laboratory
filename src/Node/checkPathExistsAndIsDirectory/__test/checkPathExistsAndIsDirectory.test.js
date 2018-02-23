const PATH = require('path')
const checkPathExistsAndIsDirectory = require('../index')

const testFolderPath = PATH.resolve(__dirname, './folder')
const testFilePath = PATH.resolve(__dirname, './file')
const emptyPath = PATH.resolve(__dirname, './empty')


console.log(
    `"testFolderPath"(${testFolderPath}) is directory? result: `,
    checkPathExistsAndIsDirectory(testFolderPath)
)

console.log(
    `"testFilePath"(${testFilePath}) is directory? result: `,
    checkPathExistsAndIsDirectory(testFilePath)
)

console.log(
    `"emptyPath"(${emptyPath}) is directory? result: `,
    checkPathExistsAndIsDirectory(emptyPath)
)