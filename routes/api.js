'use strict'

const { Router } = require('express')
const { ProductController } = require('./../controllers/ProductController')

const router = new Router()

/** PRODUCT */
router.get('/send-mail', ProductController.sendMail)
router.post('/product', ProductController.addProduct)

/** something else */
// ...

module.exports = router
