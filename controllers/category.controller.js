const Category = require("../models/Category.model")

module.exports.categoryController = {
    postCategory: async (req, res) => {
        const { name } = req.body
     const result = await Category.create({
        name: name
     })
     res.json(result)
    },

    getAllCategory: async (req, res) => {
    try {
    const result = await Category.find()
    res.json(result)
    } catch {
    res.status(400).json('Ошибка')
    }
    },

    deleteCategory: async (req, res) => {
        try {
        const result = await Category.findByIdAndDelete(req.params.id)
        res.json(result)
        } catch {
        res.status(400).json('Ошибка')
        }
        },

        patchCategory: async (req, res) => {
            const { name } = req.body
            try {
            const result = await Category.findByIdAndUpdate(req.params.id, {
               name: name
            })
            res.json(result)
            } catch {
            res.status(400).json('Ошибка')
            }
            }
}