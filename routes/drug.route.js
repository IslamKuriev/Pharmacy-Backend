const { Router } = require('express')
const { drugController } = require('../controllers/drug.controller')
const router = Router()

router.post('/admin/drug', drugController.postDrug)
router.delete('/admin/delete/drug', drugController.deleteDrug)
router.get('/admin/drug', drugController.getAllDrug)
router.patch('/admin/update/drug/:id', drugController.patchDrug)

module.exports = router