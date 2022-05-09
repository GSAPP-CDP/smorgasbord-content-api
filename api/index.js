import * as contentjson from '../data/content.json';


const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/content', function (req, res) {
  res.json({ data: contentjson})
})


module.exports = { path: '/api', handler: app }

