//Controlador: Métodos más importantes

//Vinculación con base de datos
const db = require("../db/db.js");

//Método get
const searchProducts = (req, res) => {
    //Consulta del usuario
    const query = req.query.q;//Esta linea es importante porque va a extraer lo que usuario ingresa en el buscador. Si por ej el usuario ingresa 'Zapatillas deportivas', desde el frontend se va a ser una consulta a la URL como por ej:
    //GET /products/search?q=Zapatillas+deportivas
    //entonces en la constante query se almacena ese valor, 'Zapatillas deportivas', y la necesito para consultar a la base de datos
    const sql = 'SELECT * FROM products WHERE name LIKE ?';

    //Consulta a la db
    db.query(sql, [`%${query}%`], (err, result) =>{
        //si sucede algun error
        if(err){throw err};
        //si todo sale bien
        res.json(result);
    });
};
//Notese que 'LIKE' de SQL se utiliza con '%' para encontrar cualquier parte del nombre del producto

module.exports = {
    searchProducts
};