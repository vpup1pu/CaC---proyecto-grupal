const express = require('express');
const router = express.Router();
const { searchProductsByName, getAllProducts } = require('../controller/productController');

// Ruta para buscar productos por nombre
router.get('/search', searchProductsByName);
router.get('/all', getAllProducts);

module.exports = router;
