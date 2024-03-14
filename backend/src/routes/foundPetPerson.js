const express = require('express');
const router = express.Router();
const foundPetPersonController = require('../controller/foundPetPerson');

router.post('/', foundPetPersonController.register)
router.post('/login', foundPetPersonController.login)

module.exports = router;