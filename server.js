'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

let app = express()
var port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())

// Keep this route as the last one
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

function renderMain (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
}

app.get('/', renderMain)
app.get('/*', renderMain)

app.listen(port, () => {
  console.log('Listening on %d', port)
})
