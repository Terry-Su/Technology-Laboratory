const FS = require('fs')
const PATH = require('path')
const GULP = require('gulp')

const checkPathExistsAndIsFile = require('./util/checkPathExistsAndIsFile')

const watch = (tryRestartWatch, filePath, callback) => {
  const watcher = GULP.watch(filePath)

  watcher.on('change', function (event) {
    const isContentChange = event.type === 'changed'
    const isFileDeleted = event.type === 'deleted'

    if (isContentChange) {
      callback()
    }

    if (isFileDeleted) {
      tryRestartWatch(watch, filePath, callback, 1000)
    }
  })

  return watcher
}

const tryRestartWatch = (watch, filePath, callback, interval) => {
  let intervalTimer
  const watchIfFileExist = () => {
    const existFile = checkPathExistsAndIsFile(filePath)
    if (existFile) {
      console.log('File occur')
      watch(tryRestartWatch, filePath, callback)
      clearInterval(intervalTimer)
    } else {
      // console.log('File do not exist')
    }
  }

  intervalTimer = setInterval(watchIfFileExist, interval)
}

module.exports = function (filePath, callback) {
  watch(tryRestartWatch, filePath, callback)
}