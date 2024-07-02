//Punto de acceso al servidor
const express = require('express');

const app = express();

const productRoutes = require('../routes/productRouter');

//Puerto
const PORT = 3000;

//middleware
app.use(express.json());

app.use('/product', productRoutes);

//Iniciación del servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})