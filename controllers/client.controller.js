const Client = require("../models/Client.model")
const Drug = require('../models/Drug.model')

module.exports.clientController = {
    postClient: async (req, res) => {
        const { name, wallet} = req.body
     const result = await Client.create({
        name: name,
    })
     res.json(result)
    },
    addToBasket:async (req, res) => {
     try {
     const client = Client.findById(req.params.id)
     const drug = Drug.findById(req.body.drug)
     const recipe = client.isRecipe
     if(drug.needRecipe) {
        if(!recipe) {
            res.json('Для этого лекарства нужен рецепт!')
        }
     }
     await client.updateOne({
        $push: {basket: req.body.drug}
     })
     res.json('Добавлено в корзину')
     } catch {
     res.status(400).json('Ошибка!')
     }
    },

    deleteFromBasket:async (req, res) => {
        try {
             const client = await Client.findById(req.params.id)
             await  client.updateOne({ $pull: {basket: req.body.basket} })
             res.json('Лекарство удалено')

        } catch {
            res.status(400).json('Ошибка!')
        }
    
    }
}