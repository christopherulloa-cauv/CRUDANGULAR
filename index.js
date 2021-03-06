const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors")

//Servidor
const app = express();

//Base de Datos
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));


app.listen(4500, () => {
    console.log('Esta perfecto el servidor');
})