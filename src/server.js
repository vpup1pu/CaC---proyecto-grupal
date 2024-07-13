//Punto de acceso al servidor
const express = require('express');

const app = express();

const cors = require('cors');

const newUserRouter = require('../routes/newUserRouter');

const newUserController = require('../controller/newUserController');

const productRouter = require('../routes/productRouter');

const dotenv = require('dotenv');

newUserController.createDatabaseAndTable();

require('../controller/insertProducts')

// Configuración de dotenv
dotenv.config();


//Puerto
const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin: 'http://127.0.0.1:5500', // Permitir solo este origen
    methods: ['GET', 'POST'], // Permitir solo estos métodos HTTP
    allowedHeaders: ['Content-Type'], // Permitir solo estos encabezados
};


//middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use('/register', newUserRouter);

app.use('/products', productRouter);



// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
});


//Iniciación del servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})