const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

// Configuración conexión a la bd
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true,
});

// Conexión inicial
connection.connect((err) => {
    if (err) {
        console.error(`Error de conexión con el servidor: ${err}`);
        return;
    }
    console.log('Estado de conexión: CONECTADA');

    // Crear la base de datos si no existe
    const createDbQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`;

    connection.query(createDbQuery, (err, result) => {
        if (err) {
            console.error(`Error al crear o verificar la base de datos: ${err}`);
            return;
        }
        console.log('Base de datos: CREADA/EXISTENTE/GARANTIZADA');

        // Cambiar a la base de datos seleccionada
        connection.changeUser({ database: process.env.DB_NAME }, (err) => {
            if (err) {
                console.error(`Error al cambiar a la base de datos ${process.env.DB_NAME}: ${err}`);
                return;
            }

            console.log(`Usando la base de datos ${process.env.DB_NAME}`);

            // Exportar la conexión para usar en otros archivos
            module.exports = connection;
        });
    });
});


// Manejar errores de conexión
connection.on('error', (err) => {
    console.error(`Error de conexión con la base de datos: ${err}`);
});



// Exportar el módulo
module.exports = connection;

