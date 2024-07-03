//Enrutador
const express = require('express');

const router = express.Router();

const newUserController = require('../controller/newUserController');

//Métodos (CRUD)
router.post('/post', newUserController.createUser);
// router.post();
// router.put();
// router.delete();

//Exportación
module.exports = router;