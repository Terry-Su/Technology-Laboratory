const express = require('express')
const app = express()
const FS = require('fs')

const buffer = FS.readFileSync('./origin.xlsx')

app.use(express.static('./'))

app.post('/excel', function (req, res) {
    res.json(buffer)
})


app.listen(3000)

