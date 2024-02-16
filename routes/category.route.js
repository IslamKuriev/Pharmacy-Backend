const { Router } = require('express')
const { categoryController } = require('../controllers/category.controller')
const router = Router()

router.post('/admin/category', categoryController.postCategory)
router.get('/admin/category', categoryController.getAllCategory)
router.delete('/admin/delete/category/:id', categoryController.deleteCategory)
router.patch('/admin/update/category/:id', categoryController.patchCategory)

module.exports = router