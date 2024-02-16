const mongoose = require('mongoose')

const drugSchema = mongoose.Schema({
    name: {
        type: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    price: {
        type: Number
    },
    needRecipe: {
        type: Boolean,
        default: false,
    }
})

const Drug = mongoose.model('Drug', drugSchema)

module.exports = Drug