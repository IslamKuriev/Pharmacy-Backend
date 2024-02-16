const Drug = require("../models/Drug.model")

module.exports.drugController = {
    postDrug: async (req, res) => {
        const { name, category, price, needRecipe } = req.body
     const result = await Drug.create({
        name: name,
        category: category,
        price: price,
        needRecipe: needRecipe
     })
     res.json(result)
    },

    deleteDrug: async (req, res) => {
    try {
    const result = await Drug.findByIdAndDelete(req.params.id)
    res.json(result)
    } catch {
    res.status(400).json('Ошибка!')
    }
    },

    getAllDrug: async (req, res) => {
        try {
        const result = await Drug.find().populate('category')
        res.json(result)
        } catch {
        res.status(400).json('Ошибка!')
        }
        },

        patchDrug: async (req, res) => {
            try {
            const result = await Drug.findByIdAndUpdate(req.params.id, req.body)
            res.json(result)
            } catch {
            res.status(400).json('Ошибка!')
            }
            }
}