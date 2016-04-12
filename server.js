'use strict'

const express = require('express')
const path = require('path')

let app = express()

app.use(express.static(path.join(__dirname, 'public')))

// Keep this route as the last one
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(8080, () => {
  console.log('Listening on 8080')
})
