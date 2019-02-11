'use strict'
const { Product } = require('./../schema/product')

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
    static async addProduct(req, res) {
        try {
            let name = req.body.name
            if (name == null) throw { code: 400, message: 'Name is required' }
            let product = new Product({ name: name })
            await product.save()
            res.send({
                data: product,
                message: 'Product saved successfully',
                success: true,
                status: 200
            })
        } catch (error) {
            res.status(400).send({
                message: JSON.stringify(error),
                success: false,
                status: 400
            })
        }
    }
}

module.exports = { ProductController }