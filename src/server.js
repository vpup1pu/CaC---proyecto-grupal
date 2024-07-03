//Punto de acceso al servidor
const express = require('express');

const app = express();

const newUserRouter = require('../routes/newUserRouter');

//Puerto
const PORT = 3000;

//middleware
app.use(express.json());

app.use('/newUser', newUserRouter);

//Iniciación del servidor
app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
})