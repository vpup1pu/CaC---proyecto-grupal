//Enrutador
const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

//Métodos (CRUD)
router.get('/search', productController.searchProducts);
// router.post();
// router.put();
// router.delete();

//Exportación
module.exports = router;
