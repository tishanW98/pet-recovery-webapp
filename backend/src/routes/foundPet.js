const express = require('express');
const router = express.Router()
const foundpetController = require('../controller/foundPet')

const verifyToken = require('../middlewears/verifyToken')

router.post('/', foundpetController.create)
router.put('/:id', foundpetController.update)
router.delete('/:id', foundpetController.delete)

router.get('/all', foundpetController.getAll)

router.get('/:id', foundpetController.getOne)
router.get('searchResults', foundpetController.search)

module.exports = router;