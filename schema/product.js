const { mongoose } = require('./mongoose')

var productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

let Product = mongoose.model('Product', productSchema)

module.exports = { Product }
