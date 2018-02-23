const PATH = require('path')
const watchPath = require('../index')

const filePath = PATH.resolve(__dirname, './file')
const folderPath = PATH.resolve(__dirname, './folder')

const callback = (event, path) => {
  console.log(event, path)
}

const fileWatcher = watchPath(filePath, callback)

// const folderWatcher = watchPath(folderPath, callback)



const folderWatcher1 = watchPath(PATH.resolve(__dirname, './folder1'), callback)
const folderWatcher2 = watchPath(PATH.resolve(__dirname, './folder2'), callback)
const folderWatcher3 = watchPath(PATH.resolve(__dirname, './folder3'), callback)