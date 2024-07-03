const db = require("../db/db.js");


// createUser - POST
const createUser = (req, res)=>{
    // desestructuramos la req
    const {username, password, email} = req.body;

    // creamos la consulta
    const sql = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';

    //Enviamos la consulta a la bbdd
    db.query(sql,[title, director, year],(err, result)=>{
        //si sucede algun error
        if(err){throw err}
        //si todo sale bien
        res.json({mensaje:"Usuario Creado con éxito"})
    });
}




//7- Exportamos los módulos
module.exports = {
    createUser
}