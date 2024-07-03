const mysql = require('mysql2');

//Configuración conexión a la bd
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
});

//Conexión
connection.connect((err) => {
    //Si hay error
    if (err) {
        console.log(`Error de la conexión con el servidor: ${err}`);
        return;
    }
    //Si no, 
    console.log('Estado de conexión: CONECTADA');

    //Creamos una consulta
    const sqlCreatedb = 'CREATE DATABASE IF NOT EXISTS users';

    //Pasar esta consulta a la base de datos
    connection.query(sqlCreatedb, (err, result) => {
        //En caso de error
        if (err) {
            console.log(`Error de la conexión con el servidor: ${err}`);
            return;
        }

        //Si no,
        console.log('Base de datos: CREADA/EXISTENTE/GARANTIZADA');
    });

    //Esta es la configuración de las tablas de la base, pero para no chocar con Cris, lo dejo comentado por el momento.
    // connection.changeUser({ database: 'products_db' }, (err) => {
    //     if (err) {
    //         console.log(`Error al cambiar a la base de datos products_db: ${err}`);
    //         return;
    //     }

    //     //Generamos la consulta para crear la tabla
    //     const createTableQuery = `
    //     CREATE TABLE IF NOT EXISTS products (
    //         id INT AUTO_INCREMENT PRIMARY KEY,
    //         name VARCHAR(100) NOT NULL,
    //         type VARCHAR(50) NOT NULL,
    //         price INT NOT NULL
    //     );
    // `;

    //     //Pasamos la consulta
    //     connection.query(createTableQuery, (err, results) => {
    //         //En caso de error
    //         if (err) {
    //             console.error('Error al crear la tabla:', err);
    //             return;
    //         }
    //         //Éxito
    //         console.log("Tabla: CREADA/EXISTENTE/GARANTIZADA");
    //     });
    // });
});

// Exportacion del módulo
module.exports = connection