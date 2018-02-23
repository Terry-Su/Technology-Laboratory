const PATH = require('path')
const express = require('express')

const app = express()


app.use(express.static(
    PATH.resolve(__dirname, './public')
))

console.log(123123)


app.set('port', process.env.PORT || 3200);
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
