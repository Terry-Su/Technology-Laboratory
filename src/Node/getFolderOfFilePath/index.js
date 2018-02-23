const PATH = require('path')

module.exports = function (path) {
    return PATH.basename(path)
}