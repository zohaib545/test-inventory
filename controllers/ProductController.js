'use strict'
const { Product } = require('./../schema/product')
const { Response } = require('./../utils/Response')
const { ErrorHandler } = require('./../utils/ErrorHandler')
const { mailSender } = require('./../utils/MailSender')
const { PromiseEjs } = require('./../utils/PromiseEjs')

class ProductController {
    /**
     * API | POST
     * Adds a product to database
     * @example {
     *      name: String
     * }
     * @param {*} req
     * @param {*} res
     */
    static async addProduct (req, res) {
        try {
            let name = req.body.name
            if (name == null) throw { code: 400, message: 'Name is required' }
            let product = new Product({ name: name })
            await product.save()
            return new Response(res, {
                data: product,
                message: 'Product saved successfully',
                success: true,
                status: 200
            })
        } catch (error) {
            ErrorHandler.sendError(res, error)
        }
    }

    /**
     * API | GET
     * Sends an email
     * @param {*} req
     * @param {*} res
     */
    static async sendMail (req, res) {
        try {
            let email = req.query.email
            let html = await PromiseEjs.renderFile('./emails/test.ejs', {})
            mailSender.sendMail(email, 'Test email subject', html)
            return new Response(res, { success: true })
        } catch (error) {
            ErrorHandler.sendError(res, error)
        }
    }
}

module.exports = { ProductController }
