const mongoose = require('mongoose')

const  clientSchema = mongoose.Schema({
    name: {
        type: String,
    },
    wallet: {
        type: Number,
        default: 0
    },
    basket: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Drug'
    }],
    isRecipe: {
        type: Boolean,
        default: false,
    }
})

const Client = mongoose.model('Client', clientSchema)

module.exports = Client