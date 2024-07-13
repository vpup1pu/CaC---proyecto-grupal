const db = require('../db/db');


const getAllProducts = (req, res) => {
    const query = 'SELECT * FROM products'; // Ajusta el nombre de la tabla según tu esquema de base de datos

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).send('Error fetching products.');
        }
        res.json(results);
    });
};

// Función para buscar productos por nombre
const searchProductsByName = (req, res) => {
    const { name } = req.query;
    if (!name) {
        return res.status(400).send('Name query parameter is required.');
    }
    
    const query = 'SELECT * FROM products WHERE product_name LIKE ?';
    const queryParams = [`%${name}%`];

    db.query(query, queryParams, (err, results) => {
        if (err) {
            console.error('Error searching products:', err);
            return res.status(500).send('Error searching products.');
        }
        if (results.length === 0) {
            return res.status(404).send('No products found.');
        }
        res.status(200).json(results);
    });
};

module.exports = {
    searchProductsByName,
    getAllProducts,
};

