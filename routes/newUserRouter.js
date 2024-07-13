//Enrutador
const express = require('express');

const router = express.Router();

const newUserController = require('../controller/newUserController');

//Métodos (CRUD)
router.post('/user', newUserController.registerUser);
router.get('/user/:id', newUserController.getUserById);
router.get('/users', newUserController.getAllUsers);
router.put('/user/:id', newUserController.updateUser);
router.delete('/user/:id', newUserController.deleteUser);
router.delete('/users', newUserController.deleteAllUsers);
// router.post();
// router.put();
// router.delete();

//Exportación
module.exports = router;