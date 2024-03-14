const express = require('express');
const router = express.Router()
const petController = require('../controller/pet')

const verifyToken = require('../middlewears/verifyToken')

router.post('/', petController.create)
router.put('/:id', petController.update)
router.delete('/:id', petController.delete)

router.get('/all', petController.getAll)

router.get('/:id', petController.getOne)
router.get('searchResults', petController.search)

module.exports = router;