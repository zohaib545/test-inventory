'use strict'

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const mongoConnection = process.env.MONGO_CONNECTION || require('./../config').MONGO_CONNECTION

const connect = () => {
    mongoose.connect(mongoConnection, {
        useNewUrlParser: true,
        useCreateIndex: true
    }, (err) => {
        if (err) { console.log(err) } else console.log('Db Connected')
    })
}

module.exports = { mongoose, connect }