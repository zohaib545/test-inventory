'use strict'

const express = require('express')
const config = require('./config')
const api = require('./routes/api')
const bodyParser = require('body-parser')
const mongoose = require('./schema/mongoose')

const app = express()
app.use(bodyParser.json())
app.use('/api', api)

app.listen(config.PORT, function () {
    console.log(`Server is listening on ${config.PORT}`)
    mongoose.connect()
}).on('error', function () {
    console.log('Something went wrong')
})
