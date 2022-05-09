import * as modulesjson from '../data/modules.json';


const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.json(modulesjson)
})

app.get('/modules', function (req, res) {
  res.json(modulesjson.modules)
})

app.get('/sequences', function (req, res) {
  res.json(modulesjson.sequences)
})


module.exports = { path: '/api', handler: app }

