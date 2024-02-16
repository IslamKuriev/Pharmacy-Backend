const { Router } = require('express')
const { clientController } = require('../controllers/client.controller')
const router = Router()

router.post('/client', clientController.postClient)
router.patch('/client/add/basket/:id', clientController.addToBasket)
router.patch('/client/delete/basket/:id', clientController.deleteFromBasket)

module.exports = router