// Archivo con el que se arranca el proyecto
require('./config/config');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// Ruta de acceso a las vistas
app.use(express.static(path.resolve(__dirname, '../public')));
// Controlador central (Parecido al homecontroller)
app.use(require('./routes/index'));

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en el puerto ${process.env.PORT}`);
});