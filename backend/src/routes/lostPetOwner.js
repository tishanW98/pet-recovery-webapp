const express = require('express');
const router = express.Router();
const lostPetOwnerController = require('../controller/lostPetOwner');

router.post('/', lostPetOwnerController.register)
router.post('/login', lostPetOwnerController.login)

module.exports = router;