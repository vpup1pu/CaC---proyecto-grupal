const db = require('../db/db'); // Ajusta la ruta según tu estructura de proyecto
const { stuffNiño, stuffMujer, stuffHombre } = require('../scripts/products'); // Ajusta la ruta según tu estructura de proyecto

const allProducts = [...stuffNiño, ...stuffMujer, ...stuffHombre];

const insertProducts = () => {
    allProducts.forEach((product) => {

        const hasDiscount = (product.type === 'Descuentos');

        const query = `
            INSERT INTO products (product_name, price, frontImage, sideImage, type, has_discount)
            VALUES (?, ?, ?, ?, ?, ?)
        `;

        const values = [
            product.name,
            product.price,
            product.frontImage,
            product.sideImage,
            product.type,
            hasDiscount,
        ];

        db.query(query, values, (err, results) => {
            if (err) {
                console.error('Error inserting product:', err);
            } else {
                console.log('Product inserted:', results.insertId);
            }
        });
    });
};

// Llama a la función para insertar los productos
insertProducts();
